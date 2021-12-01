
import Contact from './Contact/Contact';
import { useEffect, useState } from "react";
import { getAllContacts } from "../../services/getAllContacts";
import { deleteContact } from "../../services/deleteContact";
import { Link } from 'react-router-dom';

const ContactList = ({match}) => {
    const [contacts, setContacts] = useState([]);
    const deleteContactHandler = async (id) => {
        try {
            await deleteContact(id);
            const filteredContact = contacts.filter(c => c.id !== id);
            setContacts(filteredContact)
            
        } catch (error) {
            
        }  
    }
    useEffect(() => {
        const getContacts = async () => {
            try {
                const { data } = await getAllContacts()
                setContacts(data)
            } catch (error) { }
        };
        getContacts()
        }
    , [])
   
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts])
    return (
        <section style={{ display:'flex',flexDirection:'column',alignItems:'center'}}>
            {contacts.map((contact) => {
               
                return (
                    <Link to={{ pathname: `/user/${contact.id}` , state:{ contact:contact} }} key={contact.id}>
                        <Contact contact={contact} onDelete={deleteContactHandler} />
                        </Link>
            ) })}
     </section>       
    );
}
 
export default ContactList;