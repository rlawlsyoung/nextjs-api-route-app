import Link from "next/link";

import classes from "./button.module.css";

interface ButtonType {
  children: string;
  link?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonType> = ({ children, link, onClick }) => {
  return link ? (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  ) : (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
