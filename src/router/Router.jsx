import { Route, Routes } from 'react-router-dom';
import { Top } from '../pages/Top';
import { TaskApp } from '../pages/TaskApp';
import { Page404 } from '../pages/Page404';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Top />} />
      <Route path='/task' element={<TaskApp />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};
