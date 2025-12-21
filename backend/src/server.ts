import express, { Response, Request } from "express";
import cors from "cors";
import EncryptPassword, { comparePass } from "./encryptPassword";
const app = express();
app.use(cors());
app.use(express.json());
export type userProps = {
  id: number;
  name: string;
  email: string;
  password: string;
};
const users: userProps[] = [];
app.post("/auth/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    res.status(401).json({ success: false });
  } else {
    const comparePassword = await comparePass({
      password: password,
      encryptPass: user.password,
    });
    if (comparePassword) return res.status(200).json({ success: true });
    else res.status(401).json({ success: true });
  }
});
app.post("/auth/register", async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  const searchCredentials = users.find((u) => u.email === email);
  if (searchCredentials) {
    res.status(401).json({ success: false });
  } else {
    const passEncrypt = await EncryptPassword({ password: password });
    users.push({
      id: users.length + 1,
      name: name,
      email: email,
      password: passEncrypt,
    });
    res.status(200).json({ success: true });
  }
});

app.listen(3000, () => {
  console.log("Iniciando puerto");
  console.log(users);
});
