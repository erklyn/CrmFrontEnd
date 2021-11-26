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
  firstName:'',
  lastName:'',
  departman:'',
  musteriUnvani:'',
  musteriAdresi:'',
  musteriMail:'',
  musteriSehir:'',
  musteriUlke:'',
  musteriAracTipi:'',
  musteriIlgili:'',
  musteriTelefon:'',
  gorusmeKonusu:'',
  gorusmeOzet:'',
  gorusmeTarih:'',
};


const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
    .required('Lütfen isminizi giriniz!'),

    lastName: Yup.string()
    .required('Lütfen Soyadınızı giriniz!'),

    departman: Yup.string()
    .required('İç Satış , Dış Satış olarak belirtiniz'),

    musteriUnvani: Yup.string()
    .required('Müşteri Ünvanını giriniz!'),

    musteriAdresi: Yup.string()
    .required('Müşteri Adresini giriniz'),

    musteriMail: Yup.string()
    .email('Mail adresi yanlış girildi')
    .required('Lütfen müşteri mail adresini giriniz'),

    musteriIlgili: Yup.string()
    .required('Lütfen doldurunuz.'),

    musteriTelefon: Yup.string().required('Lütfen telefon numarasını giriniz...'),

    musteriAracTipi: Yup.string(),

    musteriSehir: Yup.string(),

    musteriUlke: Yup.string(),

    gorusmeKonusu: Yup.string()
    .required('Görüşme Konusunu giriniz!'),

    gorusmeOzet: Yup.string()
    .required('Lütfen görüşme özetini giriniz!'),

    gorusmeTarih: Yup.date()
    .required('Tarih giriniz'),

   
});

export default function NewCustomerPage() {
    return (
        <Grid container>
      <Grid item xs={12}>
      <br></br>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <div >
            <Formik
            initialValues ={{
              ...INITIAL_FORM_STATE
            }}
            validationSchema ={FORM_VALIDATION}
            onSubmit={ (values) =>{
              Axios.post("http://localhost:3001/api/insert",{values}).then(()=>{
                alert('succesfull insert');
              });
              
              
            }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <Typography>Bilgileriniz</Typography>
                  </Grid>
                  <Grid item xs={6}> 
                    <Textfield 
                    name= "firstName"
                    label="Adınız"
                    />
                  </Grid>

                  <Grid item xs={6}> 
                  <Textfield 
                    name= "lastName"
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
                    name= "musteriUnvani"
                    label="Müşteri Ünvanı"
                    />
                  </Grid>

                  <Grid item xs={4}> 
                  <Textfield 
                    name= "musteriIlgili"
                    label="Müşteri İlgili Kişisi Adı"
                    />
                  </Grid>
                  <Grid item xs={4}> 
                  <Select
                    name= "musteriAracTipi"
                    label="Müşteri Araç Tipi"
                    options={trailers}
                    />
                  </Grid>

                  <Grid item xs={6}> 
                  <Textfield 
                    name= "musteriMail"
                    label="Müşteri E-Mail Adresi"
                    />
                  </Grid>
                  
                  <Grid item xs={6}> 
                  <Textfield 
                    name= "musteriTelefon"
                    label="Müşteri Telefon Numarası"
                    />
                  </Grid>

                  <Grid item xs={12}> 
                  <Textfield 
                    name= "musteriAdresi"
                    label="Müşteri Adresi"
                    />
                  </Grid>
                  <Grid item xs={6}> 
                  <Select
                    name= "musteriSehir"
                    label="Müşteri Şehir"
                    options={city}
                    />
                  </Grid>
                  <Grid item xs={6}> 
                    <Select
                      name='musteriUlke'
                      label='Müşteri Ülkesi'
                      options={countries} 
                      />
                  </Grid>




                  


                  <Grid item xs={12} >
                    <Typography>Görüşme Detaylar</Typography>
                  </Grid>

                  <Grid item xs={6}> 
                  <Textfield 
                    name= "gorusmeKonusu"
                    label="Görüşme Konusu"
                    />
                  </Grid>

                  <Grid item xs={6}> 
                  <DateTimePicker
                    name= "gorusmeTarih"
                    label="Görüşme Tarihi"
                    />
                  </Grid>
                
                  <Grid item xs={12}> 
                  <Textfield 
                    name= "gorusmeOzet"
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




