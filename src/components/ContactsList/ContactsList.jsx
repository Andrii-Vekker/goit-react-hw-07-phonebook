import { List, Item } from "./ContactList.styled";
import { BtnAdd } from "components/Form/Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { removeContacts } from "redux/contactsSlise";
import { fetchContacts } from "redux/ContactsOperations";
import { useEffect } from "react";


export default function ContactsList() {;
    // const filterValue = useSelector(state => state.filter.filter);
    // const storeContacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items)

    useEffect(() => {
  dispatch(fetchContacts())
    }, [dispatch])
    

//       const filteredContacts = () => {
//       const normalizedFilter = filterValue.toLowerCase();
//       return storeContacts.filter(contact => contact.name.toLowerCase()
//         .includes(normalizedFilter))
//   };

//   const visibleContacts = filteredContacts()
     
   
    return (
        <>
                <List>
                {contacts.map(({ name, phone, id }) => (
                
                    <Item key={id}>{name} : {phone}
                        <BtnAdd type="button">Delete
                        </BtnAdd>
                    </Item>
                                    
                ))}
            </List>
        </>
    );
};

{/* <BtnAdd type="button" onClick={() => dispatch(removeContacts({id}))} */}