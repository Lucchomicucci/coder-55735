import React from "react"
import { useState } from "react"

const withFormValidation = (WrappedComponent) => {

    const WithFormValidation = (props) => {
        const [errors, setErrors] = useState({})

        const validateForm = () => {
            let newErrors = {}

            if(!props.formData.nombre){
                newErrors = {nombre: 'el nombre es requerido'}
            }

            if(!props.formData.email){
                newErrors = {email: 'el email es requerido'}
            }
            setErrors(newErrors)
        }

        return(
            <WrappedComponent
            {...props}
            errors={errors}
            validateForm={validateForm}
            />
        )
    }

    return WithFormValidation
}

export default withFormValidation