import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} /> //Here we are rendering specific components based on the URL.
    </Routes>
  );
};

export default App;
