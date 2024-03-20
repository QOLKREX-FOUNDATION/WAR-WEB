import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { FormRegister } from './FormRegister';
import { adopterFormRegister } from '../../../utils/initRegister';
import { firuApi } from '../../../../api';

export const FormRegisterContent = () => {
    const { pathname, query } = useRouter();
    const [formData, setFormData] = useState({})

    const { correlative, address } = query;

    console.log({ pathname, query })
    console.log({ pathname: pathname.split("/")[2] })

    const handleGetData = async () => {
        console.log("query")

        firuApi.get(`/form/correlative/${ correlative }`)
            .then((res) => {
                console.log(res.data)
                setFormData(res.data.form[0])
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const handleGetAddress = async () => {
        console.log("query")

        firuApi.get(`/form/address/${ address }`)
            .then((res) => {
                console.log(res.data)
                // setFormData(res.data.form[0])

                if (res.data.ok === false) return;
                setFormData({
                    adopter: {
                        country: adopterFormRegister.country,
                        person: adopterFormRegister.person,
                        documentType: adopterFormRegister.documentType,
                        documentNumber: adopterFormRegister.documentNumber,
                        adopterType: adopterFormRegister.adopterType,
                        isAddressPublic: adopterFormRegister.isAddressPublic,
                        addressPublic: adopterFormRegister.addressPublic,
                        firstName: adopterFormRegister.firstName,
                        secondName: adopterFormRegister.secondName,
                        firstLastName: adopterFormRegister.firstLastName,
                        secondLastName: adopterFormRegister.secondLastName,
                        birthDate: adopterFormRegister.birthDate,
                        gender: adopterFormRegister.gender,
                        cellphone: adopterFormRegister.cellphone,
                        email: adopterFormRegister.email,
                        department: res.data.form.department,
                        province: res.data.form.province,
                        district: res.data.form.district,
                        address: adopterFormRegister.address,
                        registerEntity: res.data.form.registerEntity,
                        jurament1: adopterFormRegister.jurament1,
                        jurament2: adopterFormRegister.jurament2,
                        jurament3: adopterFormRegister.jurament3,
                        jurament3: adopterFormRegister.jurament3,
                    },
                    pet: {
                        microchip: adopterFormRegister.microchip,
                        dateMicrochip: adopterFormRegister.dateMicrochip,
                        firstNamePet: adopterFormRegister.firstNamePet,
                        countryPet: adopterFormRegister.countryPet,
                        birthDatePet: adopterFormRegister.birthDatePet,
                        adoptionDate: adopterFormRegister.adoptionDate,
                        adoptionDate: adopterFormRegister.adoptionDate,
                        genderPet: adopterFormRegister.genderPet,
                        specie: adopterFormRegister.specie,
                        race: adopterFormRegister.race,
                        color: adopterFormRegister.color,
                        isSterilized: adopterFormRegister.isSterilized,
                    },
                    isPayment: adopterFormRegister.isPayment,
                    entity: {
                        id: res.data.form.registerEntity,
                        name: res.data.form.name,
                        lastName: res.data.form.lastName,
                        local: res.data.form.local,
                    }
                }
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (pathname.split("/")[2] !== "solicitud-de-registro") return;
        if (query.correlative !== "" && query.correlative !== undefined) handleGetData();
        if (query?.address !== "" && query?.address !== undefined) handleGetAddress();

    }, [query])

    return (
        <>
            <FormRegister
                dataRegister={formData}
            />
        </>
    )
}
