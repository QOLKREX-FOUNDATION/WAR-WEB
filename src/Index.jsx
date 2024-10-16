import Head from "next/head";
import Script from "next/script";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Footer, Header, WhatsappWidget } from "./components";
import Preloader from "./components/atoms/Preloader/Preloader";
import { PreloaderContext } from "./contexts/Preloader/PreloaderContext";
import "react-toastify/dist/ReactToastify.css";

export const Index = ({ children }) => {
	const { preloader } = useContext(PreloaderContext);

	return (
		<>
			{children}

			<ToastContainer />

			{preloader && <Preloader />}
		</>
	);
};
