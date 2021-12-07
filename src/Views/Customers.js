import React,{useState , useEffect} from 'react';
import { Grid , Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {Formik , Form} from 'formik';
import Textfield from '../Models/UIWrappers/Textfield';
import Select from '../Models/UIWrappers/Select';
import Button from '../Models/UIWrappers/Button';
import searchparams from '../Models/Data/search-params.json';



Axios.defaults.withCredentials = true;
   


export default function Customers() {
    

    



    const [musteriler , setMusteriler] = useState([]);
    const apiPath  = 'http://localhost:3001/api/get';
    const INITIAL_FORM_STATE = {
        searchParameter: '',
        searchValue:'',
    };


  
    
    

    useEffect(()=>{
        
        

    
        Axios.get(apiPath).then((response)=>{
          setMusteriler(response.data);
          
          
        })
      },[]);
    
    return (
        
            
        <div>
            <div className='searchBar'>
            <Formik
            initialValues ={{
              ...INITIAL_FORM_STATE
            }}
            
            onSubmit={ (values) =>{
              Axios.get("http://localhost:3001/api/get/"+values.searchParameter+"/"+values.searchValue).then((response)=>{
                setMusteriler(response.data);
                console.log(values.searchValue);
              })
            }}
            >
                    <Form>
                        <Grid container
                        marginTop={1}
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Grid item xs={4}>
                            <Select 
                            name='searchParameter'
                            label='Arama bölümü seçiniz.'
                            options={searchparams}
                            />
                            </Grid>
                            <Grid item xs={4}>
                            <Textfield
                            name= "searchValue"
                            label="Arama"/>
                            </Grid>

                            <Grid item xs={4}>
                                <Button>
                                    ARA
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>

            </div>

            {musteriler.map(musteri => {
                return (
                    
                    <Grid  container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                        
                        <Grid item xs={12}>
                        <Link 
                            to={`/musteriler/${musteri.id}`}
                            key={musteri.id}
                            className ='musteri-bar'>
                        <div className='musteri-inside'>
                        <Typography>Firma:</Typography>
                        <h3 className='musteri-h3'>{musteri.firmaAdi}</h3> 
                        <Typography>Şehir:</Typography>
                        <h3 className='musteri-h3'>{musteri.firmaSehir}</h3>
                        <Typography>Araç Tipi:</Typography>
                        <h3 className='musteri-h3'>{musteri.firmaAractipi}</h3> 
                      
                        
                        </div>
                        </Link>
                        </Grid>
                        

                    </Grid>
                   
                )
            })}
        </div>
    )
}
