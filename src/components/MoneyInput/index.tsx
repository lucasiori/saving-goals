import { NumberFormatValues } from 'react-number-format';
import dollarSignSvg from '../../assets/icons/dollar-sign.svg';
import { Wrapper, Input } from './style';

interface MoneyInputProps {
  id: string;
  onChange?: (value?: number) => void;
}

export default function MoneyInputCP({
  id,
  onChange,
}: MoneyInputProps): JSX.Element {
  function handleChangeValue(value: NumberFormatValues) {
    if (onChange) {
      onChange(value.floatValue);
    }
  }

  return (
    <Wrapper>
      <img src={dollarSignSvg} alt="Dollar" width="24px" />

      <Input
        data-id="money-input"
        type="text"
        id={id}
        name={id}
        thousandSeparator=","
        allowNegative={false}
        onValueChange={handleChangeValue}
      />
    </Wrapper>
  );
}
