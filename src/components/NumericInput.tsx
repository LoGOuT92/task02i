import * as React from "react";
import { numberInputMask } from "../utils/numberInputMask";
import "../App.css";

interface INumberINputProps {
  placeholder?: string;
  type?: string;
  filteredProductId: string;
  setFilteredProductId: (val: string) => void;
  fetchSinglProduct: () => void;
  fetchProducts: () => void;
}

const NumberINput: React.FunctionComponent<INumberINputProps> = ({
  placeholder,
  type,
  filteredProductId,
  setFilteredProductId,
  fetchSinglProduct,
  fetchProducts,
}) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const NumberInputHandler = () => {
    if (ref.current) {
      //checking only numbers
      const checkNumber = numberInputMask(ref.current.value);
      //max input lenght 4
      if (ref.current.value.length > 4) {
        return;
      }
      //if everything is set value
      if (checkNumber) {
        setFilteredProductId(ref.current.value);
      }
      //if the user cleared the entire value
      //clear input and fetch all products
      if (ref.current.value.length === 0) {
        setFilteredProductId("");
        fetchProducts();
      }
    } else return;
  };

  return (
    <>
      <input
        test-id="numeric-input"
        className="numeric-input"
        type={type}
        ref={ref}
        onBlur={() => fetchSinglProduct()}
        value={filteredProductId}
        onChange={() => NumberInputHandler()}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default NumberINput;
