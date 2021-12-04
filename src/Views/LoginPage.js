import React from 'react'
import { Formik , Form } from 'formik';
import * as Yup from 'yup'; 
import {
  Grid , Container
  
} from '@mui/material';
import Axios from 'axios';
import Textfield from '../Models/UIWrappers/Textfield';
import Button from '../Models/UIWrappers/Button';



const INITIAL_FORM_STATE ={
    email: '',
    password:'',
};

export default function LoginPage() {
    return (
        <Grid container

                direction='column'
                justifyContent ='flex-end'
                alignItems = 'center'
                
                margin = {5}
               
                
        >
            <Container >
            <Formik initialValues ={{
                ...INITIAL_FORM_STATE,

              }}
             
              onSubmit={ (values) =>{
                
                
                
              }}>
                <Form>
                    <Grid container direction = 'column' spacing = {2} >
                    <Grid item xs={8}>
                        <Textfield
                        name='email'
                        label='Kullanıcı Mail Adresi
                        '/>
                    </Grid>
                   
                    <Grid item xs={8}>
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
                   </Grid>
                </Form>
            </Formik>
           
            </Container>
        </Grid>
    )
}
