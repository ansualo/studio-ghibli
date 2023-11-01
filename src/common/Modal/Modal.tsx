import { PropsWithChildren } from "react";
import Modal from "react-bootstrap/Modal";

interface Props {
  show: boolean;
  onClick: () => void;
}

export const CustomModal: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    ></Modal>
  );
};
