import React , { useState , useEffect } from 'react'
import { CustomerWrapper } from '../../../Controllers/StoreSession'
import { 
    CustomersWrapper ,
     CustomerLink , 
     CustomerName,
     CustomerCity ,
     CustomerRisk,
     CustomerVehicleType
     } from '../Styles/CustomerBar.style'
import { Grid , Typography } from '@mui/material';
import Axios from 'axios';
import {Formik , Form} from 'formik';
import Textfield from '../Textfield';
import Button from '../Button';

export default function CustomerBar() {
    const [musteriler , setMusteriler] = useState([]);
    
    const INITIAL_FORM_STATE = {
        searchValue:'',
    };


  
    
    

    useEffect(()=>{    
        Axios.get(''+process.env.REACT_APP_URL+'/api/musteri').then((response)=>{
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
          Axios.get(""+process.env.REACT_APP_URL+"/api/musteri/name/"+values.searchValue).then((response)=>{
            setMusteriler(response.data);
          })
        }}
        >
                <Form>
                    <Grid container
                    marginTop={1}
                    marginLeft={1}
                    marginRight={1}
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
                <CustomersWrapper container marginBottom={2}>
                    <CustomersWrapper xs={12}>
                    <CustomerLink to={`/musteriler/${musteri.id}`} key={musteri.id}>
                        <CustomerName align='center' variant='h6'>
                            Firma: {musteri.firmaAdi}
                        </CustomerName>
                        <CustomerCity variant='h6'>
                        Şehir : {musteri.firmaSehir}
                        </CustomerCity>
                        <CustomerRisk variant='h6' > 
                        Müşteri Risk : {musteri.musteriRisk}
                        </CustomerRisk>
                        <CustomerVehicleType variant='h6'>
                        Müşteri Araç Tipi :  {musteri.firmaAractipi}
                        </CustomerVehicleType>
                    </CustomerLink>
                </CustomersWrapper>
           </CustomersWrapper>
            )
        })}
    
       </div>
    )
}
