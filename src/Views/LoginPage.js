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
import { Logo } from '../Models/UIWrappers/Styles/Navbar.style';
import LogoImg from '../Models/UIWrappers/Assets/Logo.png'





const instance = Axios.create({
    withCredentials: true,
  })
const INITIAL_FORM_STATE ={
    username: '',
    password:'',
};

export default function LoginPage() {
    let navigate = useNavigate();



    const { setCustomer } = useCustomer();
    return (
        <Grid container

                direction='column'
                justifyContent ='center'
                alignItems = 'center'
                
                marginTop = {5}
               
                
        >
            <Container>
                <Logo src={LogoImg}></Logo>
            <Formik initialValues ={{
                ...INITIAL_FORM_STATE,

              }}
             
              onSubmit={ (values) =>{
                instance.post(""+process.env.REACT_APP_URL+"/api/auth/login",{values}).then((response)=>{
                    setCustomer(response.data)
                    navigate('/');
                    
                  });
                  instance.post(''+process.env.REACT_APP_URL+'/api/auth/currentUser').then((response) =>{
        
                    setCustomer(response.data)
                })
                
                
              }}>
                <Form>
                    <Grid container direction = 'column'  justifyContent='center' >
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
