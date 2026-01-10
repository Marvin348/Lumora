import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "@/components/layout/AppLayout.tsx";
import DashboardPage from "@/pages/DashboardPage.tsx";
import CreatePollPage from "./pages/polls/CreatePollPage";
import MyPollsPage from "@/pages/polls/MyPollsPage.tsx";
import VotedPolls from "@/pages/polls/VotedPolls.tsx";
import BookmarksPage from "@/pages/polls/BookmarksPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/polls/create",
        element: <CreatePollPage />,
      },
      {
        path: "/polls/mine",
        element: <MyPollsPage />,
      },
      {
        path: "/polls/voted",
        element: <VotedPolls />,
      },
      {
        path: "/polls/bookmarks",
        element: <BookmarksPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
