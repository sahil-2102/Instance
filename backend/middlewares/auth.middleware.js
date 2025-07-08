import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        if(!token) return res.json({success: false, message: "Unauthorized!"});
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Error in auth middleware: ", error.message);
        return res.json({success: false, message: "Internal serevr error!"});
    }
}
export default isAuthenticated;