import { useState } from 'react';
import './addnewcontact.css'
import { addContact } from '../../services/addContact';

const AddNewContact = ({history}) => {
    const [contact, setContact] = useState({ name: '', email: '' });
   
    const ChangeHandler = (e) => {

         setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const postContactHandler = async () => {
        try {
            await addContact({ ...contact })
            setContact({ name: '', email: '' })
            history.push('/');
        } catch (error) {
        }
   
    }
    const submitForm = (e) => {
        if (!contact.name || !contact.email) {
            alert('all filleds are mandatory')
            return;
        }
        e.preventDefault();
    }
    return (
        <form onSubmit={submitForm} className='formcontrol'>
        <div className='form'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' value={contact.name} onChange={ChangeHandler} />
        </div>
         <div className='form'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'value={contact.email} onChange={ChangeHandler} />
            </div>
            
         <button className='button' type='submit'onClick={postContactHandler} >Add New Contact</button>
        
         </form>
    );
}
 
export default AddNewContact;