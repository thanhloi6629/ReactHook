const formatter = new Intl.NumberFormat('ja-JP', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

const numberFormater = (num) => {
if (typeof num === 'undefined' || isNaN(num)) {
    return num;
}
const tmp = String(num).split('.');
if (tmp[1]) {
    let fixed = 2;
    if (tmp[1].length < 3) {
    fixed = tmp[1].length;
    }
    return parseFloat(num).toFixed(fixed);
}
return formatter.format(num);

};
