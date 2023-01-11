import * as React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import NumberINput from "./components/NumericInput";
import Table from "./components/Table";

export interface IProduct {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const URL = "https://reqres.in/api/{resource}";

const App: React.FunctionComponent = () => {
  const itemsPerPage = 5;
  const [filteredProductId, setFilteredProductId] = useState<string>("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data = await axios.get(
        `${URL}?page=${page}&per_page=${itemsPerPage}'`
      );
      setProducts(data.data.data);
      setPage(data.data.page);
      setTotalPages(data.data.total_pages);
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        throw new Error("something went wrong...");
      }
    }
    setLoading(false);
  };

  const nextPage = () => {
    //return in last page
    if (totalPages === page) return;
    setPage((prev) => prev + 1);
  };
  const previousPage = () => {
    //return in first  page
    if (page <= 1) return;
    setPage((prev) => prev - 1);
    fetchProducts();
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchSinglProduct = async () => {
    if (filteredProductId) {
      try {
        const data = await axios.get<AxiosResponse>(
          `${URL}/${filteredProductId}`
        );
        setProducts([data.data.data]);
        setPage(1);
        setTotalPages(1);
        setError("");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          //if the product is not in the database
          if (error.response?.status === 404) {
            return setError("No product found with this ID");
          }
          //fetch axios error
          setError(error.message);
        } else {
          throw new Error("something went wrong...");
        }
      }
    }
  };

  return (
    <div className="App">
      <NumberINput
        filteredProductId={filteredProductId}
        setFilteredProductId={(val) => setFilteredProductId(val)}
        fetchSinglProduct={fetchSinglProduct}
        fetchProducts={fetchProducts}
        type="text"
        placeholder="Find product by id"
      />
      {error && <label className="label-error">{error}</label>}
      {loading ? (
        <label className="label-loading">Loading...</label>
      ) : (
        <div className="content">
          <Table products={products} />
          <div>
            <button
              disabled={page === 1 ? true : false}
              onClick={() => previousPage()}
              className="page-button"
            >
              <svg>
                <path
                  fill="currentColor"
                  d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z"
                />
              </svg>
            </button>
            <button
              disabled={totalPages === page ? true : false}
              onClick={() => nextPage()}
              className="page-button"
            >
              <svg>
                <path
                  fill="currentColor"
                  d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
