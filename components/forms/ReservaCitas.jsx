import DrawerReservaCita from "../Drawers/DrawerReservaCita";
import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "@/config/api";
import { Select, Card } from "antd";

export default function ReservaCitas() {
  const [especialidad, setEspecialidad] = useState([]);
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);
  const [doctores, setDoctores] = useState([]);

  // MUESTRA ESPECIALIDADES
  useEffect(() => {
    try {
      axios.get(`${API_URL}/especialidad`).then((response) => {
        setEspecialidad(response.data);
        console.log(response.data);
      });
    } catch (error) {
      console.error("Error al obtener especialidades", error);
    }
  }, []);

  //   AL SELECCIONAR ESPECIALIDADES MUESTRA LOS DOCTORES DISPONIBLES
  useEffect(() => {
    try {
      axios
        .get(`${API_URL}/especialidadDoctores/${selectedEspecialidad}`)
        .then((response) => {
          setDoctores(response.data);
          console.log(response.data);
        });
    } catch (error) {
      console.error("Error al obtener doctores", error);
    }
  }, []);

  const handleSelectEspecialidad = (value) => {
    setSelectedEspecialidad(value);
    console.log(value);
  };

  return (
    <>
      <div className="flex justify-end">
        <DrawerReservaCita />
      </div>

      <div className="flex justify-center">
        <Select
          onChange={handleSelectEspecialidad}
          placeholder="Seleccione la especialidad"
        >
          {especialidad.map((especialidad) => (
            <Select.Option key={especialidad.id} value={especialidad.id}>
              {especialidad.especialidad}
            </Select.Option>
          ))}
        </Select>
      </div>

      {/* <div>
        <Card></Card>
      </div> */}
    </>
  );
}
