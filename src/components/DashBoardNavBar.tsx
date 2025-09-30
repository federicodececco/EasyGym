"use client";
import { Dumbbell, LogOut, User } from "lucide-react";
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
      <nav className="h-full w-16 flex flex-col justify-center bg-gradient-to-br from-slate-700 to-slate-800 border-slate-900 border-r-2">
        <div className="flex flex-col align-middle">
          <button
            onClick={() => handleNavigation(0, "/")}
            className={`group duration-300 py-10 ${
              activeIndex === 0
                ? "bg-slate-500 border-l-4 border-blue-500"
                : "hover:bg-slate-500"
            }`}
          >
            <Dumbbell className="group-hover:scale-[1.5] duration-300 mx-auto" />
          </button>

          <button
            onClick={() => handleNavigation(1, "/user")}
            className={`group duration-300 py-10 ${
              activeIndex === 1
                ? "bg-slate-500 border-l-4 border-blue-500"
                : "hover:bg-slate-500"
            }`}
          >
            <User className="group-hover:scale-[1.5] duration-300 mx-auto" />
          </button>

          <button
            onClick={() => setActiveIndex(2)}
            className={`group duration-300 group-hover:scale-[1.02] py-10 ${
              activeIndex === 2
                ? "bg-slate-500 border-l-4 border-blue-500"
                : "hover:bg-slate-500"
            }`}
          >
            <LogOut className="group-hover:scale-[1.5] duration-300 mx-auto" />
          </button>
        </div>
      </nav>
    </>
  );
}
