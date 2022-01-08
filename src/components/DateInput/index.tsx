import chevronLeftSvg from '../../assets/icons/chevron-left.svg';
import chevronRightSvg from '../../assets/icons/chevron-right.svg';
import { Wrapper, Content } from './style';

interface DateInputProps {
  id: string;
}

export default function DateInputCP({ id }: DateInputProps): JSX.Element {
  return (
    <Wrapper>
      <button type="button">
        <img src={chevronLeftSvg} alt="Previous" width="24px" />
      </button>

      <Content>
        <strong>October</strong>
        <span>2021</span>
      </Content>

      <button type="button">
        <img src={chevronRightSvg} alt="Next" width="24px" />
      </button>

      <input type="text" id={id} name={id} />
    </Wrapper>
  );
}
