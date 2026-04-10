import { registerUser,loginUser, logoutUser, refreshUsersSession  } from '../services/auth.js';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';
import { getEnvVar } from '../utils/getEnvVar.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';
import { ONE_DAY } from '../constants/index.js';
import createHttpError from 'http-errors';

export const registerUserController = async (req, res) => {
    const photo = req.file;
    let photoUrl;
    if (photo) {
       if (!['image/jpeg', 'image/png', 'image/webp'].includes(photo.mimetype)) {
        return res.status(400).json({
          status: 400,
          message: 'Invalid file type. Only JPEG, PNG, and WEBP are allowed.',
        });
       }
    if (getEnvVar('ENABLE_CLOUDINARY') === 'true') {
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }
    const userData = {
      ...req.body,
      photo: photoUrl,
    };
  const user = await registerUser(userData);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const logoutUserController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logoutUser(req.cookies.sessionId);
  }
  res.clearCookie('sessionId', {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
  res.clearCookie('refreshToken', {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(204).send();
};

const setupSession = (res, session) => {
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
};

export const refreshUserSessionController = async (req, res) => {
  const session = await refreshUsersSession({
    sessionId: req.cookies.sessionId,
    refreshToken: req.cookies.refreshToken,
  });
  setupSession(res, session);
  res.json({
    status: 200,
    message: 'Successfully refreshed a session!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const getUserInfoController = async (req, res) => {
  if (!req.user) {
    throw createHttpError(401, 'User not authenticated');
  }
  res.status(200).json({
    status: 200,
    message: 'User info retrieved successfully',
    data: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    },
  });
};