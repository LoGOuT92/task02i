import * as React from "react";
import { Idata } from "../App";
import { useState } from "react";
import Modal from "./Modal";
import Row from "./row";

interface ITableProps {
  products: Idata[];
}

const Table: React.FunctionComponent<ITableProps> = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<Idata | null>(null);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">year</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Row
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
    </div>
  );
};

export default Table;
