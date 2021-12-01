import React  from 'react'
import { Formik , Form } from 'formik';
import * as Yup from 'yup'; 
import {
  Container,
  Grid,
  Typography
} from '@mui/material';
import Axios from 'axios';
import Textfield from '../Models/UIWrappers/Textfield';
import Select from '../Models/UIWrappers/Select';
import DateTimePicker from '../Models/UIWrappers/DateTimePicker';
import Button from '../Models/UIWrappers/Button';
import countries from '../Models/Data/countries.json';
import city from '../Models/Data/turkey-city.json';
import departman from '../Models/Data/departman.json';
import trailers from '../Models/Data/trailers.json';



const INITIAL_FORM_STATE ={
  adi:'',
  soyadi:'',
  departman:'',
  mail:'test',
  firmaAdi:'',
  firmaAdresi:'',
  firmaMail:'',
  firmaSehir:'',
  firmaUlke:'',
  firmaAractipi:'',
  firmaIlgilisi:'',
  firmaTelefon:'',
  konusu:'',
  ozet:'',
  tarih:'',
  musteriID:2021001,
  temsilciID:10001
};


const FORM_VALIDATION = Yup.object().shape({
    adi: Yup.string()
    .required('Lütfen isminizi giriniz!'),

    soyadi: Yup.string()
    .required('Lütfen Soyadınızı giriniz!'),

    departman: Yup.string()
    .required('İç Satış , Dış Satış olarak belirtiniz'),

    firmaAdi: Yup.string()
    .required('Müşteri Ünvanını giriniz!'),

    firmaAdresi: Yup.string()
    .required('Müşteri Adresini giriniz'),

    firmaMail: Yup.string()
    .email('Mail adresi yanlış girildi')
    .required('Lütfen müşteri mail adresini giriniz'),

    firmaIlgilisi: Yup.string()
    .required('Lütfen doldurunuz.'),

    firmaTelefon: Yup.string().required('Lütfen telefon numarasını giriniz...'),

    firmaAractipi: Yup.string(),

    firmaSehir: Yup.string(),

    firmaUlke: Yup.string(),

    konusu: Yup.string()
    .required('Görüşme Konusunu giriniz!'),

    ozet: Yup.string()
    .required('Lütfen görüşme özetini giriniz!'),

    tarih: Yup.date()
    .required('Tarih giriniz'),

   
});

export default function NewCustomerPage() {
    return (
        <Grid container marginTop={1}>
      
      <Grid item xs={12}>
        <Container>
          <div >
            <Formik
            initialValues ={{
              ...INITIAL_FORM_STATE
            }}
            validationSchema ={FORM_VALIDATION}
            onSubmit={ (values ,{ resetForm}) =>{
              
              Axios.post("http://localhost:3001/api/insert/musteri",{values}).then(()=>{
                alert('succesfull insert');
                
              });
              resetForm();
              
            }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <Typography>Bilgileriniz</Typography>
                  </Grid>
                  <Grid item xs={6}> 
                    <Textfield 
                    name= "adi"
                    label="Adınız"
                    />
                  </Grid>

                  <Grid item xs={6}> 
                  <Textfield 
                    name= "soyadi"
                    label="Soyadınız"
                    />
                  </Grid>

                  <Grid item xs={12}> 
                  <Select
                    name= "departman"
                    label="Departmanınız"
                    options={departman}
                    />
                  </Grid>

                

                  <Grid item xs={12} >
                    <Typography>Müşteri Bilgileri</Typography>
                  </Grid>

                    <Grid item xs={4}> 
                  <Textfield 
                    name= "firmaAdi"
                    label="Müşteri Ünvanı"
                    />
                  </Grid>

                  <Grid item xs={4}> 
                  <Textfield 
                    name= "firmaIlgilisi"
                    label="Müşteri İlgili Kişisi Adı"
                    />
                  </Grid>
                  <Grid item xs={4}> 
                  <Select
                    name= "firmaAractipi"
                    label="Müşteri Araç Tipi"
                    options={trailers}
                    />
                  </Grid>

                  <Grid item xs={6}> 
                  <Textfield 
                    name= "firmaMail"
                    label="Müşteri E-Mail Adresi"
                    />
                  </Grid>
                  
                  <Grid item xs={6}> 
                  <Textfield 
                    name= "firmaTelefon"
                    label="Müşteri Telefon Numarası"
                    />
                  </Grid>

                  <Grid item xs={12}> 
                  <Textfield 
                    name= "firmaAdresi"
                    label="Müşteri Adresi"
                    />
                  </Grid>
                  <Grid item xs={6}> 
                  <Select
                    name= "firmaSehir"
                    label="Müşteri Şehir"
                    options={city}
                    />
                  </Grid>
                  <Grid item xs={6}> 
                    <Select
                      name='firmaUlke'
                      label='Müşteri Ülkesi'
                      options={countries} 
                      />
                  </Grid>




                  


                  <Grid item xs={12} >
                    <Typography>Görüşme Detaylar</Typography>
                  </Grid>

                  <Grid item xs={6}> 
                  <Textfield 
                    name= "konusu"
                    label="Görüşme Konusu"
                    />
                  </Grid>

                  <Grid item xs={6}> 
                  <DateTimePicker
                    name= "tarih"
                    label="Görüşme Tarihi"
                    />
                  </Grid>
                
                  <Grid item xs={12}> 
                  <Textfield 
                    name= "ozet"
                    label="Görüşme Özeti"
                    multiline={true}
                    rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}> 
                    <Button>
                      Yeni Müşteri Oluştur
                    </Button>
                  </Grid>



                </Grid>

              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
    )
};




