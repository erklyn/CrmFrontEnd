import React ,{useState , useEffect} from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Paper } from '@mui/material';
import { CustomerLink, CustomersWrapper } from '../Models/UIWrappers/Styles/CustomerBar.style';
import { GorusmeAracTipi, GorusmeKisi, GorusmeKonusu, GorusmeTarihi } from '../Models/UIWrappers/Styles/Gorusme.style';
import { TeklifAracTipi, TeklifBirimFiyat, TeklifDurum, TeklifTarih } from '../Models/UIWrappers/Styles/Teklif.style';


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
        Axios.get(''+process.env.REACT_APP_URL+'/api/musteri/'+params.id+'').then((response)=>{
          setMusteri(response.data);
          
        })
        Axios.get(''+process.env.REACT_APP_URL+'/api/gorusme/belong/'+params.id+'').then((response)=>{
          setGorusme(response.data);
          
        })
        Axios.get(''+process.env.REACT_APP_URL+'/api/teklif/belong/'+params.id+'').then((response)=>{
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
                      <Link className='musteri-link' to ={'/musteriler/edit/'+params.id}>
                        M????teri D??zenle
                      </Link>
                   </Grid>
                </Grid> 


                 <Grid item xs={12} md={6} lg={4}>
                   <Paper elevation={2} variant='outlined'>
                      <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        M????teri
                    </Typography>
                          {a.firmaAdi}
                      </Typography>
                   </Paper>
                 </Grid>
                 <Grid item xs={12} md={6} lg={4}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        M????teri ??lgili Ki??isi
                    </Typography>
                          {a.firmaIlgilisi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        M????teri Risk
                    </Typography>
                          {a.musteriRisk}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        Telefon Numaras??
                    </Typography>
                          {a.firmaTelefon}
                      </Typography>
                   </Paper>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        M????teri Mail Adresi
                    </Typography>
                          {a.firmaMail}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        M????teri Adresi
                    </Typography>
                          {a.firmaAdresi}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        M????teri ??ehir
                    </Typography>
                          {a.firmaSehir}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        M????teri ??lke
                    </Typography>
                          {a.firmaUlke}
                      </Typography>
                   </Paper>
                  </Grid>
                  <Grid item xs={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                      <Typography align='center' variant='h6'>
                        
                        M????teri Ara?? Tipi
                    </Typography>
                          {a.firmaAractipi}
                      </Typography>
                   </Paper>
                  </Grid>
                 
                  <Grid item xs={12} md={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                  TEMS??LC??M??Z
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
                  YAPILAN G??R????MELER
                  </Typography>
                 </Paper>
                 </Grid>
                 <Grid item xs={12}> 
                  <Link className='musteri-link' to={'/musteriler/yeni-gorusme/'+params.id+''}> Yeni G??r????me Ekle</Link>
                  </Grid>

                 {gorusme.map(gorusme => {
                return (
                    
                  <Grid  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  >
                      
                      <CustomersWrapper item xs={12}>
                      <CustomerLink
                       className='musteri-bar' 
                       to={'/musteri/gorusme/'+gorusme.id}
                      >
                      <GorusmeTarihi>{getDate(gorusme.tarih)}</GorusmeTarihi>
                      <GorusmeAracTipi>{gorusme.aracTipi}</GorusmeAracTipi>
                      <GorusmeKonusu>Konu: {gorusme.konusu}</GorusmeKonusu>
                      <GorusmeKisi>{gorusme.temsilciAdi}</GorusmeKisi> 
                     </CustomerLink>
                    </CustomersWrapper>
                      
                  </Grid>
                    )
                  })}
                  
               </Grid>

               
               <Grid container
                marginTop={1}
                spacing={1}
                marginBottom={2}
                direction="row">
              
               <Grid item xs={12} md={12}>
                 <Paper elevation={2} variant='outlined'>
                 <Typography align='center' variant='h5'>
                  TEKL??FLER 
                  
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
                        
                        <CustomersWrapper item xs={12}>
                        
                        <CustomerLink
                         className='musteri-bar' 
                         to={'/musteri/teklif/'+teklif.id}
                        >
                      
                        <TeklifTarih>{getDate(teklif.teklifTarih)}</TeklifTarih>
                        
                        <TeklifDurum>Durum: {teklif.durum}</TeklifDurum>

                        <TeklifAracTipi>{teklif.aracTipi}</TeklifAracTipi>

                        <TeklifBirimFiyat>{teklif.birimFiyati + teklif.paraBirimi }</TeklifBirimFiyat>
                      
                       
                       </CustomerLink>
                      </CustomersWrapper>
                        

                    </Grid>
                    )
                  })}
               </Grid>
        
        </div>
    )
}
