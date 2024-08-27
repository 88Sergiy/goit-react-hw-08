import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactPage.module.css";
import { useDispatch } from "react-redux";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.div}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;