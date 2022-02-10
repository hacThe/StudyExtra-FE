export const numberUtils = {
  numberWithThousandSeperator
};

function numberWithThousandSeperator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
