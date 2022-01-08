/* eslint-disable react-hooks/exhaustive-deps */
import { getMonth, getYear } from 'date-fns';
import { useEffect, useState } from 'react';

interface UseDateProps {
  initialMonth?: number;
  initialYear?: number;
}

interface UseDateReturn {
  selectedMonth: number;
  selectedYear: number;
  hasPreviousMonth: boolean;
  prevMonth: () => void;
  nextMonth: () => void;
}

function useDate(props?: UseDateProps): UseDateReturn {
  const { initialMonth, initialYear } = props || {};

  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [hasPreviousMonth, setHasPreviousMonth] = useState(false);

  const january = 0;
  const december = 11;

  function prevMonth() {
    if (!hasPreviousMonth) return;

    const isFirstMonthOfTheYear = selectedMonth === january;

    setSelectedMonth(isFirstMonthOfTheYear ? december : selectedMonth - 1);
    setSelectedYear(isFirstMonthOfTheYear ? selectedYear - 1 : selectedYear);
  }

  function nextMonth() {
    const isLastMonthOfTheYear = selectedMonth === december;

    setSelectedMonth(isLastMonthOfTheYear ? january : selectedMonth + 1);
    setSelectedYear(isLastMonthOfTheYear ? selectedYear + 1 : selectedYear);
  }

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = initialMonth || getMonth(currentDate);
    const currentYear = initialYear || getYear(currentDate);

    setHasPreviousMonth(
      selectedMonth !== currentMonth + 1 || selectedYear !== currentYear
    );
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = getMonth(currentDate);
    const currentYear = getYear(currentDate);
    const isLastMonthOfTheYear = currentMonth === december;

    if (initialMonth !== undefined) {
      setSelectedMonth(initialMonth);
    } else {
      setSelectedMonth(isLastMonthOfTheYear ? january : currentMonth + 1);
    }

    if (initialYear !== undefined) {
      setSelectedYear(initialYear);
    } else {
      setSelectedYear(isLastMonthOfTheYear ? currentYear + 1 : currentYear);
    }
  }, [initialMonth, initialYear]);

  return {
    selectedMonth,
    selectedYear,
    hasPreviousMonth,
    prevMonth,
    nextMonth,
  };
}

export default useDate;
