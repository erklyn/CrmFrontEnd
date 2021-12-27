import './App.css';
import { Routes, Route} from "react-router-dom";
import NewCustomerPage from './Views/NewCustomerPage';
import CustomerPage from './Views/CustomerPage';
import PropositionPage from './Views/PropositionPage';
import CreatePropositionPage from './Views/CreatePropositionPage';
import LoginPage from './Views/LoginPage';
import CreateMeeting from './Views/CreateMeeting';
import CreateUser from './Views/CreateUser';
import Axios from 'axios';
import { useCustomer } from "./Controllers/StoreSession";
import HomePage from './Views/HomePage';
import Meeting from './Views/Meeting';
import EditCustomer from './Views/EditCustomer';
import Navbar from './Models/UIWrappers/Navbar/Navbar';
import CustomerBar from './Models/UIWrappers/CustomerBar/CustomerBar';


Axios.defaults.withCredentials = true;




function App() {


const { customer } = useCustomer();
  if(customer) {
    return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route path="login" element={<LoginPage />}/>
      <Route path="register" element={<CreateUser />}/>
      <Route path="musteriler" element={<CustomerBar />}/>
      <Route path="musteriler/yeni-teklif/:musteriID" element={<CreatePropositionPage />}/>
      <Route path="musteriler/yeni-gorusme/:musteriID" element={<CreateMeeting />}/>
      <Route path='musteriler/:id' element={<CustomerPage />} />
      <Route path="yeni-musteri" element={<NewCustomerPage />} />
      <Route path="musteri/teklif/:id" element={<PropositionPage />} />
      <Route path="musteri/gorusme/:id" element={<Meeting />} />
      <Route path="musteriler/duzenle/:id" element={<EditCustomer />} />
      <Route path="musteriler/teklif/duzenle/:id" element={<Meeting />} />
      <Route path="musteriler/gorusme/duzenle/:id" element={<Meeting />} />
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
