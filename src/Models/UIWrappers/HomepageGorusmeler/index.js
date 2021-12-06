import React , { useEffect , useState}from 'react';
import Axios from 'axios';
import {Grid, Paper, Typography} from '@mui/material'
import { Link } from 'react-router-dom';


Axios.defaults.withCredentials = true;

export default function HomePageGorusme() {
    const today = new Date();
    const [gorusmeler , setGorusmeler] = useState([{}]);
    useEffect(()=>{
        
        

        
        Axios.get('http://localhost:3001/api/get/gorusmeler').then((response)=>{
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
               console.log(a)
               return(
            <Grid item xs={12} margin={1} padding={1}> 
            <Paper>  
            <Link className='homepageStacks' to={'/musteriler/'+a.musteriID}>
            <Typography>
                {a.temsilciAdi}  , {a.id} ile bir görüşme oluşturdu!  
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
