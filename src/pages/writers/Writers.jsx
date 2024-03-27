/* eslint-disable no-unused-vars */
import React from "react";

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
  console.log(writers);
  return (
    <>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
        {}
      </div>
    </>
  );
};

export default Writers;
