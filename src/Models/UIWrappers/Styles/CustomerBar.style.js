import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
import {Grid , Typography} from '@mui/material';


export const CustomersWrapper = styled(Grid)`
height: auto;
width: 100%;
display: flex;
flex-direction: column;
`;

export const CustomerLink = styled(Link)`
margin-top: 1rem;
margin-left: 1rem;
margin-right: 1rem;
height: 7vh;
border-width: 3px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
border-radius: 25px;
border-style: solid;
border-color: #2E8BC0;
text-decoration: none;
&:hover {
    border-color: purple;
    border-width: 5px;
    
}

`;

export const CustomerName = styled(Typography)`
color: #2e8bc0;
font-size: x-large;



`;
export const CustomerCity = styled(Typography)`
color: #2e8bc0;
font-size: x-large;


@media (max-width: 700px) {
    display: none;
}


`;
export const CustomerRisk = styled(Typography)`
color: #2e8bc0;

@media (max-width: 800px) {
    display: none;
}


`;
export const CustomerVehicleType = styled(Typography)`
color: #2e8bc0;
font-size: x-large;

@media (max-width: 900px) {
    display: none;
}
`;





