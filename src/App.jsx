import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [userData, setuserData] = useState([]);
  const [idx, setidx] = useState(1);
  const getData = async () => {
    const resp = await axios(
      `https://picsum.photos/v2/list?page=${idx}&limit=35`
    );
    setuserData(resp.data);
  };

  const getIdx = () => {
    setidx(idx + 1);
  };

  useEffect(() => {
    getData();
  }, [idx]);

  let printData = (
    <h3 className="text-gray-300 text-md absolute top-1/2 left-1/2 translate">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printData = userData.map((elem, idx) => {
      return (
        <div key={idx} className="w-48 ">
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex flex-wrap gap-5">{printData}</div>
      <div className="flex justify-center gap-5 pt-5 ">
        <button
          disabled={idx === 1}
          onClick={() => {
            if (idx > 1) setidx((prev) => prev - 1);
            setuserData([]);
          }}
          className={`rounded-lg px-4 py-2 font-semibold text-lg transition-all
    ${
      idx === 1
        ? "bg-amber-200 text-black cursor-not-allowed opacity-80"
        : "bg-amber-400 text-black cursor-pointer active:scale-95"
    }`}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setidx((prev) => prev + 1);
            setuserData([]);
          }}
          className="bg-amber-400 rounded-lg px-4 py-2 cursor-pointer font-semibold text-lg text-black active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
