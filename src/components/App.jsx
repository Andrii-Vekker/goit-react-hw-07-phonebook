import ContactForm from "./Form/ContactForm";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";

export default function App() {

  return (
    <div
      style={{
        padding: "32px",
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'start',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      <h2 style={{ fontSize: "25px" }}>Phonebook</h2>
      <ContactForm />
      <h2 style={{ fontSize: "25px" }}>Contacts</h2>
      {/* <Filter /> */}
      <ContactsList />
           
    </div>
  );
};


