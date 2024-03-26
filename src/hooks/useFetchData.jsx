import React from "react";
const useFetchData = () => {
  const [books, setBooks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // fetch data
  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch("/books.json");
      const data = await res.json();
      setBooks(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return {
    books,
    loading,
  };
};

export default useFetchData;
