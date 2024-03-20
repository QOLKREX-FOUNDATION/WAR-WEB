import { VicuIdView } from "../../components/vicuid/VicuIdView/VicuIdView";
import { MainLayoutNew } from "../../layouts/MainLayoutNew";

export default function VicuId() {
  return (
    <MainLayoutNew
      title="Vicuña ID"
      description="La campaña Ponle un nombre a tu vicuña es una iniciativa que tiene como objetivo promover el cuidado y conservación de la vicuña."
    >
      <VicuIdView />
    </MainLayoutNew>
  );
}
