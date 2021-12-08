import React , { useEffect, useState }  from 'react'
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
import { useNavigate } from 'react-router-dom';
import { useCustomer } from '../Controllers/StoreSession';
import { useParams } from 'react-router';



Axios.defaults.withCredentials = true;




export default function EditCustomer() {



    const {customer} = useCustomer();

    const [initialValues, setInitialValues] = useState();
    const params = useParams();
    async function getInitialValues() {
        try {
            const values =  await Axios.get(''+process.env.REACT_APP_URL+'/api/musteriler/'+params.id);
              //console.log(response);
                console.log(values.data[0])
            
              return {
                  id: values.data[0].id,
                  firmaAdi: values.data[0].firmaAdi,
                  firmaAdresi: values.data[0].firmaAdresi,
                  firmaMail: values.data[0].firmaMail,
                  firmaSehir: values.data[0].firmaSehir,
                  firmaUlke: values.data[0].firmaUlke,
                  firmaAractipi: values.data[0].firmaAractipi,
                  firmaIlgilisi: values.data[0].firmaIlgilisi,
                  firmaTelefon: values.data[0].firmaTelefon,
                  temsilciID: customer.id,
                  temsilciAdi: customer.adi,
              }
  
              //console.log(InitialValues);
  
              //return InitialValues;
  
  
            } catch (error) {
              console.error(error);
            }
      }


    useEffect(()=>{ 
      
        getInitialValues().then(res => setInitialValues(res))
        
         
      },[]);
    
   console.log(initialValues)
   
      
      
      
      


  
  
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








   let navigate = useNavigate();
    return (
        <Grid container marginTop={2}>
      
      <Grid item xs={12}>
        <Container>
          <div >
            <Formik
            initialValues ={{...initialValues}}
            validationSchema ={FORM_VALIDATION}
            onSubmit={ (values ,{ resetForm}) =>{
              
              Axios.post(""+process.env.REACT_APP_URL+"/api/update/musteri/"+params.id,{values}).then(()=>{
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




