import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home.page';

const Navigation = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Navigation;
