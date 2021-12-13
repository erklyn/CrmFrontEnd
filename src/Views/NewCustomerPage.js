import React ,{ useEffect } from 'react'
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
import Button from '../Models/UIWrappers/Button';
import countries from '../Models/Data/countries.json';
import city from '../Models/Data/turkey-city.json';
import trailers from '../Models/Data/trailers.json';
import riskseviyesi from '../Models/Data/dereceler.json'
import { useNavigate } from 'react-router-dom';
import { useCustomer } from '../Controllers/StoreSession';

Axios.defaults.withCredentials = true;




export default function NewCustomerPage() {

  const {customer , setCustomer} = useCustomer();
  
  const INITIAL_FORM_STATE ={
    firmaAdi:'',
    firmaAdresi:'',
    firmaMail:'',
    firmaAractipi:'',
    firmaIlgilisi:'',
    firmaTelefon:'',
    musteriRisk:'Belirtilmedi',
    temsilciID:customer.id,
    temsilciAdi:customer.adi
  };
  
  
  const FORM_VALIDATION = Yup.object().shape({
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
  });


  useEffect(()=>{
        
    Axios.post(''+process.env.REACT_APP_URL+'/api/currentUser').then((response) =>{
    
                setCustomer(response.data)
            })
            
    
  },[]);





   let navigate = useNavigate();
   if(customer.departman === "dis-satis") {
     return (
      <Grid container marginTop={2}>
    
      <Grid item xs={12}>
        <Container>
          <div >
            <Formik
            initialValues ={{
              ...INITIAL_FORM_STATE,
              firmaSehir:'Beriltilmedi'
            }}
            validationSchema ={FORM_VALIDATION}
            onSubmit={ (values ,{ resetForm}) =>{
              
              Axios.post(""+process.env.REACT_APP_URL+"/api/insert/musteri",{values}).then(()=>{
                alert('succesfull insert');
                
              });
              resetForm();
              navigate('/musteriler')
              
            }}
            >
              <Form>
                <Grid container spacing={2}>
                 
                  <Grid item xs={12} >
                    <Typography>Müşteri Bilgileri</Typography>
                  </Grid>
  
                    <Grid item xs={6}> 
                  <Textfield 
                    name= "firmaAdi"
                    label="Müşteri Ünvanı"
                    />
                  </Grid>
                  
                  <Grid item xs={6}> 
                  <Textfield 
                    name= "firmaIlgilisi"
                    label="Müşteri İlgili Kişisi Adı"
                    />
                  </Grid>
                  <Grid item xs={6}> 
                    <Select
                      name='musteriRisk'
                      label='Müşteri Risk Seviyesi'
                      options={riskseviyesi} 
                      />
                  </Grid>
                  <Grid item xs={6}> 
                  <Select
                    name= "firmaAractipi"
                    label="Müşteri Araç Tipi"
                    options={trailers}
                    />
                  </Grid>
  
                  <Grid item xs={4}> 
                  <Textfield 
                    name= "firmaMail"
                    label="Müşteri E-Mail Adresi"
                    />
                  </Grid>
                  
                  <Grid item xs={4}> 
                  <Textfield 
                    name= "firmaTelefon"
                    label="Müşteri Telefon Numarası"
                    />
                  </Grid>

                  <Grid item xs={4}> 
                    <Select
                      name='firmaUlke'
                      label='Müşteri Ülkesi'
                      options={countries} 
                      />
                  </Grid>
  
                  <Grid item xs={12}> 
                  <Textfield 
                    name= "firmaAdresi"
                    label="Müşteri Adresi"
                    multiline
                    rows={3}
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
   }else{
    return (
      <Grid container marginTop={2}>
    
    <Grid item xs={12}>
      <Container>
        <div >
          <Formik
          initialValues ={{
            ...INITIAL_FORM_STATE,
            firmaUlke:'Turkey'

          }}
          validationSchema ={FORM_VALIDATION}
          onSubmit={ (values ,{ resetForm}) =>{
            
            Axios.post(""+process.env.REACT_APP_URL+"/api/insert/musteri",{values}).then(()=>{
              alert('succesfull insert');
              
            });
            resetForm();
            navigate('/musteriler')
            
          }}
          >
            <Form>
              <Grid container spacing={2}>
               
                <Grid item xs={12} >
                  <Typography>Müşteri Bilgileri</Typography>
                </Grid>

                  <Grid item xs={12} md={6}> 
                <Textfield 
                  name= "firmaAdi"
                  label="Müşteri Ünvanı"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}> 
                <Textfield 
                  name= "firmaIlgilisi"
                  label="Müşteri İlgili Kişisi Adı"
                  />
                </Grid>
                <Grid item xs={12} md={6}> 
                  <Select
                    name='musteriRisk'
                    label='Müşteri Risk Seviyesi'
                    options={riskseviyesi} 
                    />
                </Grid>
                <Grid item xs={12} md={6}> 
                <Select
                  name= "firmaAractipi"
                  label="Müşteri Araç Tipi"
                  options={trailers}
                  />
                </Grid>

                <Grid item xs={12} md={4}> 
                <Textfield 
                  name= "firmaMail"
                  label="Müşteri E-Mail Adresi"
                  />
                </Grid>
                
                <Grid item xs={12} md={4}> 
                <Textfield 
                  name= "firmaTelefon"
                  label="Müşteri Telefon Numarası"
                  />
                </Grid>
                <Grid item xs={12} md={4}> 
                <Select
                  name= "firmaSehir"
                  label="Müşteri Şehir"
                  options={city}
                  />
                </Grid>
                <Grid item xs={12}> 
                <Textfield 
                  name= "firmaAdresi"
                  label="Müşteri Adresi"
                  multiline
                  rows={3}
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
   }
    
};




