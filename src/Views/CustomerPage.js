import React ,{useState , useEffect} from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Paper } from '@mui/material';




export default function CustomerPage() {

    const [musteri , setMusteri] = useState([]);
    let params = useParams();
    const path = '/musteri-duzenle/'+params.id;
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

          return (dt+'-' + month + '-'+year);
    }
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/musteriler/'+params.id+'').then((response)=>{
          setMusteri(response.data);
          
        })
      },[]);
    
  
    return (
        <div>
          
            
           {musteri.map(a => {
               return (
                <Grid container
                margin={1}
                spacing={1}
                direction="row">
                   <Grid item xs={12} md={12}>

                   <Link to={path}></Link>
                    <Typography align='left'>
                      {a.firstName}  {a.lastName}  |  {getDate(a.gorusmeTarih)} 
                       
                    </Typography> 
                   
                  </Grid>
                 <Grid item xs={12} md={6} lg={3}>
                   <Paper elevation={2} variant='outlined'>
                      <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri
                    </Typography>
                          {a.musteriUnvani}
                      </Typography>
                   </Paper>
                 </Grid>
                 <Grid item xs={12} md={6} lg={3}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri İlgili Kişisi
                    </Typography>
                          {a.musteriIlgili}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Telefon Numarası
                    </Typography>
                          {a.musteriTelefon}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Mail Adresi
                    </Typography>
                          {a.musteriMail}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Adresi
                    </Typography>
                          {a.musteriAdresi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Şehir
                    </Typography>
                          {a.musteriSehir}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Ülke
                    </Typography>
                          {a.musteriUlke}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Araç Tipi
                    </Typography>
                          {a.musteriAracTipi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                       Görüşme Konusu
                    </Typography>
                          {a.gorusmeKonusu}
                      </Typography>
                   </Paper>
                  </Grid> 
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Görüşme Özeti
                    </Typography>
                          {a.gorusmeOzet}
                      </Typography>
                   </Paper>
                  </Grid>
                  

               </Grid>
               )
           })}
               
               <Grid container
                margin={1}
                spacing={1}
                direction="row">
               <Grid item xs={12} md={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                  TEKLİFLER
                  </Typography>
                          
                
                  
                   </Paper>
                  </Grid>
               </Grid>
        
        </div>
    )
}
