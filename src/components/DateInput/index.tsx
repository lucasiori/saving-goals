import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import useDate from '../../hooks/use-date';
import chevronLeftSvg from '../../assets/icons/chevron-left.svg';
import chevronRightSvg from '../../assets/icons/chevron-right.svg';
import { Wrapper, ArrowControl, Content } from './style';

interface DateInputProps {
  id: string;
  onChangeDate?: (month: number, year: number) => void;
}

export default function DateInputCP({
  id,
  onChangeDate = () => {},
}: DateInputProps): JSX.Element {
  const {
    selectedMonth,
    selectedYear,
    hasPreviousMonth,
    prevMonth,
    nextMonth,
  } = useDate();

  const [isFocused, setIsFocused] = useState(false);

  function handleKeyUp({ key }: React.KeyboardEvent<HTMLDivElement>) {
    if (key === 'ArrowLeft' && hasPreviousMonth) {
      prevMonth();
    } else if (key === 'ArrowRight') {
      nextMonth();
    }
  }

  useEffect(() => {
    onChangeDate(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear, onChangeDate]);

  return (
    <Wrapper data-focused={isFocused}>
      <input
        data-id="date-input"
        type="text"
        id={id}
        name={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyUp={handleKeyUp}
        onChange={() => {}}
        value={`${selectedYear}-${selectedMonth}`}
      />

      <ArrowControl
        data-id="prev-button"
        type="button"
        onClick={prevMonth}
        disabled={!hasPreviousMonth}
      >
        <img src={chevronLeftSvg} alt="Previous" width="24px" />
      </ArrowControl>

      <Content>
        <strong>{format(new Date().setMonth(selectedMonth), 'MMMM')}</strong>
        <span>{format(new Date().setFullYear(selectedYear), 'yyyy')}</span>
      </Content>

      <ArrowControl data-id="next-button" type="button" onClick={nextMonth}>
        <img src={chevronRightSvg} alt="Next" width="24px" />
      </ArrowControl>
    </Wrapper>
  );
}
