import { toast } from "react-toastify";

const options = {
    closeOnClick:true,
    autoClose:3000,
    pauseOnFocusLoss: false,
}

const Toast = (message,mode) => {
    toast[mode](message,options)
}

export default Toast