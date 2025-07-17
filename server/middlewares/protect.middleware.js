import jwt from 'jsonwebtoken';

const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if(!token){
            return res.status(400).json({success:false, message:"Unauthorized user!"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(400).json({success:false, message:"Not Authorized!"});
        }
        req.user = decoded.id
        next()
    } catch (error) {
        console.log(`Error in protected middleware: ${error.message}`);
        return res.status(500).json({success:false,message:"Internal server error!"});
    }
}
export default protectedRoute;