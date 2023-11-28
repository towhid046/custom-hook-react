import { useEffect, useState } from "react";

const useCustomhook = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((posts) => setData(posts));
    } catch (err) {
      setError(err.message);
    }
  }, [url]);

  return { data, error}
};
export default useCustomhook;

// ==================================================================
// useCustomhook.jsx
// import { useEffect, useState } from "react";

// const useCustomhook = (url) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, error, loading };
// };

// export default useCustomhook;
