import {
  Autocomplete,
  Checkbox,
  Chip,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ddlDepartment2, list10KRestaurant } from "./sample";
const AutoCompleteAll2 = () => {
  const options = [
    {
      restaurantID: "DNG.YUT.VCR.NQ_OLD",
      restaurantName: "DNG.YUT.VCR.NQ_OLD",
    },
    {
      restaurantID: "DNG",
      restaurantName: "DNG",
    },
    {
      restaurantID: "YUT",
      restaurantName: "YUT",
    },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValues, setSelectedValues] = useState<
    Array<{ restaurantID: string; restaurantName: string }>
  >([]);

  const handleCheckAll = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setIsChecked(event.target.checked);
    if (event?.target?.checked) {
      setSelectedValues(ddlDepartment2);
      return;
    }
    setSelectedValues([]);
  };

  const handleSelectValue = (event: any, newValue: any) => {
    setSelectedValues(newValue);
    setIsChecked(newValue.length === ddlDepartment2.length);
  };
  let limitTags = 1;

  const renderInput = (params: any) => {
    const { InputProps } = params;
    const { endAdornment, ...inputProps } = InputProps || {};
    console.log("endAdornment", endAdornment);
    return (
      <TextField
        {...params}
        InputProps={{
          ...inputProps,
          endAdornment: (
            <>
              {endAdornment}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked}
                    onChange={handleCheckAll}
                    indeterminate={
                      selectedValues.length > 0 &&
                      selectedValues.length < ddlDepartment2.length
                    }
                  />
                }
                label="Select All"
              />
            </>
          ),
        }}
      />
    );
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleCheckAll}
            indeterminate={
              selectedValues.length > 0 &&
              selectedValues.length < list10KRestaurant.length
            }
          />
        }
        label="Select All"
      />
      <Autocomplete
        multiple
        options={ddlDepartment2}
        value={selectedValues}
        onChange={handleSelectValue}
        getOptionLabel={(option) => option?.restaurantName}
        renderInput={renderInput}
        limitTags={limitTags}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => {
            if (limitTags && index < limitTags) {
              return (
                <Chip
                  {...getTagProps({ index })}
                  label={option.restaurantName}
                  key={option.restaurantID}
                />
              );
            } else if (index === limitTags) {
              return `+${tagValue.length - 1}`;
            } else {
              return null;
            }
          });
        }}
      />
    </div>
  );
};

export default AutoCompleteAll2;
