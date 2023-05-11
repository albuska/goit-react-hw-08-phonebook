import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Loader } from '../Loader';
import SharedLayout from '../SharedLayout'; 
import { GlobalStyle } from 'components/GlobalStyle';
import { ContainerApp } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

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
    <ContainerApp>
<Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={ <SharedLayout/>}>
          <Route index element={<Home />} /> 
          <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<Register />}/>}/>
          <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LogIn />}/>}/>
          <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<Contacts/>}/> } />
        </Route>   
      </Routes>
      <GlobalStyle/>
      </Suspense>
    </ContainerApp>  
  );
};

export default App;
