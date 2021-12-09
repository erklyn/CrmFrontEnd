import {Grid, Typography } from '@mui/material';
import React , { useEffect } from 'react'
import {useCustomer} from '../Controllers/StoreSession'
import Gorusmeler from '../Models/UIWrappers/HomepageGorusmeler/index'
import Teklifler from '../Models/UIWrappers/HomepageTeklifler/index'
import RedTeklifler from '../Models/UIWrappers/HomepageTamamlanmamış/index'
import  Axios  from 'axios';
Axios.defaults.withCredentials = true;


export default function HomePage() {
    const { customer , setCustomer } = useCustomer();
    let kullaniciAdi = customer.adi;
    useEffect(()=>{
        
        Axios.post(''+process.env.REACT_APP_URL+'/api/currentUser').then((response) =>{
        
                    setCustomer(response.data)
                })
                
        
      },[]);
    
    
    return (
        <div>
            <h1>Hoşgeldin {kullaniciAdi}</h1>
            <Grid container
            wrap
            spacing={2}>
                
            <Grid item xs={6}>
                <Typography> Son Görüşmeler </Typography>
                <Gorusmeler/>
            </Grid>
            <Grid item xs={6}>
            <Typography>Son Yapılan Teklifler</Typography>
                <Teklifler/>
            </Grid>
            <Grid item xs={12}>
            <Typography> Tamamlanmamış yada Red olan teklifler</Typography>
                <RedTeklifler/>
            </Grid>
            </Grid>
            
        </div>
    )
}
