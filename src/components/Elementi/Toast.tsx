import {Toaster, toast} from 'react-hot-toast';
import { Button } from '../ui/button';

interface ToastProps {
    message?: string;
    color?: string;
}

function Toast(toastProps: ToastProps) {
    const { message } = toastProps || 'Default toast message';
    const color = toastProps.color || 'bg-red-700';
    
    return (
        <>
        
        <Button className='bg-red-700' onClick={()=> toast(message!)}> Toast </Button>
        <Toaster 
        position='top-right' 
        toastOptions={{
        duration: 4000,
        style: {
            background: color,
            color: '#fff',
        },
        }}
        />
        
        
        </>
    )
}
    export default Toast;