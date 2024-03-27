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
    <>
      <div className="grid  grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {writers.map((writer) => (
          <Writer key={writer.id} writer={writer} />
        ))}
      </div>
    </>
  );
};

export default Writers;
