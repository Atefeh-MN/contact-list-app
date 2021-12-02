
import Contact from './Contact/Contact';
import { useEffect, useState } from "react";
import { getAllContacts } from "../../services/getAllContacts";
import { deleteContact } from "../../services/deleteContact";
import { Link } from 'react-router-dom';
import './contactlist.css'
import add from '../../assets/Image/add.png'

const ContactList = ({match}) => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [allContact,setAllContact]=useState([])
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
                setContacts(data);
                setAllContact(data)
            } catch (error) { }
        };
        getContacts()
        }
        , [])
    
    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
        const search = e.target.value;
        if (search !== '') {
            const filtered = allContact.filter(c => {
                return Object.values(c).join('').toLowerCase().includes(search.toLowerCase())
            })
            setContacts(filtered)
        } else {
            setContacts(allContact)
        }
    }
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts])
    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           
            <Link to={'/add'} className='addcontact'>
                    <img src={add} alt="adduser" />
                    <h1>Create Contact</h1>
            </Link>
             <div className='search'>
            <input  type="text" value={searchTerm} placeholder='Search'onChange={searchHandler} />
            </div>
            
            {contacts.map((contact) => {
                return (
                  
                        <Contact contact={contact} onDelete={deleteContactHandler} />
                        
            ) })}
     </section>       
    );
}
 
export default ContactList;