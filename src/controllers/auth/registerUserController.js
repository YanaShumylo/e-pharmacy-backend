import { registerUser } from '../../services/auth/registerUser.js';
import { saveFileToUploadDir } from '../../utils/saveFileToUploadDir.js';
import { getEnvVar } from '../../utils/getEnvVar.js';
import { saveFileToCloudinary } from '../../utils/saveFileToCloudinary.js';

export const registerUserController = async (req, res, next) => {
  try {
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
      } catch (err) {
    next(err);
  }
};