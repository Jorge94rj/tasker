import { toast } from "react-toastify";

const openToast = (title, type = 'default') => {
    toast(title, {
        position: "top-right",
        type,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export default openToast