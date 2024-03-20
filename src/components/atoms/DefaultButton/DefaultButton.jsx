import classes from "./default-button.module.scss";

export const DefaultButton = ({
  type = "button",
  name = "default",
  background = "#00abe3",
}) => {
  return (
    <button className={classes.button} type={type} style={{ background }}>
      {name}
    </button>
  );
};
