import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Статистика портала",
    },
  },
};

const labels = ["2018 год", "2019 год", "2020 год", "2021 год", "2022 год"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Гос Закупки по годам",
      data: [61410093104, 65749361433, 53058687719, 60322805919, 40558089414],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Diogram = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#e7fafd",
        paddingTop: "50px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ fontSize: "2rem" }}>Статистика портала</h2>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
            marginTop: "20px",
            fontWeight: "bold",
            maxWidth: "100%",
          }}
          className="dio--nums"
        >
          <p>Закупающие организации - 4314</p>
          <div style={{ display: "flex", gap: "20px ", marginTop: "20px" }}>
            <div>
              <p style={{ color: "gray" }}>АКТИВНЫЕ</p>
              <p style={{ color: "green" }}>4247</p>
            </div>
            <div>
              <p style={{ color: "gray" }}>НЕАКТИВНЫЕ</p>
              <p style={{ color: "red" }}>67</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
            marginTop: "20px",
            fontWeight: "bold",
            maxWidth: "100%",
          }}
          className="dio--nums"
        >
          <p>Поставщики - 33963</p>
          <div style={{ display: "flex", gap: "20px ", marginTop: "20px" }}>
            <div>
              <p style={{ color: "gray" }}>АКТИВНЫЕ</p>
              <p style={{ color: "green" }}>30956</p>
            </div>
            <div>
              <p style={{ color: "gray" }}>НЕАКТИВНЫЕ</p>
              <p style={{ color: "red" }}>3007</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "60%" }} className="diogramm">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Diogram;
