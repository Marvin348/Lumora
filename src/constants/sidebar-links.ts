import {
  LayoutDashboard,
  PenTool,
  Vote,
  Bookmark,
  BadgeCheck,
} from "lucide-react";

export const SIDEBAR_LINKS = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/polls/create", label: "Umfrage erstellen", icon: PenTool },
  { to: "/polls/mine", label: "Meine Umfragen", icon: Vote },
  { to: "/polls/voted", label: "Abgestimmt", icon: BadgeCheck },
  { to: "/polls/bookmarks", label: "Gespeichert", icon: Bookmark },
];
