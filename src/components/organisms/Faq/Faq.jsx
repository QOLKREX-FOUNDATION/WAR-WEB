import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Bounce } from 'react-reveal'
import clases from './faq.module.scss'

export const Faq = () => {
    const { t } = useTranslation();
    const cardRef = useRef();
    const questions = [
        {
            id: 1,
            question: 'What is War?',
            answer: `We are an international organization whose main objective is the national registry of animals (companion animals, in captivity, wild and cattle). In charge of developing standards related to animal identification and traceability, it helps Member Countries and Territories to establish animal identification and traceability systems in order to increase the effectiveness of disease prevention and control policies and activities.`,
            image: '/img/faq/wolf.png'
        },
        {
            id: 2,
            question: 'Why is animal registration important?',
            answer: `Animal identification via Web 3 is used in a variety of contexts, including wildlife conservation, zoonotic disease monitoring, and scientific research. It can also be useful for livestock management and monitoring the health and welfare of domestic animals.`,
            image: '/img/faq/rhyno.png'
        },
        {
            id: 3,
            question: 'Who performs the identification?',
            answer: `Pet registration entities are organizations in charge of carrying out the registration and identification of companion animals through the use of electronic chips. These entities are usually authorized by the competent authorities to carry out this type of activity and can be public or private.The objective of pet registration entities is to facilitate the identification and registration of companion animals, in order to improve the protection and well-being of these animals and help avoid problems such as abandonment or loss of pets.`,
            image: '/img/faq/seal.png'
        },
        {
            id: 4,
            question: 'How is the animal registration with a chip carried out?',
            answer: 'Animal registration with chips is a process that consists of inserting an electronic chip into an animal, in order to uniquely identify it and record its data in a database.',
            image: '/img/faq/kangaroo.png'
        },
        {
            id: 5,
            question: 'Registration Documents',
            answer: 'Somos una organización internacional que tiene como principal objetivo el registro nacional de los animales (animales de compan 7',
            image: '/img/faq/penguin.png'
        },
    ]
    const [question, setQuestion] = useState(questions[0]);

    const handleQuestion = (id) => {
        const question = questions.find((question) => question.id === id);
        setQuestion(question);
        if (!cardRef.current) return;
        cardRef.current.classList.add(clases.faq__containerAnimate);
        setTimeout(() => {
            cardRef.current.classList.remove(clases.faq__containerAnimate);
        }
            , 1000);

    }

    return (
        <div
            className={clases.faq}
            id="faq"
        >
            <div className={clases.frametop}></div>
            <div
                className={clases.faq__container}
                ref={cardRef}
            >
                <Bounce
                    left
                >
                    <div
                        className={clases.faq__containerAnswer}
                    >
                        {question.id !== 5 && <h1>{t(question.question)}</h1>}

                        {
                            question &&
                            (
                                question.id !== 5 ?
                                    question.id !== 2 ?
                                        question.id !== 3 ?
                                            question.id !== 4 ?
                                                <p>{t(question.answer)}</p> :
                                                <div>
                                                    <p>
                                                        {t("It is done by using an RFID (Radio Frequency Identification) chip that is implanted in the animal. The chip is a small data storage device that contains a unique number and is then stored along with your animal information such as name, date of birth, breed and pedigree.")}
                                                    </p>
                                                    <br />
                                                    <p>
                                                        {t("To implant the chip, it is injected under the skin of the animal through a needle, generally in the most common place is the neck, it is a quick process and it is generally not painful for the animal.")}
                                                    </p>
                                                    <br />
                                                    <p>
                                                        {t("Once the chip is implanted, the data can be read using an RFID reader. The RFID reader emits a radio frequency signal that activates the chip, allowing the data stored on it to be read.")}
                                                    </p>
                                                </div> :
                                            <p>{t("Our registration entities are a non-governmental organization, a state entity, municipality, foundation or any company trained or dedicated to the civil registry of animals can be part of our organization.")}</p>
                                        :
                                        <div>
                                            <h3>
                                                {t("Identification")}:
                                            </h3>
                                            <p>
                                                {t("Provides a way to identify individual animals, which is essential for health, management and production monitoring")}.
                                            </p>
                                            <h3>
                                                {t("Health tracking")}:
                                            </h3>
                                            <p>
                                                {t("We can keep a record of the diseases, vaccinations and treatments of each animal, which helps prevent and control diseases.")}
                                            </p>
                                            <h3>
                                                {t("Production improvement")}:
                                            </h3>
                                            <p>
                                                {t("We will improve the recording of milk, meat and egg production, which helps improve the efficiency and performance of the farm.")}
                                            </p>
                                            <h3>
                                                {t("Improvement of genetics")}:
                                            </h3>
                                            <p>
                                                {t("Our research on animal genetics will help us to improve the quality and productivity of populations.")}
                                            </p>
                                            <h3>
                                                {t("Monitoring of regulations")}:
                                            </h3>
                                            <p>
                                                {t("It will help us comply with health and food safety regulations, as well as ensure animal health and food safety for consumers.")}
                                            </p>
                                        </div>
                                    :
                                    <Bounce left>
                                        <ul>
                                            <li>
                                                <p>1. {t("Adoption card")}</p>
                                                <img src="/img/faq/docs/doc_paso_1.png" alt="pas_1"
                                                    width={100}
                                                    height={200}
                                                />
                                            </li>
                                            <li>
                                                <p>2. {t("Adoption certificate")}</p>
                                                <img src="/img/faq/docs/doc_paso_2.png" alt="pas_1"
                                                    width={100}
                                                    height={200}
                                                />
                                            </li>
                                            <li>
                                                <p>3. {t("Virtual Card (QR Scanner)")}</p>
                                                <img src="/img/faq/docs/doc_paso_3.png" alt="pas_1"
                                                    width={100}
                                                    height={200}
                                                />
                                            </li>
                                        </ul>
                                    </Bounce>
                            )
                        }

                    </div>
                </Bounce>
                <Bounce
                    right
                >
                    <div
                        className={clases.faq__containerQuestion}
                    >
                        <Bounce right>
                            <img
                                src={question.image}
                                width={70}
                                height={70}
                                alt="image"
                            />
                        </Bounce>
                        <h1>{t("Frequent questions")}</h1>
                        <div>
                            <div></div>
                            <ul>
                                <li onClick={() => handleQuestion(1)}>{t("What is War?")}</li>
                                <li onClick={() => handleQuestion(2)}>{t("Why is animal registration important?")}</li>
                                <li onClick={() => handleQuestion(3)}>{t("Who performs the identification?")}</li>
                                <li onClick={() => handleQuestion(4)}>{t("How is the animal registration with a chip carried out?")}</li>
                                <li onClick={() => handleQuestion(5)}>{t("Registration Documents")}</li>
                            </ul>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    )
}