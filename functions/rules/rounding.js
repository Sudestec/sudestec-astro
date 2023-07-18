export function roundSignificant (input, significant = 2) {
  return Number(Intl.NumberFormat(undefined,
    { useGrouping: false, roundingMode: 'ceil', maximumSignificantDigits: significant })
    .format(input));
}
