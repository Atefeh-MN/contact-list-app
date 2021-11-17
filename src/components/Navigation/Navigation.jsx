import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    const items=[{to:'/',name:'ContactManager',exact:true}]
    return (
        <nav>
            <ul>
                {items.map(item => (<li key={item.to}>
                    <NavLink to={item.to} className="activelink">{item.name}</NavLink>
                </li>))}
                
            </ul>
        </nav>
       );
}
 
export default Navigation;