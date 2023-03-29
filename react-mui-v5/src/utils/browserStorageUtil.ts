export const getLocalStorage = (itemName: string) => localStorage.getItem(itemName) || '';
export const setLocalStorage = (itemName: string, value: string) => {
  localStorage.setItem(itemName, value);
};
export const removeLocalStorage = (itemName: string) => {
  localStorage.removeItem(itemName);
};

export const getSessionStorage = (itemName: string) => sessionStorage.getItem(itemName) || '';
export const setSessionStorage = (itemName: string, value: string) => {
  sessionStorage.setItem(itemName, value);
};
export const removeSessionStorage = (itemName: string) => {
  sessionStorage.removeItem(itemName);
};

export const convertNestedObjectToArray = (nestedObj: any) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

export const formattedValues = (
  mappedValues: Array<unknown>,
  fieldKey?: string,
  filedValue?: string
) => {
  if (mappedValues.length) {
    const keys = Object.keys(mappedValues[0] as Array<string>);

    const arrConverted = (
      mappedValues as Array<
        { [x: string]: string | number | boolean } | { key: string; value: string }
      >
    ).reduce(
      (arr, item) => {
        return [
          ...arr,
          {
            key: (item as Record<string, string>)[
              `${fieldKey ? (fieldKey as keyof typeof item) : keys[0]}`
            ],
            value: (item as Record<string, string>)[
              `${filedValue ? (filedValue as keyof typeof item) : keys[1]}`
            ],
          },
        ];
      },
      [{ key: 'all', value: 'Tất cả' }]
    );
    return arrConverted;
  }
  return [];
};
