import { toast } from 'react-toastify'


export const sucess =  _ => toast.success('sucess to sing-in wait to redirect.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});



export const error =  _ => toast.error(`
    fail to authenticate user.
    Email and Passwod wrong or 
    currently unavailableservice not available at this time
`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});