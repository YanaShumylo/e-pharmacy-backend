import createHttpError from 'http-errors';

export const getUserInfoController = async (req, res, next) => {
  try {
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
        phone: req.user.phone,
      },
    });
  } catch (err) {
    next(err);
  }
};