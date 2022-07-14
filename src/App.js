import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { onAuthChange } from './firebase/auth';
import { setCredentials } from './redux/store/auth-slice';
import Board from './pages/board';
import Login from './pages/login';
import Register from './pages/register';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

function App() {
  const dispatch = useDispatch()

  const { auth: { token }, ui: { loading } } = useSelector(store => store)

  useEffect(() => {
    onAuthChange((currentUser) => {
      const { accessToken, uid } = currentUser || ''

      dispatch(setCredentials({
        token: accessToken,
        uid
      }))
    })
  }, [dispatch])

  return (
    <BlockUi tag="div" blocking={loading}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={token ? <Board /> : <Login />} />
          <Route path='*' element={token ? <Board /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {
            token &&
            <Route path='/board' element={<Board />} />
          }
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </BlockUi>
  );
}

export default App;
