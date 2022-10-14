interface IProps {
  children: React.ReactNode;
  cssClasses: string;
}

const Button = ({ children, cssClasses }: IProps) => {
  return <button className={cssClasses}>{children}</button>;
};

export default Button;
