import { formatToNumber } from '.';

describe('format', () => {
  describe('formatToNumber', () => {
    it('should return the formatted value', () => {
      const result = formatToNumber(25584.2);

      expect(result).toBe('25,584.2');
    });

    describe('when force decimal places', () => {
      it('should return the formatted value with decimal places', () => {
        const result = formatToNumber(25584, true);

        expect(result).toBe('25,584.00');
      });
    });
  });
});
