import jwt from "jsonwebtoken"

const secret_key = process.env.JWT_SECRET
export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email }
    const expiration = { expiresIn: "1h" }
    return jwt.sign(user, secret_key, expiration)

}
// const token = generateToken({ id: 1, email: "test@gmail.com" })
// console.log({ token });
