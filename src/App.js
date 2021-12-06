import './App.css';
import { Routes, Route} from "react-router-dom";
import NewCustomerPage from './Views/NewCustomerPage';
import Customers from './Views/Customers';
import CustomerPage from './Views/CustomerPage';
import Header from './Models/UIWrappers/Header';
import PropositionPage from './Views/PropositionPage';
import CreatePropositionPage from './Views/CreatePropositionPage';
import LoginPage from './Views/LoginPage';
import CreateMeeting from './Views/CreateMeeting';
import CreateUser from './Views/CreateUser';
import Axios from 'axios';
import { useCustomer } from "./Controllers/StoreSession";
import HomePage from './Views/HomePage';


Axios.defaults.withCredentials = true;




function App() {


const { customer, setCustomer } = useCustomer();
  if(customer) {
    return (
    <div>
      <Header/>
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route path="login" element={<LoginPage />}/>
      <Route path="register" element={<CreateUser />}/>
      <Route path="musteriler" element={<Customers />}/>
      <Route path="musteriler/yeni-teklif/:temsilciID/:musteriID" element={<CreatePropositionPage />}/>
      <Route path="musteriler/yeni-gorusme/:musteriID" element={<CreateMeeting />}/>
      <Route path='musteriler/:id' element={<CustomerPage />} />
      <Route path="yeni-musteri" element={<NewCustomerPage />} />
      <Route path="musteri/teklif/:id" element={<PropositionPage />} />
      </Routes>
    </div>
    )
  }else{
    return(
      <LoginPage/>
    );
  }
  
}

export default App;
