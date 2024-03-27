/* eslint-disable no-unused-vars */
import React from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { getBookStorage } from "../../utils/loacla-storage";

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

  const colors = ["#00C29C", "#0085f6", "#fbb929", "#fc8042", "#fb0100"];

  const chartData = [
    // {
    //   name: "Page A",
    //   uv: 100,
    // },
  ];
  const data =
    readBooks?.map((book) => {
      return {
        name: book.title,
        uv: book.page,
      };
    }) || chartData;

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="hidden sm:block">
        {" "}
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <div className="sm:hidden">
        <BarChart
          width={380}
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
export default PageToRead;
