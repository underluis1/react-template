import { Toaster, toast } from 'react-hot-toast';

export interface ToastProps {
    message?: string;
    color?: string;
}

// Funzione helper per mostrare il toast
export function showToast({ message = 'Default toast message', color = 'bg-red-700' }: ToastProps) {
    toast(message, {
        duration: 4000,
        style: {
            background: color,
            color: '#fff',
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