import Modal from 'react-bootstrap/Modal';

export const CustomModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        </Modal>
    );
}
