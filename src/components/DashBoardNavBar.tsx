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
      <nav className="flex border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800 lg:h-full lg:w-16 lg:flex-col lg:justify-center lg:border-r-2">
        <div className="flex w-full justify-evenly lg:flex-col lg:align-middle">
          <button
            onClick={() => handleNavigation(0, "/")}
            className={`group grow py-4 duration-300 lg:py-10 ${
              activeIndex === 0
                ? "border-l-4 border-blue-500 bg-slate-500"
                : "hover:bg-slate-500"
            }`}
          >
            <Dumbbell className="mx-auto duration-300 group-hover:scale-[1.5]" />
          </button>

          <button
            onClick={() => handleNavigation(1, "/user")}
            className={`group grow py-4 duration-300 lg:py-10 ${
              activeIndex === 1
                ? "border-l-4 border-blue-500 bg-slate-500"
                : "hover:bg-slate-500"
            }`}
          >
            <User className="mx-auto duration-300 group-hover:scale-[1.5]" />
          </button>

          <button
            onClick={() => handleNavigation(2, "/managment")}
            className={`group grow py-4 duration-300 group-hover:scale-[1.02] lg:py-10 ${
              activeIndex === 2
                ? "border-l-4 border-blue-500 bg-slate-500"
                : "hover:bg-slate-500"
            }`}
          >
            <Globe className="mx-auto duration-300 group-hover:scale-[1.5]" />
          </button>
          <button
            onClick={() => setActiveIndex(3)}
            className={`group grow py-4 duration-300 group-hover:scale-[1.02] lg:py-10 ${
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
