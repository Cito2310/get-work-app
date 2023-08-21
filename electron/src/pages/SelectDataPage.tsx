import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { startGetWorks } from '../store/work/thunks';
import { ItemEmpty } from '../components/ItemEmpty';
import { ContainerSelectData } from '../components/ContainerSelectData';
import { useDeleteOverflow } from '../hooks/useDeleteOverflow';

export const SelectDataPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSelectData = async() => {
        await dispatch( startGetWorks() );
        navigate("/filterWorks")
    }

    useDeleteOverflow();
    

  return (
    <section>
      <div className='absolute w-screen h-screen bg-[#00000020]'></div>
      
      <ul className='flex flex-col gap-3 px-16 py-3'>
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
        <ItemEmpty />
      </ul>

      <ContainerSelectData onSelectData={ onSelectData } />
    </section>
  )
}
