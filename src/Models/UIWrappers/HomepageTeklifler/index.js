import React , { useEffect , useState}from 'react';
import Axios from 'axios';
import {Grid, Paper, Typography} from '@mui/material'
import { Link } from 'react-router-dom';


Axios.defaults.withCredentials = true;

export default function HomePageTeklifler() {
    const today = new Date();
    const [teklifler , setTeklifler] = useState([{}]);
    useEffect(()=>{
        
        

        
        Axios.get('https://serin-crm.herokuapp.com/api/get/teklifler').then((response)=>{
          setTeklifler(response.data);
          
          
        })
      },[]);
    return (
       <Grid container
       direction='column'
       
       marginLeft = {1}
       >
        
           <Paper>

           {teklifler.map( a => {
               console.log(a)
               return(
            <Grid item xs={12} margin={1} padding={1}> 
            <Paper>  
            <Link className='homepageStacks' to={'/musteri/teklif/'+a.id}>
            <Typography>
                {a.temsilciAdi}  , {a.id} numaralı Teklif'i sisteme yükledi.
            </Typography>

            </Link>
            </Paper>
            </Grid>
               
               )

           })

           }
           
           </Paper>
       </Grid>
    )
}
