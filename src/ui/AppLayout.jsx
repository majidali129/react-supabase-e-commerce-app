import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div >
      <Header />
      <main className="flex flex-col gap-10">
        <Outlet />
      </main>

    </div>
  );
};

export default AppLayout;
