// eslint-disable-next-line import/named
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';
import { Box, padding } from '@mui/system';
import BpCheckedIcon from './BpCheckedIcon';
import BpIcon from './BPIcon';
interface BPCheckbox extends CheckboxProps {
  label?: string;
  className?: string;
  padding?: string;
  disabled?: boolean;
  margin?: string;
}

const CheckBoxBlack = (props: BPCheckbox) => {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          padding: props.padding,
          margin: `${props.margin}!important`,
        }}
        className={props.className}
        control={
          <Checkbox
            sx={{
              '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            disabled={props.disabled}
            checkedIcon={<BpCheckedIcon disabled={props.disabled} />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
          />
        }
        label={
          <Box
            component="span"
            fontSize={16}
            color={props.disabled ? 'gray' : 'black'}
            height={26}
            alignItems="center"
            display="flex"
            lineHeight={0}
          >
            {props.label}
          </Box>
        }
      />
    </FormGroup>
  );
};

export default CheckBoxBlack;
