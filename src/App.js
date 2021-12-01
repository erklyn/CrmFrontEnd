import './App.css';
import { Routes, Route} from "react-router-dom";
import NewCustomerPage from './Views/NewCustomerPage';
import Customers from './Views/Customers';
import CustomerPage from './Views/CustomerPage';
import Header from './Models/UIWrappers/Header';
import Departman from './Views/Departman';
import PropositionPage from './Views/PropositionPage';
import CreatePropositionPage from './Views/CreatePropositionPage';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="musteriler" element={<Customers />}/>
      <Route path="musteriler/yeni-teklif/:temsilciID/:musteriID" element={<CreatePropositionPage />}/>
      <Route path="musteriler/yeni-gorusme/:temsilciID/:musteriID" element={<PropositionPage />}/>
      <Route path="departman/:departman" element={<Departman />}/>
      <Route path='musteriler/:id' element={<CustomerPage />} />
      <Route path="yeni-musteri" element={<NewCustomerPage />} />
      </Routes>
    </div>
   
  );
}

export default App;
