import { useCallback, useState } from "react";
import {
	SpeciesVaccines,
} from "../../../public/Json/data/vaccines";

export const useRaceVaccines = () => {
	const [listVaccines, setListVaccines] = useState([]);

	const handleListVaccines = useCallback((specie) => {
		setListVaccines(SpeciesVaccines[specie] ?? []);
	}, []);

	return { listVaccines, handleListVaccines, setListVaccines };
};
