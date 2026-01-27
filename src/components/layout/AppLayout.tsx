import { Outlet } from "react-router";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useEffect, useState } from "react";
import { useActiveUserStore } from "@/store/activeUser/useActiveUserStore";
import { useUsers } from "@/hooks/useUsers";
import { Spinner } from "@/components/ui/spinner";
import { UserContext } from "@/context/useUserContext";
import UserStats from "@/components/user/UserStats";

const AppLayout = () => {
  const { data: users, isLoading, error } = useUsers();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const setActiveUserId = useActiveUserStore((state) => state.setActiveUserId);

  useEffect(() => {
    setActiveUserId("u15");
  }, [setActiveUserId]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  if (error) return <div>Error</div>;
  if (!users) return null;

  return (
    <UserContext.Provider value={users}>
      <div>
        <header className="px-6 py-2 border-b">
          <Header onOpen={() => setIsSidebarOpen(true)} />
        </header>

        <div className="flex">
          <Sidebar
            onClose={() => setIsSidebarOpen(false)}
            onOpen={isSidebarOpen}
          />

          <main className="flex-1 p-6 xl:flex gap-6">
            <div className="flex-1">
              <Outlet />
            </div>
            <aside className="hidden xl:inline-block">
              <div className="xl:sticky top-5 right-0">
                <UserStats />
              </div>
            </aside>
          </main>
        </div>
      </div>
    </UserContext.Provider>
  );
};
export default AppLayout;
