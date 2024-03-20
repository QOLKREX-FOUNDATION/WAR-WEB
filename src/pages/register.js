import { Footer } from "../components";
import { CardRegister } from "../components/organisms/CardRegister/CardRegister";
import { ContactHead } from "../components/organisms/Header/components/ContactHead/ContactHead";
import { HeaderRegister } from "../components/organisms/HeaderRegister/HeaderRegister";

export default function Register() {
  return (
    <>
      <HeaderRegister />
      <CardRegister />
      <Footer />
    </>
  );
}
