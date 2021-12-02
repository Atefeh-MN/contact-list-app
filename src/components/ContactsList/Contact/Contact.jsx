import './contact.css'
import userImage from '../../../assets/Image/userImage.png';
import { Link } from 'react-router-dom';

const Contact = ({ contact, onDelete }) => {
    const { name, email, id } = contact;
    return (
        <div className='contactContainer' key={id}>
            <Link to={{ pathname: `/user/${contact.id}` , state:{ contact:contact} }} key={contact.id}>
            <div style={{display:"flex",alignItems:'center'}}>
            <img src={userImage} alt='user'  />
            <div className='user'>
                <p>Name: {name }</p>
                <p>email: {email}</p>
            </div>
            </div>
            </Link>
            <div>
            <Link to={`/edit/${id}`}>
                <button className='edit'>Edit</button>
            </Link>
                <button className='delete' onClick={() => onDelete(id)}>Delete</button>
            </div>    
        </div> );
}
 
export default Contact;