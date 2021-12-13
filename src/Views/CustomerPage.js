import React ,{useState , useEffect} from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Paper } from '@mui/material';

Axios.defaults.withCredentials = true;


export default function CustomerPage() {


    const [musteri , setMusteri] = useState([]);
    const [gorusme , setGorusme] = useState([]);
    const [teklifler , setTeklifler] = useState([]);

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
        Axios.get(''+process.env.REACT_APP_URL+'/api/musteriler/'+params.id+'').then((response)=>{
          setMusteri(response.data);
          
        })
        Axios.get(''+process.env.REACT_APP_URL+'/api/get/gorusme/'+params.id+'').then((response)=>{
          setGorusme(response.data);
          
        })
        Axios.get(''+process.env.REACT_APP_URL+'/api/get/teklif/'+params.id+'').then((response)=>{
          setTeklifler(response.data);
          
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
                   
                 <Grid container justifyContent = 'end' marginBottom ={1}>
                   <Grid item>
                      <Link className='musteri-link' to ={'/musteriler/duzenle/'+params.id}>
                        Müşteri Düzenle
                      </Link>
                   </Grid>
                </Grid> 


                 <Grid item xs={12} md={6} lg={4}>
                   <Paper elevation={2} variant='outlined'>
                      <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri
                    </Typography>
                          {a.firmaAdi}
                      </Typography>
                   </Paper>
                 </Grid>
                 <Grid item xs={12} md={6} lg={4}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri İlgili Kişisi
                    </Typography>
                          {a.firmaIlgilisi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Risk
                    </Typography>
                          {a.musteriRisk}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Telefon Numarası
                    </Typography>
                          {a.firmaTelefon}
                      </Typography>
                   </Paper>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Mail Adresi
                    </Typography>
                          {a.firmaMail}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Adresi
                    </Typography>
                          {a.firmaAdresi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Şehir
                    </Typography>
                          {a.firmaSehir}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Ülke
                    </Typography>
                          {a.firmaUlke}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Müşteri Araç Tipi
                    </Typography>
                          {a.firmaAractipi}
                      </Typography>
                   </Paper>
                  </Grid>
                 
                  <Grid item xs={12} md={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                  TEMSİLCİMİZ
                  </Typography>
                  <Typography align='center' variant='h4'>
                   {a.temsilciAdi}
                  </Typography>
                   </Paper>
                  </Grid>

               </Grid>
               )
           })}
           <Grid container
                marginTop={1}
                spacing={1}
                direction="row">
               
               </Grid>
              <Grid container
                marginTop={1}
                spacing={1}
                direction="row">
               <Grid item xs={12} md={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                  YAPILAN GÖRÜŞMELER
                  </Typography>
                 </Paper>
                 </Grid>
                 <Grid item xs={12}> 
                  <Link className='musteri-link' to={'/musteriler/yeni-gorusme/'+params.id+''}> Yeni Görüşme Ekle</Link>
                  </Grid>

                 {gorusme.map(gorusme => {
                return (
                    
                  <Grid  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  >
                      
                      <Grid item xs={12}>
                      
                      <Link
                       className='musteri-bar' 
                       to={'/musteri/gorusme/'+gorusme.id}
                      >
                      <div className='musteri-inside'>
                      <Typography>Görüşme Tarihi:</Typography>
                      <h3 className='musteri-h3'>{getDate(gorusme.tarih)}</h3> 
                      <Typography>Görüşme Araç Tipi:</Typography>
                      <h3 className='musteri-h3'>{gorusme.aracTipi}</h3> 
                      <Typography>Görüşme Konusu:</Typography>
                      <h3 className='musteri-h3'>{gorusme.konusu}</h3>
                      <Typography>Görüşen Kişi:</Typography>
                      <h3 className='musteri-h3'>{gorusme.temsilciAdi}</h3> 
                    
                      </div>
                      
                     </Link>
                    </Grid>
                      

                  </Grid>
                    )
                  })}
                  
               </Grid>

               
               <Grid container
                marginTop={1}
                spacing={1}
                direction="row">
              
               <Grid item xs={12} md={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                  TEKLİFLER 
                  
                  </Typography> 
                   </Paper>

                  </Grid>
                  <Grid item xs={12}> 
                  
                  <Link className='musteri-link' to={'/musteriler/yeni-teklif/'+params.id+''}> Yeni Teklif Ekle</Link>

                  </Grid>
                  {teklifler.map(teklif => {
                return (
                    
                    <Grid  container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    >
                        
                        <Grid item xs={12}>
                        
                        <Link
                         className='musteri-bar' 
                         to={'/musteri/teklif/'+teklif.id}
                        >
                        <div className='musteri-inside'>
                        <Typography>Teklif Tarihi:</Typography>
                        <h3 className='musteri-h3'>{getDate(teklif.teklifTarih)}</h3> 
                        <Typography>Teklif Durumu:</Typography>
                        <h3 className='musteri-h3'>{teklif.durum}</h3> 
                        <Typography>Teklif Araç Tipi:</Typography>
                        <h3 className='musteri-h3'>{teklif.aracTipi}</h3>
                        <Typography>Teklif Birim Fiyatı:</Typography>
                        <h3 className='musteri-h3'>{teklif.birimFiyati}</h3> 
                      
                        </div>
                        
                       </Link>
                      </Grid>
                        

                    </Grid>
                    )
                  })}
               </Grid>
        
        </div>
    )
}
