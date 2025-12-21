import bcrypt from "bcrypt";
const EncryptPassword = async (props: { password: string }) => {
  const { password } = props;
  return await bcrypt.hash(password, 10);
};
export default EncryptPassword;
export const comparePass = async (props: {
  password: string;
  encryptPass: string;
}) => {
  const { password, encryptPass } = props;
  return await bcrypt.compare(password, encryptPass);
};
