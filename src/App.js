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





function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="login" element={<LoginPage />}/>
      <Route path="register" element={<CreateUser />}/>
      <Route path="musteriler" element={<Customers />}/>
      <Route path="musteriler/yeni-teklif/:temsilciID/:musteriID" element={<CreatePropositionPage />}/>
      <Route path="musteriler/yeni-görüsme/:temsilciID/:musteriID" element={<CreateMeeting />}/>
      <Route path='musteriler/:id' element={<CustomerPage />} />
      <Route path="yeni-musteri" element={<NewCustomerPage />} />
      <Route path="musteri/teklif/:id" element={<PropositionPage />} />
      
      </Routes>
    </div>
   
  );
}

export default App;
