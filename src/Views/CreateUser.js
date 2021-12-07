import React from 'react'
import { Formik , Form } from 'formik';
import * as Yup from 'yup'; 
import {
  Grid , Container
  
} from '@mui/material';
import Axios from 'axios';
import Textfield from '../Models/UIWrappers/Textfield';
import Button from '../Models/UIWrappers/Button';
import Select from '../Models/UIWrappers/Select';
import departmans from '../Models/Data/departman.json';
Axios.defaults.withCredentials = true;

const INITIAL_FORM_STATE ={
    username:'',
    mail: '',
    password:'',
    adi:'',
    departman:'',
    soyadi:''
};


export default function CreateUser() {
    return (
       
        <Grid container
            margin = {5}  
            

        >   
            <Grid item xs={12}>
        <Container>
            <Formik initialValues ={{
                ...INITIAL_FORM_STATE,

              }}
             
              onSubmit={ (values) =>{
                
                Axios.post("https://serin-crm.herokuapp.com/auth/register",{values}).then((response)=>{
                  console.log(response);
                });
                
              }}>
                <Form>
                    <Grid container spacing = {2}>
                        <Grid item xs={6}>
                            <Textfield
                            name='adi'
                            label='Temsilci Adı 
                            '/>
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield
                            name='soyadi'
                            label='Temsilci  Soyadı
                            '/>
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield
                            name='mail'
                            label='Temsilci Mail Adresi
                            '/>
                        </Grid>
                        <Grid item xs={6}>
                            <Select
                            name='departman'
                            label='Departman'
                            options={departmans}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield
                            name='username'
                            label='Kullanıcı Adı'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield
                            name='password'
                            label='Şifre'
                            />
                        </Grid>
                    <Grid item xs={12}>
                        <Button>
                            Temsilci Hesabı oluştur.
                        </Button>
                    </Grid>
                  </Grid>
                </Form>
             </Formik>
            </Container>
        </Grid>
     </Grid>
    )
}
