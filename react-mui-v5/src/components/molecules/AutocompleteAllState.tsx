import { Autocomplete, Checkbox, createFilterOptions, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BpIcon from 'components/atoms/checkbox/BPIcon';
import BpCheckedIcon from 'components/atoms/checkbox/BpCheckedIcon';
/* eslint-disable import/named */
import { SxProps } from '@mui/system';
import { formattedValues } from 'utils/format';


export interface IItemAutoComplete {
  key: string;
  value: string;
}

const AutocompleteAllState: React.FC<{
  mappedValues: any[];
  width?: string;
  limitTags?: number;
  sx?: SxProps;
  defaultValue: IItemAutoComplete[];
  onChangeValue: (value: IItemAutoComplete[]) => void;
}> = ({ mappedValues, width = '100%', limitTags = 3, sx, onChangeValue = () => {}, defaultValue }) => {
  const [values, setValues] = useState<IItemAutoComplete[]>(mappedValues);
  const [selectedOptions, setSelectedOptions] = useState<IItemAutoComplete[]>(defaultValue);


  useEffect(() => {
    setSelectedOptions(defaultValue);
  }, [defaultValue]);

  const allSelected = mappedValues.length === selectedOptions.length;

  const handleToggleSelectAll = () => {
    if (allSelected) {
      setSelectedOptions([]);
      onChangeValue([]);
      return;
    }
    const resultSubmit = values.slice(1, values.length);
    setSelectedOptions(resultSubmit);
    const result = values.filter((el) => el.key !== 'all');
    onChangeValue(result);
  };


  useEffect(() => {
    const mapped = formattedValues(mappedValues);
    setValues(mapped);
  }, [mappedValues]);

  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    stringify: (option: IItemAutoComplete) => option.key + option.value,
    limit: 100,
  });

  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={values}
      limitTags={limitTags}
      value={selectedOptions}
      getOptionLabel={(option) => option.value}
      onChange={(event, newValue, reason, detail) => {
        if (reason === 'selectOption' || reason === 'removeOption') {
          if (newValue.find((option) => option.key === 'all')) {
            handleToggleSelectAll();
          } else {
            let value = [] as IItemAutoComplete[];
            if (reason === 'selectOption') {
              if (selectedOptions.some((x) => x.key === detail?.option?.key)) {
                value = newValue.filter((x) => x.key !== detail?.option?.key);
              } else {
                value = [...selectedOptions, detail?.option] as IItemAutoComplete[];
              }
            }
            if (reason === 'removeOption') {
              value = newValue.filter((x) => x.key !== detail?.option?.key);
            }
            setSelectedOptions(value);
            onChangeValue(value);
          }
        } else if (reason === 'clear') {
          setSelectedOptions([]);
          onChangeValue(newValue);
        }
      }}
      style={{ width: width }}
      defaultValue={defaultValue}
      disableCloseOnSelect
      renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
      filterOptions={filterOptions}
      renderOption={(props, option, { selected }) => {
        let selectAllProps = option.key === 'all' && allSelected ? { checked: true } : {};
        if (defaultValue && defaultValue.some((x) => x.key === option.key)) {
          selectAllProps = { checked: true };
        }
        return (
          <li {...props}>
            <Checkbox
              icon={<BpIcon />}
              checkedIcon={<BpCheckedIcon />}
              style={{ marginRight: 8 }}
              checked={selected}
              {...selectAllProps}
            />
            {option.value}
          </li>
        );
      }}
      sx={sx}
    />
  );
};

export default AutocompleteAllState;
