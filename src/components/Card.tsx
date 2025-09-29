interface CardInterface {
  name: string;
  series: number;
  repetitions: number;
  restPeriod: number;
  typeOfWeight: string;
  weight: number;
}

export default function Card({
  name,
  series,
  repetitions,
  restPeriod,
  typeOfWeight,
  weight,
}: CardInterface) {
  return (
    <div className=" mt-6 md:mt-0 group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-4 md:flex-row">
        <div className="relative overflow-hidden rounded-lg md:w-30 md:flex-shrink-0">
          <img
            className="h-30 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src="./bench-press.jpg"
            alt={name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-3">
          <h3 className="text-xl font-bold tracking-wide text-white">
            {name.toUpperCase()}
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 rounded-md bg-slate-600/50 px-3 py-2 backdrop-blur-sm">
              <div>
                <div className="text-xs text-slate-400">Serie</div>
                <div className="font-semibold text-white">{series}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-md bg-slate-600/50 px-3 py-2 backdrop-blur-sm">
              <div>
                <div className="text-xs text-slate-400">Ripetizioni</div>
                <div className="font-semibold text-white">{repetitions}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-md bg-slate-600/50 px-3 py-2 backdrop-blur-sm">
              <div>
                <div className="text-xs text-slate-400">Riposo</div>
                <div className="font-semibold text-white">{restPeriod}s</div>
              </div>
            </div>

            {typeOfWeight !== "free body" && (
              <div className="flex items-center gap-2 rounded-md bg-slate-600/50 px-3 py-2 backdrop-blur-sm">
                <div>
                  <div className="text-xs text-slate-400">Peso</div>
                  <div className="font-semibold text-white">
                    {weight} {typeOfWeight}
                  </div>
                </div>
              </div>
            )}

            {typeOfWeight === "free body" && (
              <div className="flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500/20 to-red-500/20 px-3 py-2 backdrop-blur-sm">
                <div>
                  <div className="text-xs text-orange-300">Tipo</div>
                  <div className="font-semibold text-white">Corpo Libero</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
