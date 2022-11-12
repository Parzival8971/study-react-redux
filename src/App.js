import './App.css';
import { Routes, Route } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Home from './page/Home';
import Todos from './page/Todos';
import Users from './page/Users';
import history from './history';

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
