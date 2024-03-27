/* eslint-disable no-unused-vars */
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { getBookStorage } from "../../utils/loacla-storage";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function PageToRead() {
  const [readBooks, setReadBooks] = React.useState();

  const readStore = getBookStorage("read-store");
  // fetch data
  React.useEffect(() => {
    let readData = [];
    async function fetchData() {
      const res = await fetch("/books.json");
      const data = await res.json();
      data.find((book) => {
        for (const id of readStore) {
          if (book.id == id) {
            readData.push(book);
          }
        }
      });

      setReadBooks(readData);
    }
    fetchData();
  }, []);
  console.log(readBooks);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
      },
    },
  };

  const labels = readBooks && readBooks.map((book) => book.title);

  const data = {
    labels,
    datasets: [
      {
        label: "Pages",
        data: readBooks && readBooks.map((book) => book.page),
        backgroundColor: [
          "#00C29C",
          "#0085f6",
          "#fbb929",
          "#fc8042",
          "#fb0100",
        ],
      },
    ],
  };

  return (
    <div className="h-[700px] lg:py-[120px]  py-[80px] lg:px-[130px]">
      <Bar options={options} data={data} />
    </div>
  );
}
export default PageToRead;
