import React from 'react'
import { FormInput } from '../FormInput'
import { FormOptions } from '../FormOptions'
import { FormSelect } from '../FormSelect'
// import { useType } from '../../../../../molecules/Adopter/Data/hooks/useTypes'
// import { useDocuments } from '../../../../../molecules/Adopter/Search/hooks/useDocuments'
// import { usePerson } from '../../../../../molecules/Adopter/Search/hooks/usePerson'
import { useEffect } from 'react'
import { useDocuments, usePerson, useType } from '../../../../hook/inputs'

export const Step1 = ({
    register,
    setValue,
    watch,
    errors,
    countries,
    step,
    setStep,
}) => {
    const { persons } = usePerson();
    const { documents, handleDocuments } = useDocuments();
    const { types } = useType();

    useEffect(() => {
        handleDocuments(setValue, watch("country"), watch("person"));
    }, [])

    useEffect(() => {
        handleDocuments(
            setValue,
            watch("country"),
            watch("person")
        );
    }, [watch("country")]);

    return (
        <>
            <h2 className='pb-3 text-xl font-semibold'>
                IDENTIFICACIÓN DE ADOPTANTE
            </h2>
            <hr />

            <div className="flex justify-center w-full flex-wrap gap-2 max-w-5xl pt-3">
                <div className="w-full flex flex-col items-start justify-center gap-2 ">
                    {/* <label className="text-lg font-bold" htmlFor='country'>País</label> */}

                    {/* <ReactSelect
                            options={countries}
                            value={countries.filter(
                                (values) => values.value == watch("country")
                            )}
                            onChange={(target) => {
                                console.log(target.value)
                                setValue("country", target.value)
                                handleDocuments(
                                    setValue,
                                    watch("country") != ""
                                        ? watch("country")
                                        : localStorage.getItem("countryCode") ?? "PE",
                                    watch("person")
                                );
                            }}
                            required
                            id="country"
                        /> */}

                    <FormSelect
                        label='País'
                        property="country"
                        options={countries}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            setValue("country", target.value)
                            handleDocuments(
                                setValue,
                                watch("country") !== ""
                                    ? watch("country")
                                    : localStorage.getItem("countryCode") ?? "PE",
                                watch("person")
                            );
                        }}
                        required
                    />
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-2">
                    {/* <label className="text-lg font-bold">Tipo de Persona</label> */}
                    {/* <ReactSelect
                            required
                            options={persons}
                            value={watch("person")}
                            onChange={(target) => {
                                console.log(target.value)
                                setValue("person", target.value);
                                handleDocuments(
                                    setValue,
                                    watch("country"),
                                    target.value
                                );
                            }}
                            error={errors?.person}
                        /> */}

                    <FormSelect
                        label='Tipo de Persona'
                        property="person"
                        required
                        options={persons}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            setValue("person", target.value);
                            handleDocuments(
                                setValue,
                                watch("country"),
                                target.value
                            );
                        }}

                    />
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-2">
                    {/* <label htmlFor='documentType' className="text-lg font-bold">Documento de Identidad</label> */}

                    <FormSelect
                        label='Documento de Identidad'
                        property="documentType"
                        options={documents}
                        value={documents.filter(
                            (values) => values.value === watch("documentType")
                        )}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            setValue("documentType", target.value)
                        }}
                        required
                        id="documentType"
                    />

                </div>

                <div className='w-full'>
                    <FormInput
                        label={`Número de Documento ${ watch("documentNumber").length }/8`}
                        type='string'
                        id='documentNumber'
                        register={register}
                        required={{
                            value: true,
                            message: "Número de documento es requerido",
                        }}
                        minLength={{ value: 7, message: "Formato incorrecto" }}
                        maxLength={{ value: 8, message: "Formato incorrecto" }}
                        errors={errors}
                        placeholder='Ej. 876578487'
                    />
                </div>

                <div className="w-full flex flex-col items-start justify-center gap-2">
                    {/* <label htmlFor='documentType' className="text-lg font-bold">Tipo de Adoptante</label> */}

                    <FormSelect
                        label='Tipo de Adoptante'
                        property="adopterType"
                        options={types}
                        value={types.filter(
                            (values) => values.value == watch("adopterType")
                        )}
                        values={register}
                        watch={watch}
                        setValue={setValue}
                        error={errors}
                        onChange={(target) => {
                            console.log(target.value)
                            setValue("adopterType", target.value)
                        }}
                        required
                        id="adopterType"
                    />

                </div>

                <div className="w-full">
                    <FormOptions
                        label='¿Dispone de Dirección Pública? (metamask address)'
                        id='isAddressPublic'
                        options={[
                            { value: 'isAddressPublic-yes', label: 'Si' },
                            { value: 'isAddressPublic-no', label: 'No' },
                        ]}
                        register={register("isAddressPublic", {
                            required: {
                                value: true,
                                message: "Campo requerido",
                            },
                        })}
                        errors={errors}
                    />
                </div>

                {
                    watch("isAddressPublic") == 'isAddressPublic-yes' && (
                        <div className='w-full'>
                            <FormInput
                                label='Dirección pública (metamask address)'
                                id='addressPublic'
                                type='text'
                                register={register}
                                required={{
                                    value: true,
                                    message: "Dirección pública es requerido",
                                }}
                                minLength={{ value: 5, message: "Formato incorrecto" }}
                                maxLength={{ value: 20, message: "Formato incorrecto" }}
                                errors={errors}
                                placeholder='Ej. 0xc75F3901B4A0E34A280D10018T2ec32b65E9Fb321'
                            />
                        </div>
                    )
                }
            </div>

            {/* <div className="flex justify-center w-full flex-wrap gap-2 max-w-5xl pt-3">
                <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-full bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-lg font-bold"
                >
                    Siguiente Paso
                </button>
            </div> */}
        </>
    )
}
