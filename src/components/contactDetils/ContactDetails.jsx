
const ContactDetails = ({location}) => {
    const { contact } = location.state;
    return (
    <div>
        <p>user Name is :{contact.name}</p>
        <p>user email is: {contact.email}</p>
    </div> );
}
 
export default ContactDetails;