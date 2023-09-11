import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.block}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.text}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
