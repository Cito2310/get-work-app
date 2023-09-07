import { useNavigate } from 'react-router-dom';
import { useAppDispatch, startAddWorks } from '../store';
import { CardEmpty, ModalSelectData } from '../components';
import { useDeleteOverflow } from '../hooks';

export const SelectDataPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSelectData = async() => {
        await dispatch( startAddWorks() );
        navigate("/filterWorks")
    }

    useDeleteOverflow();
    

  return (
    <section>
        <div className='absolute w-screen h-screen bg-[#00000020]'></div>
        
        <ul className='flex flex-col gap-3 px-16 py-3'>
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
            <CardEmpty />
        </ul>

        <ModalSelectData onSelectData={ onSelectData } />
    </section>
  )
}
