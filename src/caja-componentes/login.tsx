import { User, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
type UserProps = {
  SetViewLogin: Dispatch<SetStateAction<boolean>>;
};
const Login = (props: UserProps) => {
  const { SetViewLogin } = props;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-300">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
          <button
            className="absolute top-4 right-4 z-10 p-1.5 hover:bg-gray-100 rounded-lg transition-colors group"
            aria-label="Cerrar"
            onClick={() => SetViewLogin(false)}
          >
            <X className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
          </button>

          <HeaderLogin />
          <div className="px-6 py-6 sm:px-8 sm:py-6">
            <FromLogin />
          </div>

          <FooterLogin />
        </div>
      </div>
    </div>
  );
};

const HeaderLogin = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-6 sm:px-8 sm:py-8 text-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
        <User className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
        Bienvenido
      </h2>
      <p className="text-blue-100 text-xs sm:text-sm">
        Inicia sesión en tu cuenta
      </p>
    </div>
  );
};

const FromLogin = () => {
  return (
    <form className="space-y-3.5 sm:space-y-4">
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <span className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            Recordarme
          </span>
        </label>
        <button
          type="button"
          className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors text-left sm:text-right"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 sm:py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 sm:hover:-translate-y-0.5 text-sm"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

const FooterLogin = () => {
  return (
    <div className="px-6 py-4 sm:px-8 sm:py-5 bg-gray-50 border-t border-gray-100 text-center">
      <p className="text-xs sm:text-sm text-gray-600">
        ¿No tienes una cuenta?{" "}
        <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
          Regístrate aquí
        </button>
      </p>
    </div>
  );
};

export default Login;
