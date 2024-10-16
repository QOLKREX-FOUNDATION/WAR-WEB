import { useContext, useEffect } from "react";
import classes from "./consult.module.scss";
import modalClasses from "../../containers/modals/DefaultModal/default-modal.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import { useLoader } from "../../../hook/useLoader";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import { useAdopterPet } from "../../../hook/useAdopterPet";
import { Default } from "../../molecules/consult/Default";
import { NotFound } from "../../molecules/consult/NotFound";
import {
	ContentMongoPet,
	ContentWeb3Pet,
} from "../../molecules/consult/DataContent/DataContent";
import { API } from "../../../config";
import { ConnectButton } from "../../atoms/ConnectButton";
import { DefaultModal } from "../../containers/modals/DefaultModal/DefaultModal";
import { Loader } from "../../atoms/Loader/Loader";
import { useTranslation } from "react-i18next";

export const Consult = () => {
	const router = useRouter();
	const { web3 } = useContext(Web3Context);
	const [dataPet, setdataPet] = useState(false);
	const inputValue = useRef();
	const { pets, getSearch, openDefaultModal, setOpenDefaultModal, status } =
		useAdopterPet();
	const [onLoad, setOnLoad] = useLoader();
	const [showDataPetWeb3, setShowDataPetWeb3] = useState(false);
	const [petWeb3Index, setPetWeb3Index] = useState(0);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		if (web3.account) {
			// getSearch(web3.wallet, "0x3dD85B618Cf7a86e06D2a390e85E8fb183fd56f5");
			// getSearch(web3.wallet, "0x4415B2Bfc4445b33C17c1A0b0D10cC18e9F928D0");
			getSearch(web3.wallet, web3.account);
		}
	}, [web3.account]);

	const getInfo = async (value) => {
		if (value) {
			try {
				const rsp = await fetch(`${ API.war }renian/search?id=${ value }`);
				const data = await rsp.json();

				// console.log(data);
				setdataPet(data);
				setOnLoad(false);
				setShowDataPetWeb3(false);
			} catch (err) {
				console.error(err);
				setdataPet(false);
				setOnLoad(false);
				setShowDataPetWeb3(false);
			}
		}
	};

	const toSearch = () => {
		const value = inputValue.current.value;
		if (value != "") {
			getInfo(value);
			setOnLoad(true);
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			toSearch();
		}
	};

	return (
		<>
			<section className={classes.consult}>
				<div className={classes.consult__container}>
					<ConsultCard>
						<div className={classes.consult__header}>
							<div onClick={() => router.push("/")}>
								<lord-icon
									src="https://cdn.lordicon.com/zfxxckbp.json"
									trigger="loop"
									colors="primary:#e0dfdf,secondary:#f5f5f5"
								></lord-icon>
								<p>{t("Go to home")}</p>
							</div>

						</div>

						<div className={classes.consult__search}>
							<span>{t("Enter the microchip code")}:</span>

							<div className={classes.consult__searchCamp}>
								<input
									type="number"
									ref={inputValue}
									onKeyDown={handleKeyDown}
									placeholder="Cod. Microchip"
									autoComplete="true"
								/>
								<div onClick={toSearch}>
									<lord-icon
										src="https://cdn.lordicon.com/zniqnylq.json"
										trigger="loop"
										colors="primary:#bf002a,secondary:#bf002a"
									></lord-icon>
								</div>
							</div>

							<div className={classes.consult__searchButton}>
								<ConnectButton
									pets={pets}
									openDefaultModal={openDefaultModal}
									setOpenDefaultModal={setOpenDefaultModal}
								/>
							</div>
						</div>

						{!dataPet && !showDataPetWeb3 && !onLoad && <Default />}

						{onLoad && <Loader />}

						{dataPet && dataPet.ok === false && !onLoad && <NotFound />}

						{dataPet && dataPet.ok != false && !onLoad && !showDataPetWeb3 && (
							<ContentMongoPet
								dataPet={dataPet} //https://consultwar.renian.foundation/api/
							/>
						)}

						{pets && !onLoad && showDataPetWeb3 && (
							<ContentWeb3Pet
								pet={pets[petWeb3Index]}
								dataPet={dataPet}
								getInfo={getInfo}
								status={status[petWeb3Index]}
							/>
						)}
					</ConsultCard>
				</div>
			</section>

			{openDefaultModal && web3.account && pets && (
				<DefaultModal setOpenModal={setOpenDefaultModal}>
					{pets.length > 0 && (
						<>
							<h2>
								Usted tiene {pets.length <= 9 ? "0" : ""}
								{pets.length} mascota{pets.length > 1 ? "s" : " "}
								registrada{pets.length > 1 ? "s" : ""}.
							</h2>

							{pets?.map((pet, index) => (
								<div className={modalClasses.modal__contentBoxlist} key={index}>
									<div
										onClick={() => {
											setShowDataPetWeb3(true);
											setPetWeb3Index(index);
										}}
									>
										<lord-icon
											src="https://cdn.lordicon.com/cqqydgge.json"
											trigger="none"
											colors="primary:#000000,secondary:#dd0000"
											style={{
												width: "55px",
												height: "55px",
												opacity: ".7",
											}}
										></lord-icon>
										<p>
											{pet.chip} - {pet.name}{" "}{t("View Pet")}
										</p>
									</div>
								</div>
							))}
						</>
					)}
					{pets.length == 0 && <h1>{t("You don't have any registered pets")}</h1>}
				</DefaultModal>
			)}
		</>
	);
};

const ConsultCard = ({ children }) => {
	return <div className={classes.consult__card}>{children}</div>;
};
