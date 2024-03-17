import { Modal } from '@mui/material';
import { useEffect } from 'react';

const CustomModal = ({ children, show }: CustomModalProps) => {
  const style: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <Modal
      open={show}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={style}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
