/* eslint-disable no-unused-vars */
import React from "react";
import Writer from "../../components/wirter/Writer";

const Writers = () => {
  const [writers, setWriters] = React.useState([]);
  React.useEffect(() => {
    async function fetchWriters() {
      const res = await fetch("/writers.json");
      const data = await res.json();
      setWriters(data);
    }
    fetchWriters();
  }, []);

  return (
    <div>
      <h2 className="p-8 mb-6 text-center bg_third rounded-2xl lg:text-3xl text-2xl font-bold text_pri">
        Top Writers
      </h2>
      <div className="grid  grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {writers.map((writer) => (
          <Writer key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  );
};

export default Writers;
