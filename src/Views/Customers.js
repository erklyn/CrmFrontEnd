import React,{useState , useEffect} from 'react';
import { Grid , Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {Formik , Form} from 'formik';
import Textfield from '../Models/UIWrappers/Textfield';
import Button from '../Models/UIWrappers/Button';




Axios.defaults.withCredentials = true;
   


export default function Customers() {
    const [musteriler , setMusteriler] = useState([]);
    const apiPath  = ''+process.env.REACT_APP_URL+'/api/get';
    const INITIAL_FORM_STATE = {
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
              Axios.get(""+process.env.REACT_APP_URL+"/api/get/firmaAdi/"+values.searchValue).then((response)=>{
                setMusteriler(response.data);
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
                            
                            <Grid item xs={8}>
                            <Textfield
                            name= "searchValue"
                            label="Firma Adi giriniz"/>
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
                        <Typography>Risk Derecesi:</Typography>
                        <h3 className='musteri-h3'>{musteri.musteriRisk}</h3> 
                      
                        
                        </div>
                        </Link>
                        </Grid>
                        

                    </Grid>
                   
                )
            })}
        </div>
    )
}
