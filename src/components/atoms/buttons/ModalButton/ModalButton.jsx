import classes from "./modal-button.module.scss";

export const ModalButton = ({
  type = "button",
  name = "default",
  background = "#45b7e1",
  disabled = false,
  onClick = () => false,
  handleAdopter
}) => {
  return (
    <button
      className={classes.button}
      type={type}
      style={{
        background: disabled ? "#afd0dc" : background,
        color: disabled ? "#e1e1e1" : "#fff",
        boxShadow: disabled ? "none" : "",
        cursor: disabled ? "auto" : "pointer",
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
