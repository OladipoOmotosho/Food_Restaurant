import CustomModal from '../CustomModal';

const ConfirmationBox = ({ openBox }: IConfirmationBox) => {
  return (
    <CustomModal show={openBox}>
      <div></div>
    </CustomModal>
  );
};

export default ConfirmationBox;
