import { Container, Title } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        {loading && !error && <Loader/>}
          <ContactList/>
      </div>
    </Container>
  );
};

export default App;
