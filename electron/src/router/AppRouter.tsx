import { Route, Routes, Navigate } from 'react-router-dom';
import { FilterWorksPage, WorksPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/filterWorks' element={ <FilterWorksPage /> } />
        <Route path='/works' element={ <WorksPage /> } />
        <Route path='/*' element={<Navigate to={"/filterWorks"} />} />
    </Routes>
  )
}
