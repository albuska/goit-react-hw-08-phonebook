import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import SharedLayout from '../SharedLayout'; 
import { GlobalStyle } from 'components/GlobalStyle';
import { ContainerApp } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { ToastContainer} from 'react-toastify';
import { VideoBg } from 'components/AudioBg/AudioBg';

const Home = lazy(() => import('../../pages/Home')); 
const Register = lazy(() => import('../../pages/Register'));
const LogIn = lazy(() => import('../../pages/LogIn'));
const Contacts = lazy(() => import('../../pages/Contacts'))

const App = () => {
  const dispatch = useDispatch(); 
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (<b>Refreshing user...</b>) : (
    <>
      <VideoBg/>
        <ContainerApp>
          <Routes>
            <Route path='/' element={ <SharedLayout/>}>
              <Route index element={<Home />} /> 
              <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<Register />}/>}/>
              <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LogIn />}/>}/>
              <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<Contacts/>}/> } />
            </Route>   
          </Routes>
          <GlobalStyle/>
          <ToastContainer autoClose={3000} theme="colored"/>
        </ContainerApp>  
        </>
    
  );
};

export default App;
