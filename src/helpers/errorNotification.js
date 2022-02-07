import { toast } from 'react-toastify';

const errorNotification = (message) => {
    return toast.error(message, {
        autoClose: 2500,
        draggable: true,
        closeButton: false,
        closeOnClick: true,
        hideProgressBar: true,
        pauseOnHover: true,
        position: 'top-right',
        progress: undefined,
        style: { textAlign: 'center' }
    });
};

export default errorNotification;
