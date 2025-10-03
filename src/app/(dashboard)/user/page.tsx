"use client";

import WeightLineChart from "@/components/WeightLineChart";
import { Mass } from "@/util/Classes";
import { Activity, TrendingUp, User } from "lucide-react";

const fakeUser = {
  id: 1,
  name: "Gigio",
  surname: "Bagigio",
  email: "gigio.bagigio@email.com",
  height: 176,
  weight: 81,
  imageUrl: "",
};
const leanMassArray = [
  new Mass("1", "lm1", "2025-01-15", 75.5, 60.4, true),
  new Mass("1", "lm2", "2025-02-15", 76.2, 61.0, true),
  new Mass("1", "lm3", "2025-03-15", 77.0, 61.6, true),
  new Mass("1", "lm4", "2025-04-15", 77.8, 62.2, true),
  new Mass("1", "lm5", "2025-05-15", 78.5, 62.8, true),
];

const fatMassArray = [
  new Mass("1", "fm1", "2025-01-15", 24.5, 19.6, false),
  new Mass("1", "fm2", "2025-02-15", 23.8, 19.0, false),
  new Mass("1", "fm3", "2025-03-15", 23.0, 18.4, false),
  new Mass("1", "fm4", "2025-04-15", 22.2, 17.8, false),
  new Mass("1", "fm5", "2025-05-15", 21.5, 17.2, false),
];

export default function UserDashboard() {
  const latestLeanMass = leanMassArray[leanMassArray.length - 1];
  const latestFatMass = fatMassArray[fatMassArray.length - 1];

  return (
    <section className="hide-scrollbar h-screen overflow-y-scroll px-8 py-8">
      <div className="absolute inset-0 -z-10 bg-[url('/bg-gym.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 rounded-lg bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-2">
          <h1 className="mb-2 text-4xl font-bold text-white">Profilo Utente</h1>
          <p className="text-slate-400">
            Visualizza e monitora i tuoi progressi
          </p>
        </div>

        {/* User Info */}
        <div className="group relative mb-8 overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-8 shadow-2xl transition-all duration-300 hover:shadow-blue-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Profile Image */}
            <div className="relative flex-shrink-0 overflow-hidden rounded-2xl">
              <img
                src="./placeholder.jpg"
                className="h-48 w-48 object-cover transition-transform duration-300 group-hover:scale-105"
                alt="Profile"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* User Details */}
            <div className="w-full flex-1">
              <div className="mb-4 flex items-center gap-3">
                <User className="text-blue-400" size={28} />
                <h2 className="text-3xl font-bold text-white">
                  {`${fakeUser.name} ${fakeUser.surname}`}
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <span className="text-lg">{fakeUser.email}</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-slate-600/50 px-4 py-3 backdrop-blur-sm">
                    <div className="mb-1 text-xs text-slate-400">Altezza</div>
                    <div className="text-2xl font-semibold text-white">
                      {fakeUser.height}{" "}
                      <span className="text-sm text-slate-400">cm</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-600/50 px-4 py-3 backdrop-blur-sm">
                    <div className="mb-1 text-xs text-slate-400">Peso</div>
                    <div className="text-2xl font-semibold text-white">
                      {fakeUser.weight}{" "}
                      <span className="text-sm text-slate-400">kg</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-3 backdrop-blur-sm">
                    <div className="mb-1 text-xs text-blue-300">IMC</div>
                    <div className="text-2xl font-semibold text-white">
                      {(fakeUser.weight / (fakeUser.height / 100) ** 2).toFixed(
                        1,
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {/* Lean Mass Card */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="text-green-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Massa Magra</h3>
                </div>
                <TrendingUp className="text-green-400" size={20} />
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    {latestLeanMass.percent.toFixed(1)}
                  </span>
                  <span className="text-xl text-slate-400">%</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-green-400">
                    {latestLeanMass.weight.toFixed(1)}
                  </span>
                  <span className="text-sm text-slate-400">kg</span>
                </div>

                <div className="text-sm text-slate-400">
                  Ultimo aggiornamento:{" "}
                  {new Date(latestLeanMass.date).toLocaleDateString("it-IT")}
                </div>
              </div>
            </div>
          </div>

          {/* Fat Mass Card */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="text-orange-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Massa Grassa</h3>
                </div>
                <TrendingUp className="rotate-180 text-orange-400" size={20} />
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    {latestFatMass.percent.toFixed(1)}
                  </span>
                  <span className="text-xl text-slate-400">%</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-orange-400">
                    {latestFatMass.weight.toFixed(1)}
                  </span>
                  <span className="text-sm text-slate-400">kg</span>
                </div>

                <div className="text-sm text-slate-400">
                  Ultimo aggiornamento:{" "}
                  {new Date(latestFatMass.date).toLocaleDateString("it-IT")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Lean Mass Chart Placeholder */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />

            <div className="relative">
              <h3 className="mb-4 text-lg font-bold text-white">
                Andamento Massa Magra
              </h3>
              <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-slate-600 pr-5">
                <WeightLineChart leanMass={leanMassArray}></WeightLineChart>
              </div>
            </div>
          </div>

          {/* Fat Mass Chart Placeholder */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5" />

            <div className="relative">
              <h3 className="mb-4 text-lg font-bold text-white">
                Andamento Massa Grassa
              </h3>
              <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-slate-600">
                <WeightLineChart fatMass={fatMassArray}></WeightLineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
