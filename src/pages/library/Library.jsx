/* eslint-disable no-unused-vars */
import { Spinner } from "@material-tailwind/react";
import React from "react";
import SingleLibrary from "../../components/library/SingleLibrary";

const Library = () => {
  const [libraries, setLibraries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    async function fetchWriters() {
      try {
        setLoading(true);
        const res = await fetch("/library.json");
        const data = await res.json();
        setLibraries(data);
        setLoading(false);
      } catch (error) {
        console.log("Something went wrong.");
        console.log(error);
      }
    }
    fetchWriters();
  }, []);

  return (
    <div>
      <h2 className="p-8 mb-6 text-center bg_third rounded-2xl lg:text-3xl text-2xl font-bold text_pri">
        Most Popular Libraries
      </h2>
      {/* spinner  */}
      <div className="flex justify-center items-center">
        {loading && <Spinner className="h-12 w-12" />}
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2  gap-8">
        {libraries?.map((library) => (
          <SingleLibrary key={library.id} library={library} />
        ))}
      </div>
    </div>
  );
};

export default Library;
