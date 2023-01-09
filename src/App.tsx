import * as React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NumberINput from "./components/NumericInput";
import Table from "./components/Table";

export interface Idata {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const App: React.FunctionComponent = () => {
  const per_page: number = 5;
  const [idProducts, setIdProducts] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<Idata[]>([]);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    try {
      const data = await axios.get(
        `https://reqres.in/api/{resource}?page=${page}&per_page=${per_page}'`
      );
      setProducts(data.data.data);
      setPage(data.data.page);
      setTotal(data.data.total_pages);
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        throw new Error("something went wrong...");
      }
    }
  };

  const nextPage = () => {
    if (total === page) {
      return;
    }
    setPage((prev) => prev + 1);
  };
  const previousPage = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div className="App">
      <NumberINput
        idProducts={idProducts}
        setIdProducts={(val) => setIdProducts(val)}
        // fetchSingleData={fetchSingleData}
      />
      {error ? (
        <label style={{ color: "red" }}>{error}</label>
      ) : (
        <>
          <Table products={products} />
          <div>
            <button
              disabled={page === 1 ? true : false}
              onClick={() => previousPage()}
            >
              {"<"}
            </button>
            <button
              disabled={total === page ? true : false}
              onClick={() => nextPage()}
            >
              {">"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
