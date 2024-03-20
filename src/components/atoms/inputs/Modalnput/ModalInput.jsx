import classes from "./modal-input.module.scss";

export const ModalInput = ({
  name = "",
  type = "text",
  placeholder = "",
  formInput = {},
  onBlur = {},
  required = false,
}) => {
  return (
    <div className={classes.input}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            fontSize: 18,
            fontFamily: 'Inter'
          }}
        >{name}</h4>
        {required && <span style={{
          fontSize: 16,
          fontFamily: 'Inter'
        }}>(requerido)</span>}
      </div>
      <input {...formInput} {...onBlur} type={type} placeholder={placeholder} />
    </div>
  );
};
