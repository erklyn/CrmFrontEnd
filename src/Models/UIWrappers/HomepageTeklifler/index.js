import React , { useEffect , useState}from 'react';
import Axios from 'axios';
import {Grid, Paper, Typography} from '@mui/material'
import { Link } from 'react-router-dom';


Axios.defaults.withCredentials = true;

export default function HomePageTeklifler() {
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

    const [teklifler , setTeklifler] = useState([{}]);
    useEffect(()=>{
        
        

        
        Axios.get(''+process.env.REACT_APP_URL+'/api/get/teklifler').then((response)=>{
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
                {a.temsilciAdi}  ,  {getDate(a.teklifTarih)}  tarihinde  {a.aracTipi} için durumu {a.durum} olan bir teklif yükledi. 
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
