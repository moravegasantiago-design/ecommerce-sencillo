import express, { Response, Request } from "express";
import cors from "cors";
import EncryptPassword, { comparePass } from "./encryptPassword";
import cookieParser from "cookie-parser";
import { createToken } from "./cookieSystem";
import jwt from "jsonwebtoken";
import { PORT, SECRET_KEY } from "./secretVariable";
import { selectUser, userInsert } from "./bd";
const app = express();
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || ["http://localhost:5173"].includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
export type userProps = {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
};
app.post("/auth/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await selectUser(email);
  if (!user) {
    res.status(401).json({ success: false });
  } else {
    const comparePassword = await comparePass({
      password: password,
      encryptPass: user.password,
    });
    if (comparePassword) {
      createToken({ res: res, user: user, SECRET_KEY: SECRET_KEY });
      res.status(200).json({ success: true });
    } else return res.status(401).json({ success: false });
  }
});
app.post("/auth/register", async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;
    const passEncrypt = await EncryptPassword({ password: password });
    const searchCredentials = await userInsert({
      name: name,
      email: email,
      password: passEncrypt,
      created_at: new Date(),
    });
    if (!searchCredentials)
      return res
        .status(401)
        .json({ success: false, error: "No se puedo crear el usuario" });
    else return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Error interno" });
  }
});

app.get("/me", (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    const data = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    console.error(err);
    res.status(401).json({ success: false, error: "Token invalido" });
  }
});
app.listen(PORT, () => {
  console.log("Iniciando puerto");
});
