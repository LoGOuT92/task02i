import * as React from "react";
import { useRef } from "react";
import "./test.css";
import { Idata } from "../App";

interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  data: Idata | null;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  data,
}) => {
  const modalRef = useRef<HTMLTableRowElement>(null);

  return (
    <div
      className="modal"
      ref={modalRef}
      style={{ display: isModalOpen ? "flex" : "none" }}
    >
      <div className="close" onClick={() => setIsModalOpen(false)}>
        <svg>
          <path
            fill="currentColor"
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
          />
        </svg>
      </div>

      <label>
        <span className="row">{data?.id}</span>
        <span className="row">{data?.name}</span>
        <span className="row">{data?.color}</span>
      </label>
    </div>
  );
};

export default Modal;
