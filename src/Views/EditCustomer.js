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
    const [initvalues , setInıtvalues] = useState([]);
    const {customer} = useCustomer();
    const params = useParams();
           

    function  getData() {
          Axios.get(process.env.REACT_APP_URL+'/api/musteriler/'+params.id).then((response)=>{
          setInıtvalues(response.data);
          console.log(response.data)
        })
    }



    useEffect(()=>{ 
      getData();
         
      },[]);
    
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
      initvalues.map(a => {
  const INITIAL_FORM_STATE = {
    id: a.id,
    firmaAdi: a.firmaAdi,
    firmaSehir: a.firmaSehir,
    firmaUlke: a.firmaUlke,
    firmaMail: a.firmaMail,
    firmaAractipi: a.firmaAractipi,
    firmaIlgilisi: a.firmaIlgilisi,
    firmaAdresi: a.firmaAdresi,
    firmaTelefon: a.firmaTelefon,
    musteriRisk : a.musteriRisk,
    temsilciID: a.temsilciID || customer.id,
    temsilciAdi: a.temsilciAdi || customer.adi
  }
  return(
<Grid container marginTop={2}>
  <Grid item xs={12}>
    <Container>
      <div>
        <Formik
          initialValues ={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema ={FORM_VALIDATION}
          onSubmit={ (values ,{ resetForm}) =>{
            Axios.post(""+process.env.REACT_APP_URL+"/api/update/musteri/"+params.id,{values}).then(()=>{
              alert('succesfull insert');
            });
              resetForm();
              navigate('/musteriler/'+a.id) }}>
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
                        Müşteri KAYDET
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
})
)
  
};




