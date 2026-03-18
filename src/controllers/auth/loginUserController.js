import { loginUser } from '../../services/auth/loginUser.js';
import { ONE_DAY } from '../../constants/index.js';

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