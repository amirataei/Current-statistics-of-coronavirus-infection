import React from "react";
import { useEffect, useState } from "react";
import { fetchDailydate } from "../../Api";
import { Line, Bar , defaults } from "react-chartjs-2";

import "./chart.css";
function Chart( { data: { confirmed, deaths , recovered } , Country }) {
  const [dailyDate, setDailydate] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailydate(await fetchDailydate());
    };
    console.log(dailyDate);
    fetchApi();
  }, []);

  const lineChart = dailyDate.length ? (
    <Line
      data={{
        labels: dailyDate.map(({ date }) => date),
        datasets: [
          {
            data: dailyDate.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyDate.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgba(255 , 0 , 0 , .5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const BarChar = confirmed ? (
    <Bar
      data={{
        labels: ["infected", "recovered", "deaths"],
        datasets: [
          {
            label: "people",
            backgroundColor: [
              "rgba(0, 0, 255, .5)",
              "rgba(0, 255, 0, .5)",
              "rgba(255, 0, 9, .5)",
            ],
            data: [confirmed.value,recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${Country}` },
      }}
    />
  ) : null

  // const linechart = ()
  return <div className="Container">{Country ? BarChar : lineChart}</div>;
}

export default Chart;
