import { List, Item } from "./ContactList.styled";
import { BtnAdd } from "components/Form/Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { removeContacts } from "redux/contactsSlise";


export default function ContactsList() {;
    const filterValue = useSelector(state => state.filter.filter);
    const storeContacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch()

      const filteredContacts = () => {
      const normalizedFilter = filterValue.toLowerCase();
      return storeContacts.filter(contact => contact.name.toLowerCase()
        .includes(normalizedFilter))
  };

  const visibleContacts = filteredContacts()
     
   
    return (
        <>
                <List>
                {visibleContacts.map(({ name, number, id }) => (
                
                    <Item key={id}>{name} : {number}
                        <BtnAdd type="button" onClick={() => dispatch(removeContacts({id}))}>Delete
                        </BtnAdd>
                    </Item>
                                    
                ))}
            </List>
        </>
    );
};

