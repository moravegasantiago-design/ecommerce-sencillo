import { UserPlus, X } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";

type UserProps = {
  SetViewLogin: Dispatch<SetStateAction<boolean>>;
};

const Login = (props: UserProps) => {
  const { SetViewLogin } = props;
  const [systemLogin, SetSystemLogin] = useState<boolean>(false);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 overflow-y-auto"
      onClick={() => SetViewLogin(false)}
    >
      <div
        className="w-full max-w-md my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
          <button
            className="absolute top-3 right-3 z-10 p-1 hover:bg-gray-100 rounded-lg transition-colors group"
            aria-label="Cerrar"
            onClick={() => SetViewLogin(false)}
          >
            <X className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
          </button>

          <HeaderLogin systemLogin={systemLogin} />
          <div className="px-6 py-3 sm:px-7 sm:py-3">
            {systemLogin ? <FormRegister /> : <FromLogin />}
          </div>

          <FooterLogin
            systemLogin={systemLogin}
            SetSystemLogin={SetSystemLogin}
          />
        </div>
      </div>
    </div>
  );
};

const HeaderLogin = (props: { systemLogin: boolean }) => {
  const { systemLogin } = props;
  return (
    <div
      className={`bg-gradient-to-r from-indigo-600 to-purple-600 text-center transition-all duration-300 ${
        systemLogin ? "px-6 py-1 sm:px-7 sm:py-2" : "px-6 py-5 sm:px-7 sm:py-6"
      }`}
    >
      <div
        className={`bg-white rounded-full flex items-center justify-center mx-auto shadow-lg transition-all duration-300 ${
          systemLogin
            ? "w-10 h-10 sm:w-12 sm:h-12 mb-1.5"
            : "w-12 h-12 sm:w-14 sm:h-14 mb-2"
        }`}
      >
        <UserPlus
          className={`text-indigo-600 transition-all duration-300 ${
            systemLogin ? "h-5 w-5 sm:h-6 sm:w-6" : "h-6 w-6 sm:h-7 sm:w-7"
          }`}
        />
      </div>
      <h2
        className={`font-bold text-white transition-all duration-300 ${
          systemLogin
            ? "text-base sm:text-lg mb-0.5"
            : "text-lg sm:text-xl mb-1"
        }`}
      >
        {systemLogin ? "¿No tienes una cuenta?" : "Bienvenido"}
      </h2>
      <p
        className={`text-indigo-100 font-medium transition-all duration-300 ${
          systemLogin ? "text-xs" : "text-xs sm:text-sm"
        }`}
      >
        {systemLogin ? "Regístrate aquí" : "Inicia sesión en tu cuenta"}
      </p>
    </div>
  );
};

const FromLogin = () => {
  return (
    <form className="space-y-2.5 sm:space-y-3">
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full px-3 py-2 sm:px-3.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 sm:px-3.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-0 pt-1">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
            Recordarme
          </span>
        </label>
        <button
          type="button"
          className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors text-left sm:text-right"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 sm:py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm mt-1"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

type FooterProps = {
  systemLogin: boolean;
  SetSystemLogin: Dispatch<SetStateAction<boolean>>;
};

const FooterLogin = (props: FooterProps) => {
  const { systemLogin, SetSystemLogin } = props;
  return (
    <div className="px-6 py-3 sm:px-7 sm:py-3 bg-gray-50 border-t border-gray-100 text-center">
      <p className="text-xs sm:text-sm text-gray-600">
        {systemLogin ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
        <button
          className={`${
            systemLogin
              ? "text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              : "text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          }`}
          onClick={() => SetSystemLogin((Boolean) => !Boolean)}
        >
          {systemLogin ? "Inicia sesión aquí" : "Regístrate aquí"}
        </button>
      </p>
    </div>
  );
};

export const FormRegister = () => {
  const inputClass =
    "w-full px-3 py-2 sm:px-3.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200";

  const labelClass = "block text-xs sm:text-sm font-medium text-gray-700 mb-1";

  return (
    <form className="space-y-2.5 sm:space-y-3">
      <div>
        <label className={labelClass}>Nombre completo</label>
        <input type="text" placeholder="Juan Pérez" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Correo electrónico</label>
        <input type="email" placeholder="tu@email.com" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Contraseña</label>
        <input
          type="password"
          placeholder="Mínimo 8 caracteres"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Confirmar contraseña</label>
        <input
          type="password"
          placeholder="Repite tu contraseña"
          className={inputClass}
        />
      </div>

      <label className="flex items-start gap-2 cursor-pointer group pt-1">
        <input
          type="checkbox"
          className="w-3.5 h-3.5 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
        />
        <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
          Acepto los{" "}
          <button
            type="button"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            términos y condiciones
          </button>
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 sm:py-2.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm mt-1"
      >
        Crear cuenta
      </button>
    </form>
  );
};

export default Login;
