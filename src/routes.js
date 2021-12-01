import AddNewContact from "./components/AddContact/AddNewContact";
import ContactDetails from "./components/contactDetils/ContactDetails";
import HomePage from "./pages/HomePage";



const routes = [{ path: '/user/:id', component: ContactDetails },{ path: '/add', component: AddNewContact }, { path: '/', component: HomePage, exact:true } ]


export default routes;