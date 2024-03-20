import { useState, useEffect, useMemo } from "react";
import { firuApi } from "../../api";
import { useRouter } from "next/router";

export const useEntities = (district, id) => {
  console.log(district);
  const [loading, setLoading] = useState(false);
  const [entitiesRegister, setEntitiesRegister] = useState([]);
  const [entitiesRegisterById, setEntitiesRegisterById] = useState([]);
  const { query } = useRouter();

  // obtiene las entidades por distrito

  const handleEntitiesRegister = useMemo(() => {
    const temp = [];
    setLoading(true);
    if (district === "") return setEntitiesRegister([]);
    firuApi
      .get(`/entity-register/list?district=${district}`)
      .then((res) => {
        console.log(res);
        for (let i = 0; i < res.data.entityRegister.length; i++) {
          temp.push({
            label: `${res.data.entityRegister[i].local} - ${res.data.entityRegister[i].lastName}`,
            value: res.data.entityRegister[i].id,
            id: res.data.entityRegister[i].id,
          });
        }
        setLoading(false);
        console.log(temp);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    return temp;
  }, [district]);

  useEffect(() => {
    // si viene el address no se ejecuta
    console.log("no viene el address");
    if (district === "") return setEntitiesRegister([]);
    if (district !== "" && id === undefined) {
      setEntitiesRegister(handleEntitiesRegister);
    }
  }, [district]);

  // obtiene las entidades por id

  const handleEntitiesRegisterById = useMemo(() => {
    const temp = [];
    if (id === undefined) return setEntitiesRegisterById([]);
    setLoading(true);
    firuApi
      .get(`/entity-register/list/${id}`)
      .then((res) => {
        console.log(res);
        for (let i = 0; i < res.data.entityRegister.length; i++) {
          temp.push({
            label: `${res.data.entityRegister[i].local} - ${res.data.entityRegister[i].lastName}`,
            value: res.data.entityRegister[i].id,
            id: res.data.entityRegister[i].id,
            department: res.data.entityRegister[i].department,
            province: res.data.entityRegister[i].province,
            district: res.data.entityRegister[i].district,
            phone: res.data.entityRegister[i].phone,
            direction: res.data.entityRegister[i].direction,
          });
        }
        setLoading(false);
        console.log(temp);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    return temp;
  }, [id]);

  useEffect(() => {
    if (id === undefined) return setEntitiesRegisterById([]);
    if (id !== undefined || (id !== "" && district === "")) {
      setEntitiesRegisterById(handleEntitiesRegisterById);
    }
  }, [id]);

  return {
    entitiesRegister,
    entitiesRegisterById,
    loading,
  };
};
