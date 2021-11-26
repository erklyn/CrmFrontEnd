import React,{useState , useEffect} from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Axios from 'axios';

   

    
export default function Customers() {
    const [musteriler , setMusteriler] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response)=>{
          setMusteriler(response.data);
          
        })
      },[]);
    
    return (
        
        <div>
            {musteriler.map(musteri => {
                return (
                    <Grid container>
                        
                           
                        <Grid item xs={3} margin={2}>
                        <h1>{musteri.musteriUnvani}</h1>
                        </Grid>
                        <Grid item xs={3} margin={2}>
                        <h1>{musteri.musteriUlke}</h1>
                        </Grid>
                        <Grid item xs={3} margin={2}>
                        <h1>{musteri.gorusmeTarih}</h1>
                        </Grid>
                        <Grid item  margin={2}>
                        <Link style={{ display: "block", margin: "1rem 0" }}
                            to={`/musteriler/${musteri.id}`}
                            key={musteri.id}>MüşteriDetayı</Link>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
}
