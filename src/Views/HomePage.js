import { Container, Grid, Typography } from '@mui/material';
import React , {useState} from 'react'
import {useCustomer} from '../Controllers/StoreSession'
import Gorusmeler from '../Models/UIWrappers/HomepageGorusmeler/index'
import Teklifler from '../Models/UIWrappers/HomepageTeklifler/index'
import RedTeklifler from '../Models/UIWrappers/HomepageTamamlanmamış/index'


export default function HomePage() {
    const {customer , setCustomer } = useCustomer();
    const kullaniciAdi = customer.adi;
    
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
