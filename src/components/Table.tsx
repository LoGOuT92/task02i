import * as React from "react";
import { IProduct } from "../App";
import { useState } from "react";
import Modal from "./Modal";
import TableItem from "./TableItem";
import "../App.css";
interface ITableProps {
  products: IProduct[];
}

const Table: React.FunctionComponent<ITableProps> = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<IProduct | null>(null);
  return (
    <>
      <table className="table">
        <thead>
          <tr className="table--head-row">
            <th>Id</th>
            <th>Name</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <TableItem
              key={index}
              product={product}
              setIsModalOpen={setIsModalOpen}
              setData={(val) => setData(val)}
            />
          ))}
        </tbody>
      </table>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={(val) => setIsModalOpen(val)}
        data={data}
      />
    </>
  );
};

export default Table;
