import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import List from './List';
import ListItemInfo from './ListItemInfo';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Navigate to='/users' />} />
        <Route path='/users' element={<List />} />
        <Route path='/users/:id' element={<ListItemInfo />} />
      </Routes>
    </div>
  )
}

export default AppRouter;