import { toast } from 'react-toastify'


export const sucess = (msg, time) => toast.success(msg, {
    position: "top-right",
    autoClose: time || 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});



export const error = (msg, time) => toast.error(msg, {
    position: "top-right",
    autoClose: time || 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});

export const warn = (msg, time) => toast.warn(msg, {
    position: "top-right",
    autoClose: time || 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});


export const info = (msg, time) => toast.info(msg, {
    position: "top-right",
    autoClose: time || 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});