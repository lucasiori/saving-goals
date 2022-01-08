function formatToNumber(value: number, forceDecimalPlaces = false): string {
  return !forceDecimalPlaces
    ? new Intl.NumberFormat('en-US').format(value)
    : new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
}

export { formatToNumber };
