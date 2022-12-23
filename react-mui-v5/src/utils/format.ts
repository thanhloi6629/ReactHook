export const formattedValues = (mappedValues: Array<any>) => {
    if (mappedValues.length) {
      const keys = Object.keys(mappedValues[0]);
      const arrConverted = mappedValues.reduce(
        (arr: any, item: any) => {
          return [...arr, { key: item[`${keys[0]}`], value: item[`${keys[1]}`] }];
        },
        [{ key: 'all', value: 'Tất cả' }]
      );
      return arrConverted;
    }
    return [];
  };
  