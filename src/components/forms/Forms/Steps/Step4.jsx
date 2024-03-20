import React from 'react'
import { FormInput } from '../FormInput'
import { FormOptions } from '../FormOptions'
import { FormSelect } from '../FormSelect'
import { useRouter } from 'next/router'
import { validateFileSize } from '../../../../utils/validatesForm'

export const Step4 = ({
    register,
    setValue,
    watch,
    errors,
    countries,
    species,
    races,
    colours,
    dataRegister
}) => {

    const { pathname } = useRouter()

    // console.log(species)
    // console.log(races)
    return (
        <>
            <h2 className='pb-3 pt-3 text-xl font-semibold'>
                IDENTIFICACIÓN DE LA MASCOTA
            </h2>
            <hr />

            <div className="flex justify-center w-full flex-wrap gap-2 max-w-5xl pt-3">


                <div className="w-full">
                    <FormOptions
                        label='¿Su mascota tiene microchip?'
                        id='isMicrochip'
                        options={[
                            { value: 'isMicrochip-yes', label: 'Si' },
                            { value: 'isMicrochip-no', label: 'No' },
                        ]}
                        register={register("isMicrochip", {
                            required: {
                                value: true,
                                message: "Campo requerido",
                            },
                        })}
                        errors={errors}
                    />
                </div>

                {
                    watch("isMicrochip") == 'isMicrochip-yes' &&
                    <>
                        <div className='w-full'>
                            <FormInput
                                label={`Micro chip ( ${ watch('microchip').length } )`}
                                type='text'
                                id='microchip'
                                register={register}
                                required={{
                                    value: true,
                                    message: "El micro chip es requerido",
                                }}
                                minLength={{ value: 3, message: "Formato incorrecto" }}
                                maxLength={{ value: 20, message: "Formato incorrecto" }}
                                errors={errors}
                                placeholder='Ej. 123456789'
                            />
                        </div>

                        <div className='w-full'>
                            <FormInput
                                label='Fecha de Instalación del Microchip'
                                type='date'
                                id='dateMicrochip'
                                register={register}
                                required={{
                                    value: true,
                                    message: "La fecha de instalación del micro chip es requerido",
                                }}
                                minLength={{ value: 8, message: "Formato incorrecto" }}
                                maxLength={{ value: 20, message: "Formato incorrecto" }}
                                errors={errors}
                                placeholder='Ej. 12/12/2021'
                            />
                        </div>
                    </>
                }


            </div>

            <h2 className='pb-3 pt-3 text-xl font-semibold'>
                DATOS DE LA MASCOTA
            </h2>
            <hr />

            <div className="flex justify-center w-full flex-wrap gap-2 max-w-5xl pt-3">

                <div className='w-full'>
                    <FormInput
                        label='Nombre de la mascota'
                        type='text'
                        id='firstNamePet'
                        register={register}
                        required={{
                            value: true,
                            message: "Primer nombre de la mascota es requerido",
                        }}
                        minLength={{ value: 2, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. Jose'
                    />
                </div>

                <div className='w-full'>
                    <FormSelect
                        label='País'
                        property="countryPet"
                        options={countries}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            setValue("countryPet", target.value)
                        }}
                        required
                    />
                </div>

                <div className="flex w-full gap-2">
                    <FormInput
                        label='Fecha de Nacimiento de la Mascota'
                        type='date'
                        id='birthDatePet'
                        register={register}
                        required={{
                            value: true,
                            message: "Fecha de nacimiento es requerido",
                        }}
                        errors={errors}
                        placeholder='Ej. 12/12/2021'
                    />
                </div>

                <div className="flex w-full gap-2">
                    <FormInput
                        label='Fecha de Adopción'
                        type='date'
                        id='adoptionDate'
                        register={register}
                        required={{
                            value: true,
                            message: "Fecha de Adopción es requerido",
                        }}
                        errors={errors}
                        placeholder='Ej. 12/12/2021'
                    />
                </div>

                <div className="flex w-full gap-2">
                    <FormSelect
                        label='Sexo'
                        property="genderPet"
                        options={[
                            {
                                value: 'M',
                                label: 'MACHO'
                            },
                            {
                                value: 'H',
                                label: 'HEMBRA'
                            }
                        ]}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            setValue("genderPet", target.value)
                        }}
                        required
                    />
                </div>

                <div className="flex w-full gap-2">
                    <FormSelect
                        label='Especie'
                        property="specie"
                        options={species}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            setValue("specie", target.value)
                        }}
                        required
                    />
                </div>

                <div className="flex w-full gap-2">
                    <FormSelect
                        label='Raza'
                        property="race"
                        options={races}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            setValue("race", target.value)
                        }}
                        required
                    />
                </div>

                <div className="flex w-full gap-2">
                    <FormSelect
                        label='Color'
                        property="color"
                        options={colours}
                        value={colours.filter((color) =>
                            watch("color").split(",").includes(color.value)
                        )}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            // setValue("color", target.value)
                            if (target.length < 4) {
                                const arr = target.map((t) => t.value);
                                setValue("color", arr.join(","));
                            }
                        }}
                        required
                        isMulti
                    />
                </div>

                <div className="flex w-full gap-2">
                    <FormOptions
                        label='Estirilizado'
                        id='isSterilized'
                        options={[
                            { value: 'isSterilized-yes', label: 'Si' },
                            { value: 'isSterilized-no', label: 'No' },
                        ]}
                        register={register("isSterilized", {
                            required: {
                                value: true,
                                message: "Campo requerido",
                            },
                        })}
                        errors={errors}
                    />
                </div>

                {/* {
                    pathname.split("/")[2] !== "solicitud-de-registro" && */}

                <>
                    <div className="flex w-full gap-2">
                        <FormInput
                            label={`Imagen de la mascota ${ watch('imagePet')?.length ? `(${ (watch('imagePet')[0].size / (1024 * 1024)).toFixed(4) })mb` : '' }`}
                            type='file'
                            id='imagePet'
                            register={register}
                            // required={{
                            //     value: true,
                            //     message: "Primer nombre de la mascota es requerido",
                            // }}
                            minLength={{ value: 2, message: "Formato incorrecto" }}
                            maxLength={{ value: 20, message: "Formato incorrecto" }}
                            validate={validateFileSize(3300000)}
                            errors={errors}
                            placeholder='Ingrese la imagen de la mascota'
                            accept='.jpg, .jpeg, .png'
                            size='1048576'
                        />
                    </div>
                    {
                        dataRegister.imagePet?.imageUrl &&
                        <div className="flex w-32 h-32">
                            <img
                                src={dataRegister.imagePet?.imageUrl}
                                alt="pet"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    }
                    <div className="flex">
                        <span>
                            si desea reducir el tamaño de la imagen puede hacerlo en la siguiente página : &nbsp;
                            <a
                                href="https://squoosh.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500"
                            >
                                https://squoosh.app/
                            </a>
                        </span>
                    </div>
                </>
                {/* } */}



            </div>

            <h2 className='pb-3 pt-3 text-xl font-semibold'>
                GENEALOGÍA
            </h2>
            <hr />

            <div className="flex justify-center w-full flex-wrap gap-2 max-w-5xl pt-3">

                <div className='w-full'>
                    <FormInput
                        label={`Padre Micro chip ( ${ watch('fatherMicrochip').length } )`}
                        type='text'
                        id='fatherMicrochip'
                        register={register}
                        // required={{
                        //     value: true,
                        //     message: "El micro chip del padre es requerido",
                        // }}
                        minLength={{ value: 10, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. 48573498'
                    />
                </div>

                <div className='w-full'>
                    <FormInput
                        label={`Madre Micro chip ( ${ watch('motherMicrochip').length } )`}
                        type='text'
                        id='motherMicrochip'
                        register={register}
                        // required={{
                        //     value: true,
                        //     message: "El micro chip del padre es requerido",
                        // }}
                        minLength={{ value: 10, message: "Formato incorrecto" }}
                        maxLength={{ value: 20, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. 823482378W'
                    />
                </div>
            </div>

        </>
    )
}
