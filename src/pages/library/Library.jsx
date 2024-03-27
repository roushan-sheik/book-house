/* eslint-disable no-unused-vars */
import React from "react";
import SingleLibrary from "../../components/library/SingleLibrary";

const Library = () => {
  const [libraries, setLibraries] = React.useState([]);
  React.useEffect(() => {
    async function fetchWriters() {
      const res = await fetch("/library.json");
      const data = await res.json();
      setLibraries(data);
    }
    fetchWriters();
  }, []);

  return (
    <div>
      <div className="grid  grid-cols-1 lg:grid-cols-2  gap-8">
        {libraries?.map((library) => (
          <SingleLibrary key={library.id} library={library} />
        ))}
      </div>
    </div>
  );
};

export default Library;
