import { MainLayoutNew } from "../../layouts/MainLayoutNew";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CompaignsView } from "../../components/compaigns";
export default function Donation() {
  return (
    <MainLayoutNew>
      <CompaignsView />
    </MainLayoutNew>
  );
}
