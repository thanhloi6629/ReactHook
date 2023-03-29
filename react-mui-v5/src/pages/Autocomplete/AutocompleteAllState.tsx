import {
  Autocomplete,
  Checkbox,
  Chip,
  createFilterOptions,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import BpCheckedIcon from "components/atoms/checkbox/BpCheckedIcon";
import BpIcon from "components/atoms/checkbox/BPIcon";
import React, { useEffect, useState } from "react";
/* eslint-disable import/named */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { SxProps } from "@mui/system";
import FormatHelperText from "components/atoms/FormatHelperText";
import { ERROR_EMPTY_FIELD } from "constant/textNotification";
import globalStyles from "GlobalStyle/commonStyle";
import { formattedValues } from "utils/browserStorageUtil";
export interface IItemAutoComplete {
  key: string;
  value: string;
}

const useStyles = makeStyles(() => ({
  menuPaper: {
    maxHeight: 200,
    maxWidth: 850,
  },
}));

const AutocompleteAllState: React.FC<{
  mappedValues: any;
  onChangeValue: (value: IItemAutoComplete[]) => void;
  width?: string;
  limitTags?: number;
  sx?: SxProps;
  isValidate?: boolean;
  placeholder?: string;
  isDisabledMultiSelect?: boolean;
  disabled?: boolean;
  defaultValue: IItemAutoComplete[];
  className?: string;
  isMultipleLabel?: boolean;
  fieldKey?: string;
  filedValue?: string;
  error?: boolean;
}> = ({
  mappedValues,
  width = "100%",
  limitTags = 1,
  sx,
  onChangeValue = () => {},
  isValidate = false,
  placeholder = "Chọn phòng ban",
  isDisabledMultiSelect = false,
  disabled = false,
  defaultValue,
  className = "",
  isMultipleLabel = false,
  fieldKey = "",
  filedValue = "",
  error = false,
}) => {
  const classes = useStyles();
  const globalClasses = globalStyles();
  const [inputValue, setInputValue] = React.useState("");
  const [values, setValues] = useState<IItemAutoComplete[]>(() =>
    formattedValues(mappedValues, fieldKey, filedValue)
  );
  // const values = useMemo(() => {
  //   return formattedValues(mappedValues);
  // }, [JSON.stringify(mappedValues)]);
  const [selectedOptions, setSelectedOptions] =
    useState<IItemAutoComplete[]>(defaultValue);

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
    const result = values.filter((el) => el.key !== "all");
    onChangeValue(result);
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
    <>
      {isDisabledMultiSelect ? (
        <Select
          disabled={isDisabledMultiSelect}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
          }}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
          label="Chọn phòng ban"
          displayEmpty
          value=""
          IconComponent={ExpandMoreIcon}
        >
          <MenuItem value="">
            <em>Chọn phòng ban</em>
          </MenuItem>
        </Select>
      ) : (
        <Autocomplete
          multiple
          id="tags-standard"
          options={values}
          limitTags={limitTags}
          value={selectedOptions}
          inputValue={inputValue}
          onInputChange={(event, value, reason) => {
            if (reason !== "reset") {
              setInputValue(value);
            }
          }}
          getOptionLabel={(option) => {
            if (isMultipleLabel) {
              return `${option.key} - ${option.value}`;
            }
            return option.value;
          }}
          isOptionEqualToValue={(option, value) => option.key === value.key}
          disabled={disabled}
          className={`${globalClasses.autocompleteRoot} ${className}`}
          popupIcon={<ExpandMoreIcon />}
          disableCloseOnSelect
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
              } else {
                let value = [] as IItemAutoComplete[];
                if (reason === "selectOption") {
                  if (
                    selectedOptions.some((x) => x.key === detail?.option?.key)
                  ) {
                    value = newValue.filter(
                      (x) => x.key !== detail?.option?.key
                    );
                  } else {
                    value = [
                      ...selectedOptions,
                      detail?.option,
                    ] as IItemAutoComplete[];
                  }
                }
                if (reason === "removeOption") {
                  value = newValue.filter((x) => x.key !== detail?.option?.key);
                }
                setSelectedOptions(value);
                onChangeValue(value);
              }
            } else if (reason === "clear") {
              setSelectedOptions([]);
              onChangeValue(newValue);
            }
          }}
          style={{ width: width }}
          renderInput={(params) => (
            <TextField
              className={globalClasses.errorTextFieldHelperText}
              sx={{
                ".MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
                  minWidth: "0px!important",
                },
                // '.MuiAutocomplete-endAdornment': {
                //   top: '14px!important',
                // },
                // '& .MuiAutocomplete-tag': {
                //   marginLeft: '6px',
                // },
                "& .MuiAutocomplete-clearIndicator": {
                  " svg": {
                    fontSize: "20px",
                  },
                },
                "& .MuiOutlinedInput-root.Mui-disabled": {
                  backgroundColor: "#F8F8F8",
                },
              }}
              {...params}
              placeholder={selectedOptions.length === 0 ? placeholder : ""}
              variant="outlined"
              error={error}
              helperText={
                isValidate ? (
                  <FormatHelperText message={ERROR_EMPTY_FIELD} />
                ) : (
                  ""
                )
              }
            />
          )}
          filterOptions={filterOptions}
          renderOption={(props, option, { selected }) => {
            let selectAllProps =
              option.key === "all" && allSelected ? { checked: true } : {};
            if (
              defaultValue &&
              defaultValue.some((x) => x.key === option.key)
            ) {
              selectAllProps = { checked: true };
            }
            return (
              <li {...props} key={option.key}>
                <Checkbox
                  icon={<BpIcon />}
                  checkedIcon={<BpCheckedIcon />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  {...selectAllProps}
                />
                {isMultipleLabel
                  ? `${option.key} - ${option.value}`
                  : option.value}
              </li>
            );
          }}
          sx={sx}
        />
      )}
    </>
  );
};

export default AutocompleteAllState;
