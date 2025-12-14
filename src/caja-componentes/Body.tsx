import { ShoppingCart, Heart, Star } from "lucide-react";
import type { ReactNode } from "react";
import GetDiccinary from "@/utils/Diccionary/GetDiccionary";
type BodyProps = {
  Title: ReactNode;
  Nav: ReactNode;
  CardProduct: ReactNode;
};
const Body = (props: BodyProps) => {
  const { Title, Nav, CardProduct } = props;
  return (
    <>
      {/* ========== HEADER========== */}
      <div className="mb-8">{Title}</div>
      {/* ========== NAV ========== */}
      <div className="mb-8 border-b border-gray-200">
        <div className="flex gap-1 overflow-x-auto pb-px">{Nav}</div>
      </div>
      {/* ========== PRODUCT ========== */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-2">
        {CardProduct}
      </div>
    </>
  );
};

type TitleProps = {
    option? : string;
}
export const Title = (props : TitleProps) => {
    const {option} = props;
    const Key = option || "Preterminate";
    const ObjHeader = GetDiccinary(Key);
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        {ObjHeader.title}
      </h2>
      <p className="text-gray-600">
        {ObjHeader.description}
      </p>
    </>
  );
};
export const Nav = () => {
  return (
    <>
      <button className="px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">
        Todos
      </button>
      <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
        Electrónica
      </button>
      <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
        Moda
      </button>
      <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
        Hogar
      </button>
      <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
        Deportes
      </button>
      <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
        Libros
      </button>
    </>
  );
};
export const CardProduct = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
          alt="Auriculares"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white px-1.5 py-0.5 text-[10px] font-bold rounded shadow-lg">
          -25%
        </span>
        <button className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full h-7 w-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
          <Heart className="h-3 w-3 text-gray-700 hover:text-red-500" />
        </button>
      </div>

      <div className="p-2.5">
        <p className="text-[9px] text-blue-600 font-semibold uppercase tracking-wider mb-1">
          Electrónica
        </p>

        <h3 className="font-bold text-xs leading-tight text-gray-900 mb-1.5 line-clamp-2 min-h-[2rem]">
          Auriculares Inalámbricos Premium Sony WH-1000XM5
        </h3>

        <div className="flex items-center gap-0.5 mb-2">
          <div className="flex gap-0.5">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          </div>
          <span className="text-[10px] text-gray-600 font-medium">(2.8k)</span>
        </div>

        <div className="flex items-baseline gap-1.5 mb-2.5">
          <span className="text-lg font-bold text-gray-900">$299</span>
          <span className="text-[10px] text-gray-400 line-through">$399</span>
        </div>

        <button className="w-full h-8 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5">
          <ShoppingCart className="h-3.5 w-3.5" />
          Agregar
        </button>
      </div>
    </div>
  );
};
export default Body;
