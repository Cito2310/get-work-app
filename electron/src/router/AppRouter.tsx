import { Route, Routes, Navigate } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/selectData' element={<h1>Select Data</h1>} />
            <Route path='/filterWorks' element={<h1>Filter works</h1>} />
            <Route path='/works' element={<h1>Works</h1>} />
            <Route path='/*' element={<Navigate to={"/works"} />} />
        </Routes>
    </>
  )
}
