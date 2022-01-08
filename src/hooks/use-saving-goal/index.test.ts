import MockDate from 'mockdate';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useSavingGoal from '.';

describe('useSavingGoal', () => {
  beforeEach(() => {
    const mockedDate = new Date();
    mockedDate.setMonth(2);
    mockedDate.setFullYear(2099);

    MockDate.set(mockedDate);
  });

  afterEach(() => {
    MockDate.reset();
  });

  describe('when set a new amount value', () => {
    it('should return the "amount" property with new value', () => {
      const { result } = renderHook(() => useSavingGoal());
      const { setAmount } = result.current;

      act(() => setAmount(500));

      const { amount } = result.current;

      expect(amount).toBe(500);
    });
  });

  describe('when set a new reach date value', () => {
    it('should return the "reachDate" property with new value', () => {
      const { result } = renderHook(() => useSavingGoal());
      const { setReachDate } = result.current;

      act(() => setReachDate({ month: 10, year: 2099 }));

      const { reachDate } = result.current;

      expect(reachDate).toEqual({ month: 10, year: 2099 });
    });
  });

  describe('when change the amount and reach date values', () => {
    it('should return correctly the monthly amount', () => {
      const { result } = renderHook(() => useSavingGoal());
      const { setAmount, setReachDate } = result.current;

      act(() => {
        setAmount(2000);
        setReachDate({ month: 6, year: 2099 });
      });

      const { monthlyAmount } = result.current;

      // 2000 / 4 months = 500

      expect(monthlyAmount).toEqual(500);
    });

    it('should return correctly the reach date in months', () => {
      const { result } = renderHook(() => useSavingGoal());
      const { setAmount, setReachDate } = result.current;

      act(() => {
        setAmount(2000);
        setReachDate({ month: 8, year: 2100 });
      });

      const { reachDateInMonths } = result.current;

      // 1 year and 6 months

      expect(reachDateInMonths).toEqual(18);
    });

    it('should return correctly the full date', () => {
      const { result } = renderHook(() => useSavingGoal());
      const { setAmount, setReachDate } = result.current;

      act(() => {
        setAmount(2000);
        setReachDate({ month: 6, year: 2099 });
      });

      const { fullDate } = result.current;

      expect(fullDate).toEqual('July 2099');
    });
  });
});
