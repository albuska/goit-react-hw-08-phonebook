import { ContactItem } from '../ContactItem/ContactItem';
import { List, Button, Item } from './ContactList.styled';
import { deleteContactItem } from '../../redux/contacts/operations'; 
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, selectItems } from '../../redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch(); 
  const filter = useSelector(selectFilters);
  const contacts = useSelector(selectItems);

  const normalizedFilter = filter.toLowerCase(); 

  const filterContacts = contacts.filter(contact =>
 contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <List>
        {filterContacts && filterContacts.map(contact => (
          <Item key={contact.id}>
            <ContactItem contact={contact} />
            <Button onClick={() => dispatch(deleteContactItem(contact.id))}>Delete</Button>
          </Item>
        ))}
      </List>
    </>
  )
};

export default ContactList;

