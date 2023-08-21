import { useNavigate } from 'react-router-dom';
import { useAppDispatch, startGetWorks } from '../store';
import { ItemEmpty, ContainerSelectData } from '../components';
import { useDeleteOverflow } from '../hooks';

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
