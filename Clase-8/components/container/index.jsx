import { useState } from "react";
import withFormValidation from "../hocCoder";
import Form from "../form";

const FormWithValidation = withFormValidation(Form)

const Container = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div>
            <FormWithValidation formData={formData} onChange={handleChange} />
        </div>
    )
}

export default Container