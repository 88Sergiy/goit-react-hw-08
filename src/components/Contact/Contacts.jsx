import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const name = contact.name;
  const number = contact.number;
  const id = contact.id;
  const dispatch = useDispatch();
  return (
    <li className={css.li}>
      <p className="title">{name}</p>
      <p className="telefon">{number}</p>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;