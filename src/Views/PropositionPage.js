import React ,{useState , useEffect} from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Paper } from '@mui/material';




export default function PropositionPage() {

    const [musteri , setMusteri] = useState([]);
    

    let params = useParams();
    const path = '/teklif-duzenle/'+params.id;
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
        Axios.get('http://localhost:3001/api/get/tekteklif/'+params.id+'').then((response)=>{
          setMusteri(response.data);
          
        })
       

      },[]);
    
  
    return (
        <div>
          
            
           {musteri.map(a => {
              
               return (
                <Grid container
                marginTop={1}
                spacing={1}
                direction="row">
                   <Grid item xs={12} md={12}>

                   <Link to={path} className='musteri-link'>Teklif Düzenle</Link>
                    
                   
                  </Grid>
                 <Grid item xs={12} md={6} lg={3}>
                   <Paper elevation={2} variant='outlined'>
                      <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Teklif Araç Tipi
                    </Typography>
                          {a.aracTipi}
                      </Typography>
                   </Paper>
                 </Grid>
                 <Grid item xs={12} md={6} lg={3}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Teklif Adeti
                    </Typography>
                          {a.adet}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Birim Fiyat
                    </Typography>
                          {a.birimFiyati}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Para Birimi
                    </Typography>
                          {a.paraBirimi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={6} md={4}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Peşinat Miktarı
                    </Typography>
                          {a.pesinatMiktari}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={6} md={4}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Vade Süresi
                    </Typography>
                          {a.vadeSure}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={6} md={4}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Teslim Tarihi
                    </Typography>
                          {a.teslimTarihi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Teklif Tarihi
                    </Typography>
                          {getDate(a.teklifTarih)}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Teklif Durumu
                    </Typography>
                          {a.durum}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                         Teklif Nedeni
                    </Typography>
                          {a.neden}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Teklif Notu
                    </Typography>
                          {a.teklifNotu}
                      </Typography>
                   </Paper>
                  </Grid>
                 
                  

               </Grid>
               )
           })}
           </div>
    )
}