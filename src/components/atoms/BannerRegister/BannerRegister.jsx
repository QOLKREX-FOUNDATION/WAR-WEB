import Image from "next/image";
import { useTranslation } from "react-i18next";

export const BannerRegister = ({ classes }) => {
	const { t } = useTranslation();
	return (
		<div>
			<div className={classes?.modal__contentIcon}>
				<div>
					<Image
						src="/img/war.png"
						layout="responsive"
						width={150}
						height={150}
						href="image"
						alt="Banner"
					/>
				</div>
			</div>

			<div>
				<h1
					className={classes?.modal__contentTitle}
				>
					{t("Registration Request")}
				</h1>
				<div className={classes?.modal__contentPrice}>
					{/* <h3>A solo</h3>
					<h1>
						<span>s/</span>60
					</h1> */}
				</div>
				<div className={classes?.modal__contentInclude}>
					<h4>Incluye:</h4>
					<ul>
						<li>Microchip de identificación</li>
						<li>Registro mundial en el World Animal Registry</li>
						<li>Carnet de identificación</li>
						<li>Consulta veterinaria</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
