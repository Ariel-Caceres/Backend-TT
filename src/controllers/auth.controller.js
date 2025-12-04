
import { generateToken } from "../../data/tokenTest.js"

export const login = async (req, res) => {
    const { email, password } = req.body
    if (!password || !email) {
        return res.status(400).json({
            success: false,
            message: "Faltan campos obligatorios"
        });
    }
    if (email == "test@gmail.com" && password == "123456") {
        const user = { email: email, id: 123 }
        const token = generateToken(user)
        res.json({ token })
    } else {
        res.sendStatus(401)
    }
}