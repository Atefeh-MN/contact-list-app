import { useState } from 'react';
import './addnewcontact.css'

const AddNewContact = () => {
    const [contact, setContact] = useState({ name: '', email: '' });
    const ChangeHandler = (e) => {
        console.log(e.target.value)
             setContact({ ...contact, [e.target.name]: e.target.value })
    }
    return (
        <div className='formcontrol'>
        <div className='form'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' onChange={ChangeHandler} />
        </div>
         <div className='form'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' onChange={ChangeHandler} />
        </div>
            <button >Add New Contact</button>

        </div>
    );
}
 
export default AddNewContact;