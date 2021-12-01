import AddNewContact from "./components/AddContact/AddNewContact";
import ContactDetails from "./components/contactDetils/ContactDetails";
import HomePage from "./pages/HomePage";
import EditContact from './components/editContact/EditContact'



const routes = [{path:'/edit/:id',component:EditContact},{ path: '/user/:id', component: ContactDetails },{ path: '/add', component: AddNewContact }, { path: '/', component: HomePage, exact:true } ]


export default routes;