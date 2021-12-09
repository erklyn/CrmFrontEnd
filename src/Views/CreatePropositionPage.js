import React from 'react'
import { Formik , Form } from 'formik';
import * as Yup from 'yup'; 
import {
  Grid , Container
  
} from '@mui/material';
import Axios from 'axios';
import Textfield from '../Models/UIWrappers/Textfield';
import Select from '../Models/UIWrappers/Select';
import Button from '../Models/UIWrappers/Button';
import trailers from '../Models/Data/trailers.json';
import durum from '../Models/Data/durum.json'
import paracins from '../Models/Data/döviz.json'
import { useParams } from 'react-router';
import DateTimePicker from '../Models/UIWrappers/DateTimePicker';
import {useCustomer} from '../Controllers/StoreSession'
Axios.defaults.withCredentials = true;



export default function CreatePropositionPage() {
    const { customer } = useCustomer();
    const INITIAL_FORM_STATE ={

        paraBirimi: '',
        odemeSekli: '',
        pesinatMiktari:'',
        vadeSure:'',
        teslimTarihi:'',
        teslimYeri:'',
        durum:'',
        neden:'',
        not:'',
        birimFiyati:0,
        adet:0,
        aracTipi:'',
        teklifTarih:'',
        temsilciID:customer.id
        
    
    }
    
    const FORM_VALIDATION = Yup.object().shape({
        paraBirimi: Yup.string()
        .required('Lütfen Para Birimi Giriniz'),
        odemeSekli: Yup.string()
        .required('Ödeme Şeklini giriniz'),
        pesinatMiktari: Yup.string()
        .required('Peşinat Miktarını giriniz. Tamamen ödendiyse hepsini yazınız.'),
        vadeSure: Yup.string()
        .required('Lütfen vade süresini yazınız'),
        teslimTarihi: Yup.string()
        .required('Ürünün teslim edileceği süreyi yazınız.'),
        teslimYeri:Yup.string(),
        durum: Yup.string()
        .required('Teklif durumunu seçiniz.'),
        neden: Yup.string(),
        not: Yup.string(),
        birimFiyati: Yup.number()
        .required('Birim fiyatını Sayı olarak giriniz!'),
        adet: Yup.number()
        .required('Adet sayısını sayı olarak giriniz!'),
        aracTipi: Yup.string()
        .required('Araç Tipini Seçiniz!'),
        teklifTarih: Yup.date()
        .required('Tarihi giriniz.')
    
    
    })


    
    
    let params = useParams();
    
    
    return (
        <Grid container marginTop={1} spacing={1}
        direction="row">
            <Container>
            <Formik
            initialValues ={{
                ...INITIAL_FORM_STATE,
                musteriID: params.musteriID,
                temsilciAdi:customer.adi
              }}
              validationSchema ={FORM_VALIDATION}
              onSubmit={ (values ,{ resetForm}) =>{
                
                Axios.post(""+process.env.REACT_APP_URL+"/api/insert/teklif",{values}).then(()=>{
                  alert('succesfull insert');
                  
                });
                resetForm();
                
              }}
            >
                <Form>
                    <Grid container marginTop= {1} spacing ={1}>
                
                    <Grid item xs={12}>
                        <DateTimePicker
                        name='teklifTarih'
                        label='Teklif verdiğiniz tarihi giriniz'/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Select 
                        name='aracTipi'
                        label='Araç Türünü Seçiniz'
                        options={trailers}
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Textfield 
                        name='adet'
                        label='Adet belirtiniz'
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Textfield 
                        name='birimFiyati'
                        label='Birim Fiyatını giriniz!'
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Select 
                        name='paraBirimi'
                        label='Para birimini Seçiniz!'
                        options={paracins}
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Textfield 
                        name='pesinatMiktari'
                        label='Peşinat'
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Textfield 
                        name='vadeSure'
                        label='Vade Süresi'
                        />

                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Textfield 
                        name='odemeSekli'
                        label='Müşteri Ödeme Şekli'
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Textfield 
                        name='teslimTarihi'
                        label='Teslimat  Tarihi/Süresi'
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Textfield 
                        name='teslimYeri'
                        label='Teslimat Yeri'
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Select 
                        name='durum'
                        label='Teklif Durumu'
                        options={durum}
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Textfield 
                        name='neden'
                        label='Eğer Teklif Red edilirse'
                        />

                    </Grid>
                    <Grid item xs={12} >
                        <Textfield 
                        multiline ={true}
                        rows={4}
                        name='not'
                        label='Eklemek istediğiniz bir şey var ise Buraya yazabilirsiniz.'
                        />

                    </Grid>
                    <Grid item xs={12}> 
                    <Button>
                      Yeni Teklif Ekle
                    </Button>
                  </Grid>
                  </Grid>
                </Form>
            </Formik>
            </Container>
        </Grid>
    )
}
