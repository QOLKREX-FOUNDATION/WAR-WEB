import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export const MessageStatus = () => {
    const router = useRouter();
    const { payment_id, payment_status } = router.query;

    const [paymentData, setPaymentData] = useState({
        id: "",
        status: "",
        status_detail: "",
        payment_type: "",
        merchant_order_id: "",
        preference_id: "",
        site_id: "",
        processing_mode: "",
    });

    const getPayment = async () => {
        try {
            console.log(payment_id);
            if (payment_id) {
                console.log(payment_id);
                // consultar el estado de la solicitud en la base de datos
                // `http://localhost:5000/api/payment/order?id=${ payment_id }`,
                const resp = await fetch(
                    `https://firulaix-api-nodejs.vercel.app/api/payment/order?id=${ payment_id }`,
                    {
                        method: "POST",
                    }
                );
                const data = await resp.json();
                console.log(data);
                setPaymentData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(payment_status)
        if (payment_id) {
            getPayment();
        }
    }, [payment_id]);

    return (
        <>
            {
                payment_status &&
                payment_status[0] === "rejected" && (
                    <div className="flex w-full justify-center bg-red-500">
                        <div className="flex flex-col font-fredoka py-10">
                            <h1 className="text-3xl font-bold">
                                Lo sentimos, tu solicitud no pudo ser procesada
                            </h1>
                            <p className="text-xl font-semibold">Por favor, intenta nuevamente</p>
                            {/* {paymentData.id && (
                                <div className="">
                                    <h2 className="font-bold">Información de pago</h2>
                                    <p>Id de pago: {paymentData.id}</p>
                                    <p>Estado: {paymentData.status}</p>
                                    <p>Detalle: {paymentData.status_detail}</p>
                                    <p>Tipo de pago: {paymentData.payment_type}</p>
                                </div>
                            )} */}
                        </div>
                    </div>
                )
            }
            {
                paymentData.status === "approved" && (
                    <div className="flex w-full justify-center bg-green-500">
                        <div className="flex flex-col font-fredoka py-10">
                            <h1 className="text-3xl font-bold">Gracias por tu solicitud</h1>
                            <p className="text-xl font-semibold">
                                En breve nos pondremos en contacto contigo
                            </p>
                            {paymentData.id && (
                                <div className="">
                                    <h2 className="font-bold">Información de pago</h2>
                                    <p>Id de pago: {paymentData.id}</p>
                                    <p>Estado: {paymentData.status}</p>
                                    <p>Detalle: {paymentData.status_detail}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    )
}
