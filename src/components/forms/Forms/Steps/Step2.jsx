import React from 'react'
import { FormInput } from '../FormInput'
import { FormOptions } from '../FormOptions'

export const Step2 = ({
    register,
    setValue,
    watch,
    errors,
}) => {

    return (
        <>
            <h2 className='pb-3 pt-3 text-xl font-semibold '>
                DATOS PERSONALES
            </h2>
            <hr />

            <div className="flex justify-center w-full flex-wrap gap-2 max-w-5xl pt-3">

                {/* <div className='w-full'>
                    <FormInput
                        label='DNI'
                        type='text'
                        id='dni'
                        register={register}
                        required={{
                            value: true,
                            message: "El DNI es requerido",
                        }}
                        minLength={{ value: 3, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. 12345678'
                    />
                </div> */}

                <div className='w-full'>
                    <FormInput
                        label='Primer Nombre'
                        type='text'
                        id='firstName'
                        register={register}
                        required={{
                            value: true,
                            message: "Primer nombre es requerido",
                        }}
                        minLength={{ value: 2, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. Jose'
                    />
                </div>

                <div className='w-full'>
                    <FormInput
                        label='Segundo Nombre'
                        type='text'
                        id='secondName'
                        register={register}
                        // required={{
                        //     value: true,
                        //     message: "Segundo nombre es requerido",
                        // }}
                        minLength={{ value: 2, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. Luis'
                    />
                </div>

                <div className='w-full'>
                    <FormInput
                        label='Primer Apellido'
                        type='text'
                        id='firstLastName'
                        register={register}
                        required={{
                            value: true,
                            message: "Primer Apellido es requerido",
                        }}
                        minLength={{ value: 2, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. Luis'
                    />
                </div>

                <div className='w-full'>
                    <FormInput
                        label='Segundo Apellido'
                        type='text'
                        id='secondLastName'
                        register={register}
                        required={{
                            value: true,
                            message: "Segundo Apellido es requerido",
                        }}
                        minLength={{ value: 2, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. Luis'
                    />
                </div>

                <div className='w-full'>
                    {/* <label className="text-lg font-bold">Fecha de Nacimiento</label> */}
                    <div className="flex gap-2">
                        <FormInput
                            label='Fecha de Nacimiento'
                            type='date'
                            id='birthDate'
                            register={register}
                            required={{
                                value: true,
                                message: "Fecha de nacimiento es requerido",
                            }}
                            errors={errors}
                            placeholder='Ej. 12/12/2021'
                        />
                    </div>
                </div>

                <div className="w-full">
                    <FormOptions
                        label='Sexo'
                        id='gender'
                        options={[
                            { value: 'H', label: 'HOMBRE' },
                            { value: 'M', label: 'MUJER' },
                        ]}
                        register={register("gender", {
                            required: {
                                value: true,
                                message: "Campo requerido",
                            },
                        })}
                        errors={errors}
                    />
                </div>
                <div className="w-full">
                    <FormInput
                        label={`Celular ${ watch("cellphone").length > 0 ? `(${ watch("cellphone").length })` : '' }`}
                        type='text'
                        id='cellphone'
                        register={register}
                        required={{
                            value: true,
                            message: "Teléfono es requerido",
                        }}
                        minLength={{ value: 3, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. 987654321'
                    />
                </div>
                <div className="w-full">
                    <FormInput
                        label='Correo Electrónico'
                        type='email'
                        id='email'
                        register={register}
                        required={{
                            value: true,
                            message: "Email es requerido",
                        }}
                        minLength={{ value: 3, message: "Formato incorrecto" }}
                        maxLength={{ value: 30, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. jose@gmail.com'
                    />
                </div>

            </div>
        </>
    )
}
