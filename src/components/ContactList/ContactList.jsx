import { useSelector } from "react-redux";
import Contact from "../Contact/Contacts";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {contacts.map((contact, index) => {
          return <Contact key={index} contact={contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;