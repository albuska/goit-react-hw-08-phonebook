import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { addContactItem } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectItems } from 'redux/contacts/selectors';

const ContactForm = () => {
  const dispatch = useDispatch(); 
  const contacts = useSelector(selectItems); 
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setName('');
    setNumber('');

const includeItem = contacts.find((item => {
      return item.name.toLowerCase() === name.toLowerCase();
}))
    includeItem ? alert(`${name} is already in contacts`) : 
    dispatch(addContactItem({name, number, id: nanoid()}));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </Label>

      <Button type="submit" onSubmit={handleSubmit} disabled={!name && number}>
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;

