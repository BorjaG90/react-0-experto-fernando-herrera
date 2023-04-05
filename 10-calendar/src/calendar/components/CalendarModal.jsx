import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const onCloseModal = () => {
    console.log('cerrando modal');
    setIsModalOpen(false);
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1>Hola Mundo</h1>
      <hr />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus labore rem temporibus, cupiditate soluta odio voluptatum natus ea nisi optio, earum nemo numquam nostrum in unde corrupti autem. Praesentium, modi.</p>
    </Modal>
  )
}
