import { FatMass, LeanMass } from "@/util/Classes";

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
  new LeanMass("1", "lm1", "2025-01-15", 75.5, 60.4),
  new LeanMass("1", "lm2", "2025-02-15", 76.2, 61.0),
  new LeanMass("1", "lm3", "2025-03-15", 77.0, 61.6),
  new LeanMass("1", "lm4", "2025-04-15", 77.8, 62.2),
  new LeanMass("1", "lm5", "2025-05-15", 78.5, 62.8),
];

const fatMassArray = [
  new FatMass("1", "fm1", "2025-01-15", 24.5, 19.6),
  new FatMass("1", "fm2", "2025-02-15", 23.8, 19.0),
  new FatMass("1", "fm3", "2025-03-15", 23.0, 18.4),
  new FatMass("1", "fm4", "2025-04-15", 22.2, 17.8),
  new FatMass("1", "fm5", "2025-05-15", 21.5, 17.2),
];

export default function UserDashboard() {
  return (
    <>
      <section className="h-screen bg-green-900 pl-40 pt-4">
        <div>
          {/* infos */}
          <div className="flex justify-evenly">
            <div>
              <img src="./placeholder.jpg" className="w-80" alt="" />
            </div>
            <div className="">
              <div>{`${fakeUser.name} ${fakeUser.surname}`}</div>
              <div>{`${fakeUser.email}`}</div>
              <div>{`altezza: ${fakeUser.height} peso: ${fakeUser.weight}`}</div>
            </div>
          </div>
          {/* graphs */}
          <div></div>
        </div>
      </section>
    </>
  );
}
