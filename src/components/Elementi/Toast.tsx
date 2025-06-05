import {Toaster, toast} from 'react-hot-toast';
import { Button } from '../ui/button';

function Toast() {
    return (
        <>
        <Button className='bg-red-700' onClick={()=> toast("Exemple")}> Toast </Button>
        <Toaster 
        position='top-right' 
        toastOptions={{
        duration: 4000,
        style: {
            background: '#333',
            color: '#fff',
        },
        }}
        />

        </>
    )
}
    export default Toast;