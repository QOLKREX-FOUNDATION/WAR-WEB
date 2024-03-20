import Image from "next/image";
import classes from "./section-cards.module.scss";
import useHover from "@react-hook/hover";
import Bounce from "react-reveal/Bounce";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { DefaultModal, MainContainer } from "../../";
import { useModal } from "../../../hook/useModal";
import { useTranslation } from "react-i18next";
import { RegistryModal } from "../../containers/modals/RegistryModal/RegistryModal";
import { getAmountOutMin } from "../../../utils";
import { useContext } from "react";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import { usePrice } from "../../../hook/usePrice";

export const SectionCards = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const { web3 } = useContext(Web3Context);
	const { price } = usePrice();
	// const [price, setPrice] = useState(0);

	const { openModal: openRegistryModal, setOpenModal: setOpenRegistryModal } =
		useModal();

	// const handleAmount = async () => {
	// 	try {
	// 		const { value } = await getAmountOutMin(web3);
	// 		// console.log(value)
	// 		setPrice(value);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}

	// }

	// useEffect(() => {
	// 	handleAmount();
	// }, [])


	return (
		<>
			{openRegistryModal && (
				<RegistryModal setOpenRegistryModal={setOpenRegistryModal} />
			)}
			<section className={classes.cards}>
				<MainContainer>
					<div className={classes.cards__container}>
						<div>
							<Bounce left>
								<a href="/consulta" target="_blank" rel="noreferrer noopener">
									<div
										className={`${ classes.cards__box } ${ classes.cards__boxOne }`}
									>
										<div className={classes.cards__boxBg}>
											<Image
												src="/img/frames/frame_01.png"
												layout="fill"
												href="image"
												priority
											/>
										</div>
										<h5>{t("consult")}</h5>
										<h1>{t("Consult your pet")}</h1>
									</div>
								</a>
							</Bounce>
						</div>

						<div>
							<Bounce left>
								<a
									href="https://registro.worldanimalregistry.org/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<div
										className={`${ classes.cards__box } ${ classes.cards__boxTwo }`}
									>
										<div className={classes.cards__boxBg}>
											<Image
												src="/img/frames/frame_02.png"
												layout="fill"
												href="image"
												priority
											/>
										</div>
										<h5>{t("Register")}</h5>
										<h1>{t("World Pet Registry")}</h1>
									</div>
								</a>
							</Bounce>
						</div>

						<div>
							<Bounce right>
								<div
									className={`${ classes.cards__box } ${ classes.cards__boxThree }`}
									onClick={() => setOpenRegistryModal(true)}
								>
									<div className={classes.cards__boxBg}>
										<Image
											src="/img/frames/frame_03.png"
											layout="fill"
											href="image"
											priority
										/>
									</div>
									<h5>{t("here")}</h5>
									<h1>{t("Send your request")}</h1>
								</div>
							</Bounce>
						</div>

						<div>
							<Bounce right>
								<a
									href="https://dexscreener.com/celo/0x2dd5e18a4ead1bcb1636eaadc720942f753cc463"
									target="_black"
									rel="noreferrer noopener"
								>
									<div
										className={`${ classes.cards__box } ${ classes.cards__boxFour }`}
									>
										<div className={classes.cards__boxBg}>
											<Image
												src="/img/frames/frame_04.png"
												layout="fill"
												href="image"
												priority
											/>
										</div>
										<h5>{t("Actual price")}</h5>
										<h1>FIRU / CUSD</h1>
										<p className={classes.cards__boxPrice}>{price && price}</p>
									</div>
								</a>
							</Bounce>
						</div>
					</div>
				</MainContainer>
			</section>
		</>
	);
};
