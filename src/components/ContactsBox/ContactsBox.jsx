import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContacts,
  filterContacts,
} from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import {
  ContactList,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsBox.styled';

export const ContactsBox = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (filter === '') {
      dispatch(fetchContacts());
    } else {
      dispatch(filterContacts(filter.toLowerCase()));
    }
  }, [dispatch, filter]);
  
  const handleOnClick = evt => {
    dispatch(deleteContacts(evt.currentTarget.id));
  };

  return (
    <ContactList>
      {isLoading && <Loader/>}
      {error && <b>{error}</b>}
      {items.map(el => {
        const { name, number, id } = el;
        return (
          <ContactListItem key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <DeleteButton id={id} type="button" onClick={handleOnClick}>
              Delete
            </DeleteButton>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

