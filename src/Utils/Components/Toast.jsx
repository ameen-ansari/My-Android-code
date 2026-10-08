import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
};

export const showToast = {
  success: (msg) => toast.success(msg, toastConfig),
  error: (msg) => toast.error(msg, toastConfig),
  info: (msg) => toast.info(msg, toastConfig),
  warning: (msg) => toast.warn(msg, toastConfig),
};

export default function Toast() {
  return <ToastContainer {...toastConfig} />;
}