import { VicuIdView } from "../components/vicuid";
import { MainLayout } from "../layouts/MainLayout";

export default function Donation() {
  return (
    <MainLayout
      title="Vicuña ID"
      description="La campaña Ponle un nombre a tu vicuña es una iniciativa que tiene como objetivo promover el cuidado y conservación de la vicuña."
    >
      <VicuIdView />
    </MainLayout>
  );
}
