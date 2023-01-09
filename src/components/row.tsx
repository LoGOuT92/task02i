import * as React from "react";
import { Idata } from "../App";

interface IRowProps {
  product: Idata;
  setIsModalOpen: (val: boolean) => void;
  setData: (val: Idata) => void;
}

const Row: React.FunctionComponent<IRowProps> = ({
  product,
  setIsModalOpen,
  setData,
}) => {
  const openModal = () => {
    setIsModalOpen(true);
    setData(product);
  };

  return (
    <tr
      key={product.id}
      style={{ backgroundColor: product.color }}
      onClick={() => openModal()}
    >
      <th>{product.id}</th>
      <th>{product.name}</th>
      <th>{product.year}</th>
    </tr>
  );
};

export default Row;
