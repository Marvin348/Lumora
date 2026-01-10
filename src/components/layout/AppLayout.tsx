import { Outlet } from "react-router";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useState } from "react";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <header className="px-6 py-2 border-b">
        <Header onOpen={() => setIsSidebarOpen(true)} />
      </header>

      <div className="flex">
        <Sidebar
          onClose={() => setIsSidebarOpen(false)}
          onOpen={isSidebarOpen}
        />

        <main className="flex-1 p-6">
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
export default AppLayout;
