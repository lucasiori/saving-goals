import { Wrapper } from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function ButtonCP({
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return <Wrapper {...rest}>{children}</Wrapper>;
}
