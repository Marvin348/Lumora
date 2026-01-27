import toast from "react-hot-toast";

const baseStyle = {
  borderRadius: "10px",
  background: "#ffffff",
  color: "#1f2937",
  border: "1px solid #e5e7eb",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  padding: "12px 16px",
  fontSize: "14px",
};
const successIcon = {
  primary: "#06402b",
  secondary: "#fff",
};

export const showPollCreated = () =>
  toast.success("Umfrage erstellt", {
    style: baseStyle,
    iconTheme: successIcon,
  });

export const showPollDeleted = () =>
  toast.success("Umfrage gelöscht", {
    style: baseStyle,
    iconTheme: successIcon,
  });

export const showVoted = () =>
  toast.success("Abgestimmt", {
    style: baseStyle,
    iconTheme: successIcon,
  });
