import React from 'react'

export const WhatsAppButton = () => {
    return (
        <button
            className='fixed bottom-4 right-4 z-50'
        >
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/16504027572?text=Hola%20me%20gustaría%20saber%20más%20sobre%20el%20servicio%20de%20W.A.R"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
                    alt="whatsapp"
                    className='w-16 h-16'
                />
            </a>
        </button>
    )
}
