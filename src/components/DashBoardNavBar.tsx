import { Dumbbell, LogOut, User } from "lucide-react";

export default function DashBoardNavBar() {
  return (
    <>
      <nav className=" h-full w-16 flex flex-col justify-center bg-gradient-to-br from-slate-700 to-slate-800 border-slate-900 border-r-2 ">
        <div className=" flex flex-col align-middle ">
          <button className=" group  group-hover:opacity-100 duration-300 group-hover:scale-[1.02] hover:bg-slate-500 py-10">
            <Dumbbell className="group-hover:scale-[1.5] duration-300 mx-auto " />
          </button>
          <button className=" group  group-hover:opacity-100 duration-300 group-hover:scale-[1.02] hover:bg-slate-500 py-10">
            <User className="group-hover:scale-[1.5] duration-300 mx-auto " />
          </button>
          <button className=" group  group-hover:opacity-100 duration-300 group-hover:scale-[1.02] hover:bg-slate-500 py-10">
            <LogOut className="group-hover:scale-[1.5] duration-300 mx-auto " />
          </button>
        </div>
      </nav>
    </>
  );
}
