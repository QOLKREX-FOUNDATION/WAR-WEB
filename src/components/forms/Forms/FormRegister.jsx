import React, { useContext, useState } from 'react'
// import { Input, ReactSelect, Select } from '../../../../atoms/Form'
// import { useCountry } from '../../../../../hooks/useCountry';
import { useForm } from 'react-hook-form';
// import { useDocuments } from '../../../../molecules/Adopter/Search/hooks/useDocuments';
// import { useEffect } from 'react';
// import { usePerson } from '../../../../molecules/Adopter/Search/hooks/usePerson';
// import { useUbigeo } from '../../../../../hooks/useUbigeo';
// import { useSpecie } from '../../../Cpanel/components/PetForm/hooks/useSpecie';
// import { useColours } from '../../../Cpanel/components/PetForm/hooks/useColours';
import { Step1, Step2, Step3, Step4 } from './Steps';
// import { firuApi } from '../../../../../../api';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

// import { ButtonTop } from '../../../../atoms/ButtonTop';
import { FormSelect } from './FormSelect';
// import { useStateContext } from '../../../../../contexts/ContextProvider';
import { useRouter } from 'next/router';
import QRCode from 'react-qr-code';
import { adopterFormRegister } from '../../../utils/initRegister';
import { Web3Context } from '../../../contexts/Web3/Web3Context';
import { useColours, useCountry, useSpecie } from '../../../hook/inputs';
import { firuApi } from '../../../../api';
import { ButtonTop } from '../../molecules/ButtonTop/ButtonTop';

export const FormRegister = ({
    flex = true,
    dataRegister = {},
    getForms
}) => {

    // const {
    //     currentMode,
    // } = useStateContext();

    const currentMode = "Dark";

    const { pathname, query } = useRouter();
    const { correlative, address } = query;

    // const isDark = currentMode === "Dark" ? "dark" : "light";

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
        getValues,
        reset,
    } = useForm({
        defaultValues: adopterFormRegister,
        mode: 'onBlur'
    });

    const [step, setStep] = useState(1);


    // const { entitiesRegifirst} = useEntities();
    // const { persons } = usePerson();
    // const { documents, handleDocuments } = useDocuments();
    // const { types } = useType();
    const { countries } = useCountry();
    const { species, races } = useSpecie(watch("specie"));
    const { colours } = useColours();

    const { web3 } = useContext(Web3Context);

    const handleCreate = (data) => {
        console.log(data)

        const formData = new FormData();
        formData.append("country", data.country)
        formData.append("person", data.person)
        formData.append("adopterType", data.adopterType)
        formData.append("gender", data.gender)
        formData.append("documentType", data.documentType)
        formData.append("documentNumber", data.documentNumber)
        formData.append("email", data.email)
        formData.append("addressPublic", data.addressPublic)
        formData.append("department", data.department)
        formData.append("province", data.province)
        formData.append("district", data.district)
        formData.append("isAddressPublic", data.isAddressPublic)
        formData.append("firstName", data.firstName)
        formData.append("secondName", data.secondName)
        formData.append("firstLastName", data.firstLastName)
        formData.append("secondLastName", data.secondLastName)
        formData.append("birthDate", data.birthDate)
        formData.append("cellphone", data.cellphone)
        formData.append("jurament1", data.jurament1)
        formData.append("jurament2", data.jurament2)
        formData.append("jurament3", data.jurament3)
        formData.append("address", data.address)
        formData.append("microchip", data.microchip)
        formData.append("dateMicrochip", data.dateMicrochip)
        formData.append("firstNamePet", data.firstNamePet)
        formData.append("specie", data.specie)
        formData.append("birthDatePet", data.birthDatePet)
        formData.append("adoptionDate", data.adoptionDate)
        formData.append("fatherMicrochip", data.fatherMicrochip)
        formData.append("motherMicrochip", data.motherMicrochip)
        formData.append("registerEntity", data.registerEntity)
        formData.append("countryPet", data.countryPet)
        formData.append("genderPet", data.genderPet)
        formData.append("race", data.race)
        formData.append("color", data.color)
        formData.append("isSterilized", data.isSterilized)
        // formData.append("isPayment", data.isPayment)
        formData.append("files", data.imagePet[0])

        firuApi.post('/form', formData).catch(console.error)
            .then((response) => {
                console.log(response)
                if (response.ok === false) {
                    Swal.fire({
                        title: 'Error',
                        text: 'Ha ocurrido un error, por favor intente nuevamente.',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    })
                    return;
                }

                Swal.fire({
                    title: '¡Gracias por registrarte!',
                    text: 'Tu solicitud ha sido enviada con éxito, en breve nos pondremos en contacto contigo.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
                reset()
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error, por favor intente nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            })
    }

    const handleUpdate = async (data) => {
        console.log("update", data)

        const formData = new FormData();
        formData.append("country", data.country)
        formData.append("person", data.person)
        formData.append("adopterType", data.adopterType)
        formData.append("gender", data.gender)
        formData.append("documentType", data.documentType)
        formData.append("documentNumber", data.documentNumber)
        formData.append("email", data.email)
        formData.append("addressPublic", data.addressPublic)
        formData.append("department", data.department)
        formData.append("province", data.province)
        formData.append("district", data.district)
        formData.append("isAddressPublic", data.isAddressPublic)
        formData.append("firstName", data.firstName)
        formData.append("secondName", data.secondName)
        formData.append("firstLastName", data.firstLastName)
        formData.append("secondLastName", data.secondLastName)
        formData.append("birthDate", data.birthDate)
        formData.append("cellphone", data.cellphone)
        formData.append("jurament1", data.jurament1)
        formData.append("jurament2", data.jurament2)
        formData.append("jurament3", data.jurament3)
        formData.append("address", data.address)
        formData.append("microchip", data.microchip)
        formData.append("dateMicrochip", data.dateMicrochip)
        formData.append("firstNamePet", data.firstNamePet)
        formData.append("specie", data.specie)
        formData.append("birthDatePet", data.birthDatePet)
        formData.append("adoptionDate", data.adoptionDate)
        formData.append("fatherMicrochip", data.fatherMicrochip)
        formData.append("motherMicrochip", data.motherMicrochip)
        formData.append("registerEntity", data.registerEntity)
        formData.append("countryPet", data.countryPet)
        formData.append("genderPet", data.genderPet)
        formData.append("race", data.race)
        formData.append("color", data.color)
        formData.append("isSterilized", data.isSterilized)
        formData.append("isPayment", data.isPayment)
        formData.append("files", data.imagePet[0])

        firuApi.put(`/form/${ dataRegister.id }`, formData, {
            headers: {
                'x-token': web3.authToken
            },
        })
            .then((response) => {
                console.log(response)
                Swal.fire({
                    title: '¡Gracias por registrarte Update!',
                    text: 'Tu solicitud ha sido enviada con éxito, en breve nos pondremos en contacto contigo.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
                getForms()
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error, por favor intente nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            })
    }

    const handleUpdateWithCorrelative = (data) => {
        console.log("update", data)

        const formData = new FormData();
        formData.append("country", data.country)
        formData.append("person", data.person)
        formData.append("adopterType", data.adopterType)
        formData.append("gender", data.gender)
        formData.append("documentType", data.documentType)
        formData.append("documentNumber", data.documentNumber)
        formData.append("email", data.email)
        formData.append("addressPublic", data.addressPublic)
        formData.append("department", data.department)
        formData.append("province", data.province)
        formData.append("district", data.district)
        formData.append("isAddressPublic", data.isAddressPublic)
        formData.append("firstName", data.firstName)
        formData.append("secondName", data.secondName)
        formData.append("firstLastName", data.firstLastName)
        formData.append("secondLastName", data.secondLastName)
        formData.append("birthDate", data.birthDate)
        formData.append("cellphone", data.cellphone)
        formData.append("jurament1", data.jurament1)
        formData.append("jurament2", data.jurament2)
        formData.append("jurament3", data.jurament3)
        formData.append("address", data.address)
        formData.append("microchip", data.microchip)
        formData.append("dateMicrochip", data.dateMicrochip)
        formData.append("firstNamePet", data.firstNamePet)
        formData.append("specie", data.specie)
        formData.append("birthDatePet", data.birthDatePet)
        formData.append("adoptionDate", data.adoptionDate)
        formData.append("fatherMicrochip", data.fatherMicrochip)
        formData.append("motherMicrochip", data.motherMicrochip)
        formData.append("registerEntity", data.registerEntity)
        formData.append("countryPet", data.countryPet)
        formData.append("genderPet", data.genderPet)
        formData.append("race", data.race)
        formData.append("color", data.color)
        formData.append("isSterilized", data.isSterilized)
        formData.append("isPayment", data.isPayment)
        formData.append("files", data.imagePet[0])

        firuApi.put(`/form/correlative/${ dataRegister.id }`, formData, {
            headers: {
                'x-token': correlative
            },
        })
            .then((response) => {
                console.log(response)
                Swal.fire({
                    title: '¡Gracias por registrarte!',
                    text: 'Tu solicitud ha sido enviada con éxito, en breve nos pondremos en contacto contigo.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error, por favor intente nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            })
    }

    const onSubmit = (data) => {
        const { document, ...rest } = data;
        // console.log(rest)

        if (dataRegister.id && pathname.split("/")[2] !== "solicitud-de-registro") {
            handleUpdate(rest)
            return;
        }
        if (dataRegister.id && pathname.split("/")[2] === "solicitud-de-registro") {
            handleUpdateWithCorrelative(rest)
            return;
        }
        handleCreate(rest)

    }

    useEffect(() => {
        if (dataRegister.id || address) {
            console.log("cargar datos")
            setValue("country", dataRegister.adopter.country)
            setValue("person", dataRegister.adopter.person)
            setValue("documentType", dataRegister.adopter.documentType)
            setValue("documentNumber", dataRegister.adopter.documentNumber)
            setValue("adopterType", dataRegister.adopter.adopterType)
            setValue("isAddressPublic", dataRegister.adopter.isAddressPublic)
            setValue("addressPublic", dataRegister.adopter.addressPublic)
            // setValue("dni",dataRegister.adopter.dni)
            setValue("firstName", dataRegister.adopter.firstName)
            setValue("secondName", dataRegister.adopter.secondName)
            setValue("firstLastName", dataRegister.adopter.firstLastName)
            setValue("secondLastName", dataRegister.adopter.secondLastName)
            setValue("birthDate", dataRegister.adopter.birthDate)
            setValue("gender", dataRegister.adopter.gender)
            setValue("cellphone", dataRegister.adopter.cellphone)
            setValue("email", dataRegister.adopter.email)
            setValue("department", dataRegister.adopter.department)
            setValue("province", dataRegister.adopter.province)
            setValue("district", dataRegister.adopter.district)
            setValue("address", dataRegister.adopter.address)
            setValue("registerEntity", dataRegister.adopter.registerEntity)
            setValue("jurament1", dataRegister.adopter.jurament1)
            setValue("jurament2", dataRegister.adopter.jurament2)
            setValue("jurament3", dataRegister.adopter.jurament3)
            setValue("jurament3", dataRegister.adopter.jurament3)
            setValue("microchip", dataRegister.pet.microchip)
            setValue("dateMicrochip", dataRegister.pet.dateMicrochip)
            setValue("firstNamePet", dataRegister.pet.firstNamePet)
            setValue("countryPet", dataRegister.pet.countryPet)
            setValue("birthDatePet", dataRegister.pet.birthDatePet)
            setValue("adoptionDate", dataRegister.pet.adoptionDate)
            setValue("adoptionDate", dataRegister.pet.adoptionDate)
            setValue("genderPet", dataRegister.pet.genderPet)
            setValue("specie", dataRegister.pet.specie)
            setValue("race", dataRegister.pet.race)
            setValue("color", dataRegister.pet.color)
            setValue("isSterilized", dataRegister.pet.isSterilized)
            setValue("isPayment", dataRegister.isPayment)
        }
    }, [dataRegister])

    // console.log("data", dataRegister)
    // console.log("especies", watch("specie"))
    // console.log("especies", species, races)

    return (
        <>
            {
                // mensaje por si se registro correctamente
                dataRegister?.status === "completed" && pathname.split("/")[2] === "solicitud-de-registro" ? (
                    <div className="w-full flex flex-col items-center justify-center gap-2 py-5 px-14 min-h-[80vh]">
                        <div className="flex flex-col justify-center items-center border border-white py-10 px-3">
                            <h1 className="text-3xl lg:text-4xl font-semibold leading-10 text-gray-800 text-center md:w-9/12 lg:w-7/12 dark:text-white">Se registro su respuesta!</h1>
                            <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 dark:text-white">Gracias por rellenar el Formulario, pronto nos pondremos en contacto con usted.</p>

                            <div className=" w-40 h-40 mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full stroke-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div className="mt-5 w-full flex justify-center">
                                <a
                                    href="https://worldanimalregistry.org/es"
                                    className="dark:text-white dark:border-white w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:text-white dark:hover:bg-gray-700">Seguir Navegando en el WAR</a>
                            </div>
                        </div>
                    </div>
                ) :
                    <>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={`w-full flex flex-col items-center justify-center gap-2 py-5 px-14 ${ currentMode === "Dark" ? "bg-slate-700" : "bg-[#eeeeee]" }`}>
                            <h1 className='text-2xl font-bold'>SOLICITUD DE REGISTRO DE MASCOTA</h1>
                            <p className='text-xl font-bold'>Creado en :
                                <span className='text-lg font-normal ml-2'>
                                    {
                                        dataRegister.createdAt ? new Date(dataRegister.createdAt).toLocaleDateString() : new Date().toLocaleDateString()
                                    }
                                </span>
                            </p>
                            {
                                dataRegister.correlativeNumber && (
                                    <span className='text-lg font-semibold ml-2'>
                                        {
                                            dataRegister.correlativeNumber.toString().padStart(8, '0')
                                        }
                                    </span>
                                )
                            }

                            <div className=" max-w-5xl w-full flex flex-col">

                                {/* <div className="flex justify-center py-3">
                    <div className="flex">
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className={`rounded-full hover:bg-green-600 text-white px-3 py-1 text-lg font-bold ${ step === 1 ? 'bg-green-500' : 'bg-green-700' }}`}
                        >
                            1
                        </button>

                        <div className='w-8 h-2 bg-green-400 mt-3'></div>

                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="rounded-full bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-lg font-bold"
                        >
                            2
                        </button>

                        <div className='w-8 h-2 bg-green-400 mt-3'></div>

                        <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="rounded-full bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-lg font-bold"
                        >
                            3
                        </button>

                        <div className='w-8 h-2 bg-green-400 mt-3'></div>

                        <button
                            type="button"
                            onClick={() => setStep(4)}
                            className="rounded-full bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-lg font-bold"
                        >
                            4
                        </button>

                    </div>
                </div> */}

                                <div className="flex flex-row justify-center flex-wrap ">
                                    <div className={`max-w-${ flex ? 'max-w-none' : 'md pt-3' } pr-2`}>
                                        <Step1
                                            register={register}
                                            errors={errors}
                                            setValue={setValue}
                                            watch={watch}
                                            reset={reset}
                                            countries={countries}
                                            step={step}
                                            setStep={setStep}
                                        />
                                    </div>

                                    <div className={`${ flex ? 'max-w-none' : 'max-w-md' } pl-2`}>
                                        <Step2
                                            register={register}
                                            errors={errors}
                                            setValue={setValue}
                                            watch={watch}
                                            reset={reset}
                                            step={step}
                                            setStep={setStep}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-center  flex-wrap ">
                                    <div className={`${ flex ? 'max-w-none' : 'max-w-md' } pr-2`}>
                                        <Step3
                                            register={register}
                                            errors={errors}
                                            setValue={setValue}
                                            watch={watch}
                                            reset={reset}
                                            step={step}
                                            setStep={setStep}
                                            dataRegister={dataRegister}
                                        />
                                    </div>
                                    <div className={`${ flex ? 'max-w-none' : 'max-w-md' } pl-2`}>
                                        <Step4
                                            register={register}
                                            errors={errors}
                                            setValue={setValue}
                                            watch={watch}
                                            reset={reset}
                                            countries={countries}
                                            species={species}
                                            races={races}
                                            colours={colours}
                                            step={step}
                                            setStep={setStep}
                                            dataRegister={dataRegister}
                                        />
                                    </div>
                                </div>
                                {
                                    dataRegister.id && pathname.split("/")[2] !== "solicitud-de-registro" &&
                                    <div className="flex justify-center ">
                                        <div className="flex w-full gap-2 max-w-md"></div>
                                        <div className="flex w-full gap-2 max-w-md mt-2 mb-2 pl-3">
                                            <FormSelect
                                                label='¿El Adoptante pago su cuota de inscripción?'
                                                property="isPayment"
                                                options={[
                                                    {
                                                        value: true,
                                                        label: 'SI'
                                                    },
                                                    {
                                                        value: false,
                                                        label: 'NO'
                                                    }
                                                ]}
                                                values={register}
                                                watch={watch}
                                                setValue={setValue}
                                                error={errors}
                                                onChange={(target) => {
                                                    console.log(target.value)
                                                    setValue("isPayment", target.value)
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>
                                }



                                <div className="w-full flex pt-4 items-center gap-2">
                                    {
                                        dataRegister.id && pathname.split("/")[2] !== "solicitud-de-registro" ?
                                            <button
                                                className="w-full bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md text-lg font-bold"
                                            >
                                                Actualizar
                                            </button>
                                            :
                                            <button
                                                className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-lg font-bold"
                                            >
                                                Enviar
                                            </button>
                                    }
                                </div>
                            </div>
                        </form>

                    </>
            }
            <div className="w-full flex flex-col items-center justify-center gap-2 lg:px-0 px-10 py-5">
                <p className='text-2xl font-bold'>
                    Puedes compartir este formulario con el siguiente código QR:
                </p>
                <div className="p-5 bg-white">
                    <QRCode
                        value={`https://worldanimalregistry.org/formulario/solicitud-de-registro`}
                        size={250}
                    />
                </div>
                {/* button share */}
                <button
                    className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-bold'
                    onClick={() => {
                        const dataToShare = {
                            title: 'Formulario de registro de mascota',
                            text: 'Formulario de registro de mascota',
                            url: 'https://worldanimalregistry.org/formulario/solicitud-de-registro'
                        };
                        if (navigator.share) {
                            navigator.share(dataToShare)
                                .then(() => {
                                    console.log('Enlace compartido con éxito');
                                })
                                .catch((error) => {
                                    console.error('Error al compartir el enlace', error);
                                });
                        } else {
                            navigator.clipboard.writeText(`https://worldanimalregistry.org/formulario/solicitud-de-registro`)
                            Swal.fire({
                                title: 'Copiado!',
                                text: 'El link se ha copiado correctamente.',
                                icon: 'success',
                                confirmButtonText: 'Aceptar'
                            })
                        }
                    }}
                >
                    Compartir
                </button>
            </div>
            <ButtonTop />
        </>
    )
}
