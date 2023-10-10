import Card from "./Card";
import List from "./List";

export default function Skill({title}) {
  return (
    <Card className="p-0 !md:p-2 cursor-pointer hover:shadow-slate-600 hover:shadow-lg transition-all">
      <div className="flex justify-center border-b border-b-gray-500 pb-2 mb-2">
        <img
          className="w-2/5"
          src="./src/assets/laravel.png"
          alt=""
          srcSet=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="mb-2 text-lg font-bold tracking-tight leading-none text-gray-500 md:text-xl lg:text-2xl">
          {title}
        </h3>
        <List />
      </div>
    </Card>
  );
}
