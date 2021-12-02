import React from 'react'
import { Formik , Form } from 'formik';
import * as Yup from 'yup'; 
import {
  Grid 
  
} from '@mui/material';
import Axios from 'axios';
import Textfield from '../Models/UIWrappers/Textfield';
import Button from '../Models/UIWrappers/Button';

const INITIAL_FORM_STATE ={
    username: '',
    password:'',
};

export default function LoginPage() {
    return (
        <Grid container
                direction='column'
                justifyContent ='center'
                marginTop={2}
                
        >
            
            <Formik initialValues ={{
                ...INITIAL_FORM_STATE,

              }}
             
              onSubmit={ (values) =>{
                
                Axios.post("http://localhost:3001/login",{values}).then(()=>{
                  
                });
                
              }}>
                <Form>
            <Grid item xs={6}>
                <Textfield
                name='username'
                label='Kullanıcı Adı
                '/>
            </Grid>
            <Grid item xs={6}>
            <Textfield
                name='password'
                label='Şifre'
                type='password'
                />
            </Grid>
            <Grid item xs={6}>
                <Button>
                    Giriş
                </Button>
            </Grid>
                </Form>
            </Formik>
           

        </Grid>
    )
}
