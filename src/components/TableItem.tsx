import * as React from "react";
import { IProduct } from "../App";
import "../App.css";

interface ITableItemProps {
  product: IProduct;
  setIsModalOpen: (val: boolean) => void;
  setData: (val: IProduct) => void;
}

const TableItem: React.FunctionComponent<ITableItemProps> = ({
  product,
  setIsModalOpen,
  setData,
}) => {
  const openModal = () => {
    setIsModalOpen(true);
    // transfer product info to modal
    setData(product);
  };

  return (
    <tr
      key={product.id}
      style={{ backgroundColor: product.color }}
      onClick={() => openModal()}
      className="table__row"
    >
      <th>{product.id}</th>
      <th>{product.name}</th>
      <th>{product.year}</th>
    </tr>
  );
};

export default TableItem;
