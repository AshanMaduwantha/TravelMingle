import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({ success: false, message: 'User not authenticated' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded || !decoded.id) {
            return res.status(401).json({ success: false, message: 'User not authenticated' });
        }

        req.body.userID = decoded.id; // Ensure userID is correctly set

        next();
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export default userAuth;