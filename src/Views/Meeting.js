import React ,{useState , useEffect} from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import Axios from 'axios';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom'


Axios.defaults.withCredentials = true;

export default function Meeting() {

    const [gorusme , setGorusme] = useState([{}]);
    

    let params = useParams();
  
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

          return (dt+' ' + month + ' '+year);
    }
    
    useEffect(()=>{
        Axios.get(''+process.env.REACT_APP_URL+'/api/get/singleGorusme/'+params.id+'').then((response)=>{
          setGorusme(response.data);
          
        })
       

      },[]);
    
  
    return (
        <div>
          
            
           {gorusme.map(a => {
              
               return (
                <Grid container
                marginTop={2}
                spacing={2}
                direction="row"
                wrap>
                  <Grid container 
                  marginLeft={2}>

                  
                  <Grid item xs={2}>
                  <Link to={'/musteriler/'+a.musteriID}>
                      Müşteriye Dön
                  </Link>
                  </Grid>
                  </Grid>
                  
                 <Grid item xs={12} md={6} lg={6}>
                   <Paper  variant='outlined'>
                      <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Görüşme Yapan Kişi
                    </Typography>
                          {a.temsilciAdi}
                      </Typography>
                   </Paper>
                 </Grid>
                 <Grid item xs={12} md={6} lg={6}>
                 <Paper  variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Görüşme Tarihi
                    </Typography>
                          {getDate(a.tarih)}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                 <Paper  variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                       Görüşme Konusu
                    </Typography>
                          {a.konusu}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                 <Paper  variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Görüşülen Araç Tipi
                    </Typography>
                          {a.aracTipi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                 <Paper  variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Görüşme Özeti
                    </Typography>
                          {a.özet}
                      </Typography>
                   </Paper>
                  </Grid>
               </Grid>
               )
           })}
           </div>
    )
}