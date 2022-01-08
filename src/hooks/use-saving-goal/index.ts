import { useEffect, useState } from 'react';
import { differenceInMonths, format } from 'date-fns';
import { Decimal } from 'decimal.js';

type ReachDate = {
  month: number;
  year: number;
};

interface UseSavingGoalReturn {
  amount?: number;
  reachDate: ReachDate;
  monthlyAmount?: number;
  reachDateInMonths: number;
  fullDate: string;
  setAmount: (amount?: number) => void;
  setReachDate: (reachDate: ReachDate) => void;
}

function useSavingGoal(): UseSavingGoalReturn {
  const [amount, setAmount] = useState<number>();
  const [reachDate, setReachDate] = useState<ReachDate>({} as ReachDate);
  const [monthlyAmount, setMonthlyAmount] = useState<number>();
  const [reachDateInMonths, setReachDateInMonths] = useState(0);
  const [fullDate, setFullDate] = useState('');

  function hasReachDate() {
    return reachDate.month !== undefined && reachDate.year !== undefined;
  }

  function calculateMonthlyAmount() {
    if (!amount || !hasReachDate()) return 0;

    const newMonthlyAmount = new Decimal(amount)
      .div(reachDateInMonths)
      .toDecimalPlaces(2, Decimal.ROUND_DOWN);

    return newMonthlyAmount.toNumber();
  }

  function calculateReachDateInMonths() {
    if (!hasReachDate()) return 0;

    const fullReachDate = new Date();
    fullReachDate.setMonth(reachDate.month);
    fullReachDate.setFullYear(reachDate.year);

    return differenceInMonths(fullReachDate, new Date());
  }

  function getFullDate() {
    if (!hasReachDate()) return '';

    const fullReachDate = new Date();
    fullReachDate.setMonth(reachDate.month);

    return `${format(fullReachDate, 'MMMM')} ${reachDate.year}`;
  }

  useEffect(() => {
    setMonthlyAmount(calculateMonthlyAmount());
  }, [amount, reachDateInMonths]);

  useEffect(() => {
    setReachDateInMonths(calculateReachDateInMonths());
    setFullDate(getFullDate());
  }, [reachDate]);

  return {
    amount,
    reachDate,
    monthlyAmount,
    reachDateInMonths,
    fullDate,
    setAmount,
    setReachDate,
  };
}

export default useSavingGoal;
