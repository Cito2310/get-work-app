import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { startGetWorks } from '../store/work/thunks';

export const SelectDataPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSelectData = async() => {
        await dispatch( startGetWorks() );
        navigate("/filterWorks")
    }

  return (
    <section>
        <button onClick={ onSelectData } >Select Data</button>
    </section>
  )
}
