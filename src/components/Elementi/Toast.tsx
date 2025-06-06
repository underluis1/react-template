import { Toaster, toast } from 'react-hot-toast';

export interface ToastProps {
    message?: string;
    color?: string;
    colorText?: string;
}

// Funzione helper per mostrare il toast
export function showToast({ message = 'Default toast message', color = 'bg-red-700', colorText = '#000000' }: ToastProps) {
    toast(message, {
        duration: 4000,
        style: {
            background: color,
            color: colorText,
        },
    });
}

// Solo il Toaster va nel componente React
function Toast() {
    return (
        <Toaster position="top-right" />
    );
}

export default Toast;