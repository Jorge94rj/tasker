import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { onAuthChange } from './firebase/auth';
import { setCredentials } from './redux/store/auth-slice';
import Board from './pages/board';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  const dispatch = useDispatch()

  const { auth: { token } } = useSelector(store => store)

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={token ? <Board /> : <Login/>} />
        <Route path='*' element={token ? <Board /> : <Login/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {
          token &&          
          <Route path='/board' element={<Board />} />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
