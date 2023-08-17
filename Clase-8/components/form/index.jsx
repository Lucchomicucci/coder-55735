import React from "react"

const Form = ({ formData, errors, validateForm, onChange }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        validateForm && validateForm()
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={(e) => onChange(e)}/>
                {errors && errors.nombre && <div>{errors.nombre}</div>}
            </div>

            <div>
                <label>Email:</label>
                <input type="number" name="email" value={formData.email} onChange={(e) => onChange(e)}/>
                {errors && errors.email && <div>{errors.email}</div>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form