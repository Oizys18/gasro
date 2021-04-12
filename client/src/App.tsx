import React, { useState, useEffect, useMemo, useCallback } from "react";
import { noticeRef } from "database/textdata";
import noticeContext from "apis/noticeApi";
import Routes from "routes/Routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [data, setData] = useState<Array<object>>([]);
  useEffect(() => {
    let allData = Array<Object>();

    noticeRef.on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        allData.push(snap.val());
      });
      allData.reverse();
      setData(allData);
    });
  }, []);

  return (
    <>
      <noticeContext.Provider value={data}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </noticeContext.Provider>
    </>
  );
}