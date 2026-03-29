import cls from "./ErrorModal.module.css";

export const ErrorModal = ({ closeModal, message }) => {
  return (
    <div className={cls.backdrop} onClick={() => closeModal()}>
      <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Ошибка</h2>
        <p>{message}</p>
        <button onClick={() => closeModal()}>Ок</button>
      </div>
    </div>
  );
};
