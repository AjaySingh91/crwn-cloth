import React from "react";
import './form-input.style.scss'

const FormInput = ({handleChange ,label, ...otherProp}) => (
    <div className="group">
        <input  className="form-input" onChange={handleChange} {...otherProp} />
        {
            label ? 
            (<label className={`${otherProp.value.length ? 'shrink' : ''} form-input-label`}>{label} </label>)
            : null
        } 
    </div>
)

export default FormInput; 