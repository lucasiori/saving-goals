import originSvg from '../../assets/icons/origin.svg';
import { Header } from './style';

export default function HeaderCP(): JSX.Element {
  return (
    <Header>
      <div>
        <img src={originSvg} alt="Origin" />
      </div>
    </Header>
  );
}
