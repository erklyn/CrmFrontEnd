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
import Button from '../Models/UIWrappers/Button';
import DateTimePicker from '../Models/UIWrappers/DateTimePicker';
import { useCustomer } from '../Controllers/StoreSession';
import { useParams } from 'react-router';




Axios.defaults.withCredentials = true;


export default function CreateMeeting() {
    let params = useParams();
    const {customer} = useCustomer();

    const INITIAL_FORM_STATE ={

        gorusmeKonusu:'',
        gorusmeOzeti:'',
        gorusmeTarihi:'',
        gorusmeYeri:'',
        musteriID:params.musteriID,
        temsilciID:customer.id,
        temsilciAdi:customer.adi
      };
      
      
      const FORM_VALIDATION = Yup.object().shape({
          gorusmeKonusu: Yup.string()
          .required('Müşteri Ünvanını giriniz!'),
      
          gorusmeOzeti: Yup.string()
          .required('Müşteri Adresini giriniz'),
      
          gorusmeYeri: Yup.string()
          .required('Görüşme Yerini giriniz!'),
      
          gorusmeTarihi: Yup.date()
          .required('Lütfen doldurunuz.'),
      });
      







    return (
        <Grid container marginTop={2}>
      
      <Grid item xs={12}>
        <Container>
          <div >
            <Formik
            initialValues ={{
              ...INITIAL_FORM_STATE
            }}
            validationSchema ={FORM_VALIDATION}
            onSubmit={ (values ,{ resetForm}) =>{
              
              Axios.post("https://serin-crm.herokuapp.com/api/insert/gorusme",{values}).then(()=>{
                alert('succesfull insert');
                
              });
              resetForm();
              
            }}
            >
              <Form>
                <Grid container spacing={2}>
                 
                  <Grid item xs={12}  >
                    <Typography>Görüşme Bilgileri</Typography>
                  </Grid>
                  <Grid item xs={6} md={4} lg={4} >

                    <Textfield
                    name='gorusmeYeri'
                    label='Görüşme Yeri'
                    />
                  </Grid>

                  <Grid item xs={6} md={4} lg={4} >

                  <DateTimePicker 
                    name= "gorusmeTarihi"
                    label="Görüşme Tarihi"
                    />
                  </Grid>

                  <Grid item xs={6} md={4} lg={4} >

                  <Textfield 
                    name= "gorusmeKonusu"
                    label="Görüşme Konusu"
                    />
                  </Grid>
                  <Grid item xs={12}> 
                  <Textfield
                    name= "gorusmeOzeti"
                    label="Görüşme Özeti"
                    multiline
                    rows={3}
                    />
                  </Grid>

                  <Grid item xs={12}> 
                    <Button>
                      Yeni Görüşme Ekle
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




