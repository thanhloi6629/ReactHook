// eslint-disable-next-line import/named
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import BpCheckedIcon from './BpCheckedIcon';
import BpIcon from './BPIcon';
import { forwardRef, ForwardedRef } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
interface BPCheckbox extends CheckboxProps {
  label?: string;
  className?: string;
  padding?: string;
  disabled?: boolean;
}

interface BPCheckboxProps {
  props: BPCheckbox;
  checkboxRef: ForwardedRef<HTMLButtonElement>;
}

const CustomDeleteIcon = ({ checkboxRef, props }: BPCheckboxProps) => (
  <Checkbox
    ref={checkboxRef}
    disableRipple
    color="default"
    disabled={props.disabled}
    checkedIcon={<DeleteIcon />}
    icon={<DeleteIcon />}
    inputProps={{ 'aria-label': 'Checkbox demo' }}
    {...props}
  />
);

const ForwardDeleteIcon = forwardRef<HTMLButtonElement>((props, ref) => {
  return <CustomDeleteIcon props={props} checkboxRef={ref} />;
});
export default ForwardDeleteIcon;
