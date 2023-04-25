import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  small = false,
  large = false,
  outline = false,
  primary = false,
  text = false,
  disabled = false,
  rounded = false,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = { onClick, ...passProps };

  // if (disabled) {
  //   delete props.onclick;
  // }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
