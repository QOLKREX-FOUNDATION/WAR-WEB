import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Banner, Footer, HomeContainer } from "../components";
import { DrawerContainer } from "../components/containers/DrawerContainer";
import { Consult } from "../components/organisms/Consult/Consult";
import { ContactHead } from "../components/organisms/Header/components/ContactHead/ContactHead";
import { SlideProvider } from "../context";
import { MainLayoutNew } from "../layouts/MainLayoutNew";
import { WarProvider } from "../context/WarContext";

const queryClient = new QueryClient();

export default function ConsultMain() {
	return (
		<WarProvider>
			<QueryClientProvider client={queryClient}>
				<MainLayoutNew>
					<DrawerContainer>
						<Consult />
					</DrawerContainer>
				</MainLayoutNew>
			</QueryClientProvider>
		</WarProvider>
	);
}
