import toast from "react-hot-toast";

const style = {
  style: {
    border: "1px solid #5e1b89",
    padding: "16px 24px",
    color: "#5e1b89",
    fontWeight: "bold",
    maxWidth: "600px",
    borderRadius: "3px"
  },
  iconTheme: {
    primary: "#5e1b89",
    secondary: "white"
  }
};

export function showSuccessToast(text) {
  toast.success(text, style);
}

export function showErrorToast(text) {
  toast.error(text, style);
}
