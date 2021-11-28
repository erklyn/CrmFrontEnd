import React,{useState , useEffect} from 'react';
import { Grid , Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Axios from 'axios';

//import '../App.css';

   

    
export default function Departman() {
    let params = useParams();
    const [musteriler , setMusteriler] = useState([]);
    const [apiPath , setApiPath] = useState('http://localhost:3001/api/get/'+params.departman);
    
    
    

    useEffect(()=>{
        
        Axios.get(apiPath).then((response)=>{
        setMusteriler(response.data);
          
        })
      },[]);
    
    return (
        
        <div className="musteri-endis">
            {musteriler.map(musteri => {
                return (
                    <div className='musteri-outside'>
                    <Grid  container
  direction="row"
  justifyContent="center"
  alignItems="center">
                        <Grid item xs={12}>
                        <div className='musteri-inside'>
                        <Typography>Şirket:</Typography>
                        <h3 className='musteri-h3'>{musteri.musteriUnvani}</h3> 
                        <Typography>Görüşen Kişi:</Typography>
                        <h3 className='musteri-h3'>{musteri.firstName}</h3> 
                        <Typography>Departman:</Typography>
                        <h3 className='musteri-h3'>{musteri.departman}</h3> 
                        <Typography>Şehir:</Typography>
                        <h3 className='musteri-h3'>{musteri.musteriSehir}</h3> 
                        <Link 
                            to={`/musteriler/${musteri.id}`}
                            key={musteri.id}
                            className ='musteri-link'>
                        
                            MüşteriDetayı
                        </Link>
                        </div>
                        </Grid>
                    </Grid>
                    </div>
                )
            })}
        </div>
    )
}
