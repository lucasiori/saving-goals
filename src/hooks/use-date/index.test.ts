import MockDate from 'mockdate';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useDate from '.';

describe('useDate', () => {
  beforeEach(() => {
    MockDate.set(new Date().setMonth(2));
  });

  afterEach(() => {
    MockDate.reset();
  });

  describe('when to instantiate the hook', () => {
    describe('when does not provide the initial data', () => {
      it('should set selected date as next month', () => {
        const currentDate = new Date();
        const { result } = renderHook(() => useDate());
        const { selectedMonth, selectedYear } = result.current;

        expect(selectedMonth).toBe(currentDate.getMonth() + 1);
        expect(selectedYear).toBe(currentDate.getFullYear());
      });
    });

    describe('when does providesthe initial data', () => {
      it('should set selected date as provided date', () => {
        const { result } = renderHook(() =>
          useDate({
            initialMonth: 8,
            initialYear: 2099,
          })
        );
        const { selectedMonth, selectedYear } = result.current;

        expect(selectedMonth).toBe(8);
        expect(selectedYear).toBe(2099);
      });
    });
  });

  describe('when the selected month is the next month', () => {
    it('should return "hasPreviousMonth" as false', () => {
      const { result } = renderHook(() => useDate());
      const { hasPreviousMonth } = result.current;

      expect(hasPreviousMonth).toBe(false);
    });

    it('should not be able change month to the previous month', () => {
      const { result } = renderHook(() => useDate());
      const { selectedMonth, prevMonth } = result.current;

      act(() => prevMonth());

      const { selectedMonth: newSelectedMonth } = result.current;

      expect(newSelectedMonth).toBe(selectedMonth);
    });
  });

  describe('when to change the previous month', () => {
    describe('when the current selected month is not the first month of the year', () => {
      it('should update the selected month to the previous month', async () => {
        const { result } = renderHook(() =>
          useDate({
            initialMonth: new Date().getMonth() + 2,
          })
        );

        const { selectedMonth, selectedYear, prevMonth } = result.current;

        act(() => prevMonth());

        const {
          selectedMonth: newSelectedMonth,
          selectedYear: newSelectedYear,
        } = result.current;

        expect(newSelectedMonth).toBe(selectedMonth - 1);
        expect(newSelectedYear).toBe(selectedYear);
      });
    });

    describe('when the current selected month is the first month of the year', () => {
      it('should update the selected month to the last month of the previous year', () => {
        const january = 0;
        const december = 11;

        const { result } = renderHook(() =>
          useDate({
            initialMonth: january,
            initialYear: new Date().getFullYear() + 2,
          })
        );

        const { selectedYear, prevMonth } = result.current;

        act(() => prevMonth());

        const {
          selectedMonth: newSelectedMonth,
          selectedYear: newSelectedYear,
        } = result.current;

        expect(newSelectedMonth).toBe(december);
        expect(newSelectedYear).toBe(selectedYear - 1);
      });
    });
  });

  describe('when to change the next month', () => {
    describe('when the current selected month is not the last month of the year', () => {
      it('should update the selected month to the next month', () => {
        const { result } = renderHook(() => useDate());
        const { selectedMonth, selectedYear, nextMonth } = result.current;

        act(() => nextMonth());

        const {
          selectedMonth: newSelectedMonth,
          selectedYear: newSelectedYear,
        } = result.current;

        expect(newSelectedMonth).toBe(selectedMonth + 1);
        expect(newSelectedYear).toBe(selectedYear);
      });
    });

    describe('when the current selected month is the last month of the year', () => {
      it('should update the selected month to the first month of the next year', () => {
        const january = 0;
        const november = 10;
        MockDate.set(new Date().setMonth(november));

        const { result } = renderHook(() => useDate());
        const { selectedYear, nextMonth } = result.current;

        act(() => nextMonth());

        const {
          selectedMonth: newSelectedMonth,
          selectedYear: newSelectedYear,
        } = result.current;

        expect(newSelectedMonth).toBe(january);
        expect(newSelectedYear).toBe(selectedYear + 1);
      });
    });
  });
});
