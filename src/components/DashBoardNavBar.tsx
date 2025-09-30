"use client";
import { Dumbbell, LogOut, User } from "lucide-react";
import { useState } from "react";

export default function DashBoardNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <nav className="h-full w-16 flex flex-col justify-center bg-gradient-to-br from-slate-700 to-slate-800 border-slate-900 border-r-2">
        <div className="flex flex-col align-middle">
          <button
            onClick={() => setActiveIndex(0)}
            className={`group duration-300 group-hover:scale-[1.02] py-10 ${
              activeIndex === 0
                ? "bg-slate-500 border-l-4 border-blue-500"
                : "hover:bg-slate-500"
            }`}
          >
            <Dumbbell className="group-hover:scale-[1.5] duration-300 mx-auto" />
          </button>

          <button
            onClick={() => setActiveIndex(1)}
            className={`group duration-300 group-hover:scale-[1.02] py-10 ${
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
