
import { useEffect, useState } from 'react';
import '../AddContact/addnewcontact.css'
import  updateContact  from '../../services/updateContact'
import getOneContact from '../../services/getOneContact';


const EditContact = ({history,match}) => {
    const [contact, setContact] = useState({ name: '', email: '' });
    const id = match.params.id;
   
    const ChangeHandler = (e) => {

         setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const editContactHandler = async () => {
        try {
             await updateContact(id, { ...contact });
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
    useEffect(() => {
        const localFetch = async () => {
            try {
                const { data } = await getOneContact(id);
                setContact({ name: data.name, email:data.email})
            } catch (error) {    
            }
        }
        localFetch();
    },[id])

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
            
         <button className='button' type='submit'onClick={editContactHandler} >Edit Contact</button>
        
         </form>
    );
}
export default EditContact;