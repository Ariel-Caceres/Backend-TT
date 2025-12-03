
import { generateToken } from "../../data/tokenTest.js"

export const login = async (req, res) => {
    const { email, password } = req.body
    if (email == "test@gmail.com" && password == "123456") {
        const user = { email: email, id: 123 }
        const token = generateToken(user)
        res.json({ token })
    } else {
        res.sendStatus(401)
    }
}