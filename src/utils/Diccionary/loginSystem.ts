import type { FromProps } from "@/caja-componentes/login";
import type { Dispatch, SetStateAction, ChangeEvent } from "react";
type addObjProps = {
  e: ChangeEvent<HTMLInputElement>;
  SetSubmitRegister?: Dispatch<SetStateAction<FromProps>>;
  SetSubmitLogin?: Dispatch<SetStateAction<FromProps>>;
};
export const addObj = (props: addObjProps) => {
  const { e, SetSubmitRegister, SetSubmitLogin } = props;
  const { name, value, type: inputType, checked } = e.target;
  const action =
    inputType === "checkbox" ? checked : value.trim().toLowerCase();
  const setFunction = SetSubmitLogin ?? SetSubmitRegister;
  setFunction?.((obj) => ({
    ...obj,
    [name]: action,
  }));
};

type messageProps = {
  obj: FromProps;
  SetAlertInput: Dispatch<SetStateAction<boolean>>;
  SetPasswordConfirm?: Dispatch<SetStateAction<boolean>>;
  SetConditions: Dispatch<SetStateAction<boolean>>;
  conditions: boolean;
  alertInput: boolean;
  passwordConfirm?: boolean;
};
export const RegisterMessage = (props: messageProps) => {
  const {
    obj,
    SetAlertInput,
    SetPasswordConfirm,
    SetConditions,
    conditions,
    alertInput,
    passwordConfirm,
  } = props;
  if (conditions || alertInput || passwordConfirm) {
    SetAlertInput(false);
    if (SetPasswordConfirm) SetPasswordConfirm(false);
    SetConditions(false);
  }
  for (const values of Object.values(obj)) {
    if (values === "") return SetAlertInput(true);
    if (!values) return SetConditions(true);
  }
  if (SetPasswordConfirm) {
    if (obj.password !== obj.confirmPassword) return SetPasswordConfirm(true);
  }
};
