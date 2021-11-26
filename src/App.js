import './App.css';
import { Routes, Route, Link} from "react-router-dom";
import NewCustomerPage from './Views/NewCustomerPage';
import Customers from './Views/Customers';
import CustomerPage from './Views/CustomerPage';

function App() {
 
  

  return (
    <div>
       
      <nav
        style={{
          
          alignItems : 'center',
          justifyContent: 'center',
          justifySelf :'center',
          borderBottom: "solid 1px",
          paddingBottom: "2rem",
          

        }}
      >
        <h1>Serin CRM</h1>
        <Link to="/musteriler">Müşteriler</Link> |{" "}

        <Link to="/yeni-musteri">Yeni Müşteri</Link> 
      </nav>
      <Routes>
      <Route path="musteriler" element={<Customers />}/>
      <Route path='musteriler/:id' element={<CustomerPage />} />
      <Route path="yeni-musteri" element={<NewCustomerPage />} />
      </Routes>
    </div>
   
  );
}

export default App;
