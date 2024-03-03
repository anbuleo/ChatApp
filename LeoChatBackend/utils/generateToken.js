import jwt from 'jsonwebtoken'


const generateTokenAndCookie = (userId, res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: "15d"   //process.env.JWT_EXPIRE
    })
    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, //15days,24hrs,60min,60sec,1000milisec
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}
export default generateTokenAndCookie