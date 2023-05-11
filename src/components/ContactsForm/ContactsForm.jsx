import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { Container, Title } from './ContactsForm.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader';

export const ContactsForm = () => {
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
    )
}