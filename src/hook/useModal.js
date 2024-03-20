import { useState } from "react";

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openRegistryModal, setOpenRegistryModal] = useState(false);
  return {
    openModal,
    setOpenModal,
    openRegistryModal,
    setOpenRegistryModal
  };
};
