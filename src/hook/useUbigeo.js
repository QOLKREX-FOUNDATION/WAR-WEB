import { useState } from "react";
import departmentsJson from "../../public/Json/data/selects/ubigeo/PE/departments.json";
import provincesJson from "../../public/Json/data/selects/ubigeo/PE/provinces.json";
import districtsJson from "../../public/Json/data/selects/ubigeo/PE/districts.json";

export const useUbigeo = () => {
  const [departments, setDepartments] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  const handleDepartaments = () => {
    const temp = [];
    console.log("departmentsJson", departmentsJson);
    departmentsJson.map((d) => temp.push({ label: d.name, value: d.name }));
    setDepartments(temp);
  };

  const handleProvinces = (department) => {
    setProvinces([]);
    const departmentT = departmentsJson.filter(
      (values) =>
        values.name?.toUpperCase().trim() === department?.toUpperCase().trim()
    );

    console.log("provincesJson", provincesJson);
    const temp = [];
    if (departmentT[0]?.id !== undefined) {
      for (let index = 0; index < provincesJson.length; index++) {
        provincesJson[index].department_id == departmentT[0].id &&
          temp.push({
            label: provincesJson[index].name,
            value: provincesJson[index].name,
          });
      }
    }

    setProvinces(temp);
  };

  const handleDistricts = (province) => {
    setDistricts([]);
    // console.log("province", province);
    const provinceT = provincesJson.filter((values) => {
      // console.log("values", values.name.toUpperCase().trim());
      // console.log("province", province.toUpperCase().trim());
      return (
        values.name.toUpperCase().trim() === province?.toUpperCase().trim()
      );
    });

    // console.log("districtsJson", districtsJson);

    const temp = [];
    if (provinceT[0]?.id !== undefined) {
      for (let index = 0; index < districtsJson.length; index++) {
        districtsJson[index].province_id == provinceT[0].id &&
          temp.push({
            label: districtsJson[index].name,
            value: districtsJson[index].name,
          });
      }
    }
    setDistricts(temp);
  };

  return {
    departments,
    provinces,
    districts,
    handleDepartaments,
    handleProvinces,
    handleDistricts,
  };
};
