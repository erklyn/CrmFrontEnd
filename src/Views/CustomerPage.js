import React ,{useState , useEffect} from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router';
import Axios from 'axios';
import { useSearchParams } from 'react-router-dom';


export default function CustomerPage() {

    const [musteri , setMusteri] = useState([]);
    let params = useParams();
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/musteriler/'+params.id+'').then((response)=>{
          setMusteri(response.data);
          
        })
      },[]);
    
  
    return (
        <div>
             Hello
           {musteri.map(a => {
               return (
               <h1>{a.firstName}</h1>
               )
           })}
               
            
        
        </div>
    )
}
