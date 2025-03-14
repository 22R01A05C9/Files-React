import { toast } from "react-toastify";

const options = {
    closeOnClick:true,
    autoClose:3000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: true
}

const Toast = (message,mode) => {
    toast[mode](message,options)
}

export default Toast