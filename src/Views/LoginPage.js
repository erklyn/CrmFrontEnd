import React from 'react'
import { Formik , Form } from 'formik';
import {
  Grid , Container
  
} from '@mui/material';
import Axios from 'axios';
import Textfield from '../Models/UIWrappers/Textfield';
import Button from '../Models/UIWrappers/Button';
import { useCustomer } from "../Controllers/StoreSession";
import { useNavigate } from 'react-router-dom';





const instance = Axios.create({
    withCredentials: true,
  })
const INITIAL_FORM_STATE ={
    username: '',
    password:'',
};

export default function LoginPage() {
    let navigate = useNavigate();



    const { customer , setCustomer } = useCustomer();
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
                instance.post("'https://serin-crm.herokuapp.com/auth/login",{values}).then((response)=>{
                    setCustomer(response.data)
                    navigate('/');
                    
                  });
                  instance.post('https://serin-crm.herokuapp.com/auth/currentUser').then((response) =>{
        
                    setCustomer(response.data)
                })
                
                
              }}>
                <Form>
                    <Grid container direction = 'column' spacing = {2} >
                    <Grid item xs={8}>
                        <Textfield
                        name='username'
                        label='Kullanıcı Adı
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
