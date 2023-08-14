import "./formInput.css";
import { useState } from "react";

const FormInput = (props) => {
   const {label, onChange, errorMessage, id, ...inputProps} = props;
   const [focused, setFocused] = useState(false); 
    
   const handleFocus = (e) => {
        setFocused(true);
   }
   return(
        <div className="formInput">
             <label>{label}</label>
            <input {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocus} 
            onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
            focused={focused.toString()}

            />
            <span className="errorMessage">{errorMessage}</span>
        </div>
    )
}

export default FormInput;