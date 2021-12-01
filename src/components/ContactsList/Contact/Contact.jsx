import './contact.css'
import  userImage from '../../../assets/Image/userImage.png'

const Contact = ({ contact, onDelete }) => {
    const { name, email, id } = contact;
    return (
        <div className='contactContainer' key={id}>
            <div style={{display:"flex",alignItems:'center'}}>
            <img src={userImage} alt='user'  />
            <div className='user'>
                <p>{name }</p>
                <p> {email}</p>
            </div>
            </div>
             <button className='delete' onClick={()=>onDelete(id)}>Delete</button>
        </div> );
}
 
export default Contact;