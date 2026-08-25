import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if(!token){
      return res.status(401).json({
        message: "Token not found",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}; 

export default verifyToken;