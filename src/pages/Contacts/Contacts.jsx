import {Filter} from 'components/Filter/Filter';
import {Form} from 'components/Form/Form';
import {ContactsBox} from 'components/ContactsBox/ContactsBox';
import {
    ContactsPage,
    PhoneBookTitle,
    ContactsTitle,
    ContactsWrap,
  } from './Contacts.styled';


export default function Contacts() {
  console.log('ContactsPage');
  return (
    <ContactsWrap>
      <ContactsPage>
        <PhoneBookTitle>
          Phonebook
        </PhoneBookTitle>
        <Form />

        <ContactsTitle>
          Contacts
        </ContactsTitle>
        <Filter />
        <ContactsBox />
      </ContactsPage>
    </ContactsWrap>
  );
}