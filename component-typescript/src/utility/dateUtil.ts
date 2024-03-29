import moment, { Moment } from 'moment';

export const convertDateStringToMoment = (dateStr: string) => moment(dateStr, ['HH:mm', 'HH:mm:ss', 'YYYY/MM/DD HH:mm:ss']);

export const convertMomentToYYYYMMDD = (momentObj: Moment) => momentObj.format('YYYY/MM/DD HH:mm:ss');


export const formatter = new Intl.NumberFormat('ja-JP', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
export const numberFormater = (num: any) => {
  if (typeof num === 'undefined' || isNaN(num)) {
    return num;
  }
  const tmp = String(num).split('.');
  if (tmp[1]) {
    let fixed = 3;
    if (tmp[1].length < 3) {
      fixed = tmp[1].length;
    }
    return parseFloat(num).toFixed(fixed);
  }
  return formatter.format(num);
};


export const minuteOptions = Array(60)
.fill(1)
.map((item, index) => ({
  label: index.toLocaleString("en-US", { minimumIntegerDigits: 2 }),
  value: index.toLocaleString("en-US", { minimumIntegerDigits: 2 }),
}));
//[{label: '00', value: '00'},{label: '01', value: '01'}, {label: '02', value: '02'},..., {label: '59', value: '59'}]
//  cach 2
const monthsToShow = Array.from({ length: 60 }, (_, i) => (i))
.map((item, indexa) => ({ label: String(item).padStart(2, '0'), value: String(item).padStart(2, '0') }));