import React , { useEffect , useState}from 'react';
import Axios from 'axios';
import {Grid, Paper, Typography} from '@mui/material'
import { Link } from 'react-router-dom';


Axios.defaults.withCredentials = true;

export default function HomePageTamamlanmamışTeklifler() {
    const today = new Date();
    const [redTeklifler , setRedTeklifler] = useState([{}]);
    useEffect(()=>{
        
        

        
        Axios.get('http://localhost:3001/api/get/teklifRed').then((response)=>{
          setRedTeklifler(response.data);
          
          
        })
      },[]);
    return (
       <Grid container
       direction='column' 
       marginLeft = {1}
       >
        
           <Paper>

           {redTeklifler.map( a => {
               console.log(a)
               return(
            <Grid item xs={12} margin={1} padding={1}> 
            <Paper>  
            <Link className='homepageStacks' to={'/musteri/teklif'+a.id}>
            <Typography>
                {a.temsilciAdi}  |  {a.durum} | {a.neden}  | {a.teklifTarih}
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
