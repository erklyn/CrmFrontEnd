import react from 'react';
import {TextField} from '@mui/material';
import {useField} from 'formik';

const TextFieldWrapper = ({
    name,
    ...otherProps
}) => {
    const [field ,meta] = useField(name);

     const configTextField = {
          ...field,
          ...otherProps,
          fullWidth: true,
          variants: 'outlined'  
        
     };
     if (meta && meta.touched && meta.error){
         configTextField.error = true;
         configTextField.helperText = meta.error;
     } 
    
    return (
        <TextField {...configTextField}/>
    );
};

export default TextFieldWrapper