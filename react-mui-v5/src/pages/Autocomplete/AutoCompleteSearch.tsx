import {
  Autocomplete,
  Checkbox,
  createFilterOptions,
  TextField,
  Chip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import BpIcon from "components/atoms/checkbox/BPIcon";
import BpCheckedIcon from "components/atoms/checkbox/BpCheckedIcon";
/* eslint-disable import/named */
import { SxProps } from "@mui/system";
import FormatHelperText from "components/atoms/FormatHelperText";
import { formattedValues } from "utils/browserStorageUtil";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface IItemAutoComplete {
  key: string;
  value: string;
}

const AutoCompleteSearch: React.FC<{
  name: string;
  mappedValues: any;
  width?: string;
  limitTags?: number;
  sx?: SxProps;
  isMultipleLabel?: boolean;
  className?: string;
  fieldKey?: string;
  filedValue?: string;
}> = ({
  name,
  mappedValues,
  width = "100%",
  limitTags = 1,
  sx,
  isMultipleLabel = false,
  className = "",
  fieldKey = "",
  filedValue = "",
}) => {
  const [values, setValues] = useState<IItemAutoComplete[]>([]);

  const [selectedOptions, setSelectedOptions] = useState<IItemAutoComplete[]>(
    []
  );

  const allSelected = mappedValues.length === selectedOptions.length;
  const [inputValue, setInputValue] = React.useState("");

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const getOptionLabel = (option: any) => {
    if (isMultipleLabel) {
      return `${option.key} - ${option.value}`;
    }
    return option.value;
  };
  const shiftElement = (arr: IItemAutoComplete[]) => {
    return arr.slice(1, arr.length);
  };

  const handleClearOptions = () => setSelectedOptions([]);

  const handleToggleOption = (selectedOpts: IItemAutoComplete[]) => {
    setSelectedOptions(selectedOpts);
  };
  const handleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      const resultSubmit = shiftElement(values);
      setSelectedOptions(resultSubmit);
    } else {
      handleClearOptions();
    }
  };
  const handleToggleSelectAll = () => {
    handleSelectAll(!allSelected);
  };

  useEffect(() => {
    const mapped = formattedValues(mappedValues, fieldKey, filedValue);
    setValues(mapped);
  }, [mappedValues]);

  const filterOptions = createFilterOptions({
    matchFrom: "any",
    stringify: (option: IItemAutoComplete) => option.key + option.value,
    limit: 100,
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Autocomplete
          multiple
          id="tags-standard"
          options={values}
          limitTags={limitTags}
          className={className}
          value={selectedOptions}
          inputValue={inputValue}
          onInputChange={(event, value, reason) => {
            if (reason !== "reset") {
              setInputValue(value);
            }
          }}
          popupIcon={<ExpandMoreIcon />}
          getOptionLabel={getOptionLabel}
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => {
              if (limitTags && index < limitTags) {
                return (
                  <Chip
                    {...getTagProps({ index })}
                    label={option.value}
                    key={option.key}
                  />
                );
              } else if (index === limitTags) {
                return `+${tagValue.length - 1}`;
              } else {
                return null;
              }
            });
          }}
          onChange={(event, newValue, reason, detail) => {
            if (reason === "selectOption" || reason === "removeOption") {
              if (newValue.find((option) => option.key === "all")) {
                handleToggleSelectAll();
                let result = [];
                result = values.filter((el) => el.key !== "all");
                return onChange(result);
              } else {
                handleToggleOption(newValue);
                return onChange(newValue);
              }
            } else if (reason === "clear") {
              handleClearOptions();
              return onChange(newValue);
            }
          }}
          style={{ width: width }}
          renderInput={(params) => (
            <TextField
              sx={{
                ".MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
                  minWidth: "0px!important",
                },
                // '.MuiAutocomplete-endAdornment': {
                //   top: '14px!important',
                // },
                "& .MuiAutocomplete-clearIndicator": {
                  " svg": {
                    fontSize: "22px",
                  },
                },
              }}
              {...params}
              label=""
              variant="outlined"
              helperText={
                <FormatHelperText
                  message={errors[name] ? `${errors[name]?.message}` : ""}
                />
              }
            />
          )}
          filterOptions={filterOptions}
          renderOption={(props, option, { selected }) => {
            const selectAllProps =
              option.key === "all" && allSelected ? { checked: true } : {};
            return (
              <li {...props} key={option.key}>
                <Checkbox
                  icon={<BpIcon />}
                  checkedIcon={<BpCheckedIcon />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  {...selectAllProps}
                />
                {getOptionLabel(option)}
              </li>
            );
          }}
          sx={sx}
          disableCloseOnSelect={true}
        />
      )}
    />
  );
};

export default AutoCompleteSearch;
