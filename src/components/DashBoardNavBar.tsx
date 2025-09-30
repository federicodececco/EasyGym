"use client";
import { Dumbbell, Globe, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashBoardNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const handleNavigation = (index: number, path: string) => {
    setActiveIndex(index);
    router.replace(path);
  };

  return (
    <>
      <nav className="flex h-full w-16 flex-col justify-center border-r-2 border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800">
        <div className="flex flex-col align-middle">
          <button
            onClick={() => handleNavigation(0, "/")}
            className={`group py-10 duration-300 ${
              activeIndex === 0
                ? "border-l-4 border-blue-500 bg-slate-500"
                : "hover:bg-slate-500"
            }`}
          >
            <Dumbbell className="mx-auto duration-300 group-hover:scale-[1.5]" />
          </button>

          <button
            onClick={() => handleNavigation(1, "/user")}
            className={`group py-10 duration-300 ${
              activeIndex === 1
                ? "border-l-4 border-blue-500 bg-slate-500"
                : "hover:bg-slate-500"
            }`}
          >
            <User className="mx-auto duration-300 group-hover:scale-[1.5]" />
          </button>

          <button
            onClick={() => handleNavigation(2, "/managment")}
            className={`group py-10 duration-300 group-hover:scale-[1.02] ${
              activeIndex === 2
                ? "border-l-4 border-blue-500 bg-slate-500"
                : "hover:bg-slate-500"
            }`}
          >
            <Globe className="mx-auto duration-300 group-hover:scale-[1.5]" />
          </button>
          <button
            onClick={() => setActiveIndex(3)}
            className={`group py-10 duration-300 group-hover:scale-[1.02] ${
              activeIndex === 3
                ? "border-l-4 border-blue-500 bg-slate-500"
                : "hover:bg-slate-500"
            }`}
          >
            <LogOut className="mx-auto duration-300 group-hover:scale-[1.5]" />
          </button>
        </div>
      </nav>
    </>
  );
}
