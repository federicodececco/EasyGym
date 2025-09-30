import DashBoardNavBar from "@/components/DashBoardNavBar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex">
      <div>
        <DashBoardNavBar></DashBoardNavBar>
      </div>

      <div className="flex-grow">
        <main>{children}</main>
      </div>
    </div>
  );
}
