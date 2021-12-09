import React , { useEffect , useState}from 'react';
import Axios from 'axios';
import {Grid, Paper, Typography} from '@mui/material'
import { Link } from 'react-router-dom';


Axios.defaults.withCredentials = true;

export default function HomePageTamamlanmamışTeklifler() {
    function getDate(gorusmeDa) {
        let date = new Date(gorusmeDa);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

         if (dt < 10) {
         dt = '0' + dt;
         }
         if (month < 10) {
          month = '0' + month;
         }       

         return (dt+'.' + month + '.'+year);

   }

    const [redTeklifler , setRedTeklifler] = useState([{}]);
    useEffect(()=>{
        
        

        
        Axios.get(''+process.env.REACT_APP_URL+'/api/get/teklifRed').then((response)=>{
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
               
               return(
            <Grid item xs={12} margin={1} padding={1}> 
            <Paper>  
            <Link className='homepageStacks' to={'/musteri/teklif/'+a.id}>
            <Typography>
                {a.temsilciAdi}  | {a.aracTipi} |  {a.durum} | {a.neden}  | {getDate(a.teklifTarih)}
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
