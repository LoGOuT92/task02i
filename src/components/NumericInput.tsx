import * as React from "react";
import { numberInputMask } from "../helpers/numberInputMask";

interface INumberINputProps {
  idProducts: string;
  setIdProducts: (val: string) => void;
  //   fetchSingleData: () => void;
}

const NumberINput: React.FunctionComponent<INumberINputProps> = ({
  idProducts,
  setIdProducts,
  //   fetchSingleData,
}) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const NumberInputHandler = () => {
    if (ref.current) {
      const checkNumber = numberInputMask(ref.current.value);
      if (ref.current.value.length > 4) {
        return;
      }
      if (checkNumber) {
        setIdProducts(ref.current.value);
      }
      if (ref.current.value.length === 0) {
        setIdProducts("");
      }
    } else return;
  };

  return (
    <input
      className="form-control"
      type="text"
      ref={ref}
      //   onBlur={fetchSingleData}
      value={idProducts}
      onChange={() => NumberInputHandler()}
    ></input>
  );
};

export default NumberINput;
