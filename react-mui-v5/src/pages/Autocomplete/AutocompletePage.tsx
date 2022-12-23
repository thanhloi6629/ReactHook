import { FormControl } from '@mui/material';
import AutocompleteAllState, { IItemAutoComplete } from 'components/molecules/AutocompleteAllState';
import AutocompleteAllStateOptimize from 'components/molecules/AutocompleteAllStateOptimize';
import React, { useState } from 'react'
import listAnswerDepart , {listAnswerDepartOptimize} from './sample';
import DdlDepartment from './type';

const AutocompletePage = () => {
  const [departments, setDepartments] = useState<DdlDepartment[]>([
    {
      departmentID: "KD",
      departmentName: "KD"
    },
    {
      departmentID: "KT",
      departmentName: "KT"
    },]);
  const [departmentsOptimize, setDepartmentsOptimize] = useState<DdlDepartment[]>([{departmentID: 'LV50161', departmentName: 'Hành chính'}]);




  return (
    <>
      <FormControl fullWidth>
      <AutocompleteAllState
        mappedValues={listAnswerDepart}
        limitTags={2}
        sx={{
          '& .MuiChip-filledDefault': {
            minWidth: '75px!important',
          },
        }}
        defaultValue={
          (departments.map((item) => ({
            key: item.departmentID,
            value: item.departmentName,
          })) as IItemAutoComplete[])
        }
        onChangeValue={(value: IItemAutoComplete[]) => {
          console.log('value onchange', value);
          const convert = value.map((item) => ({
            departmentID: item?.key,
            departmentName: item?.value,
          }));
          setDepartments(convert);
        }}
      />

        <AutocompleteAllStateOptimize
          mappedValues={listAnswerDepartOptimize}
          limitTags={2}
          sx={{
            '& .MuiChip-filledDefault': {
              minWidth: '75px!important',
            },
          }}
          defaultValue={departmentsOptimize.map((x: any) => ({
            key: x.departmentID,
            value: x.departmentName
          }))}
          onChangeValue={(value: IItemAutoComplete[]) => {
            const convert = value.map((item) => ({
              departmentID: item?.key,
              departmentName: item?.value,
            }));
            setDepartmentsOptimize(convert);
          }}
        />
      </FormControl>
    </>
  )
}

export default AutocompletePage
