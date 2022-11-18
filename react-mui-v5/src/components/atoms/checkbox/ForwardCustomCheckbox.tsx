// eslint-disable-next-line import/named
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import BpCheckedIcon from './BpCheckedIcon';
import BpIcon from './BPIcon';
import { forwardRef, ForwardedRef } from 'react';
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

const CustomCheckbox = ({ checkboxRef, props }: BPCheckboxProps) => (
  <Checkbox
    sx={{
      '&:hover': { bgcolor: 'transparent' },
    }}
    ref={checkboxRef}
    disableRipple
    color="default"
    disabled={props.disabled}
    checkedIcon={<BpCheckedIcon disabled={props.disabled} />}
    icon={<BpIcon />}
    inputProps={{ 'aria-label': 'Checkbox demo' }}
    {...props}
  />
);

const ForwardCustomCheckbox = forwardRef<HTMLButtonElement>((props, ref) => {
  return <CustomCheckbox props={props} checkboxRef={ref} />;
});
export default ForwardCustomCheckbox;
