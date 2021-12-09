import React , { useEffect , useState}from 'react';
import Axios from 'axios';
import {Grid, Paper, Typography} from '@mui/material'
import { Link } from 'react-router-dom';


Axios.defaults.withCredentials = true;

export default function HomePageGorusme() {
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

    const [gorusmeler , setGorusmeler] = useState([{}]);
    useEffect(()=>{
        
        

        
        Axios.get(''+process.env.REACT_APP_URL+'/api/get/gorusmeler').then((response)=>{
          setGorusmeler(response.data);
          
          
        })
      },[]);
    return (
       <Grid container
       direction='column' 
       marginLeft = {1}
       >
        
           <Paper>

           {gorusmeler.map( a => {
               
               return(
            <Grid item xs={12} margin={1} padding={1}> 
            <Paper>  
            <Link className='homepageStacks' to={'/musteri/gorusme/'+a.id}>
            <Typography>
                {a.temsilciAdi}  , {a.aracTipi} için {getDate(a.tarih)} tarihinde bir görüşme yaptı.
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
