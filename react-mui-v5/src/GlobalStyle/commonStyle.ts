// eslint-disable-next-line import/named
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import colors from 'assets/scss/_themes-vars.module.scss';

const useStyles = makeStyles((theme: Theme) => ({
  selectRoot: {
    border: `1px solid ${colors.greySmoke}`,
    borderRadius: '6px',
    height: '46px',
    // padding: '12px 14px 12px 20px',
    backgroundColor: colors.paper,
    fontSize: '16px',
    color: 'white',
    '& .MuiSelect-select': {
      padding: '12px',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.greySmoke,
    },
    // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'rgba(228, 219, 233, 0.25)',
    // },
    // '&:hover .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'rgba(0, 0, 0, 0.87)',
    // },
    // '& .MuiInput-input:focus': {
    //   backgroundColor: colors.paper,
    // },
    '& .MuiSvgIcon-root': {
      // marginRight: '10px',
      fontSize: '26px',
    },
    '& .MuiInput-input': {
      color: colors.darkColor2,
    },

    '&.Mui-disabled': {
      backgroundColor: colors.greySmoke,

      '& .MuiInput-input.Mui-disabled': {
        backgroundColor: colors.greySmoke,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& .MuiSelect-select': {
        backgroundColor: colors.greySmoke,
      },
    },
  },
  inputRoot: {
    '& .MuiOutlinedInput-input': {
      backgroundColor: colors.paper,
      height: '15px',
    },
    '& MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
      backgroundColor: colors.greySmoke,
    },
    '&  .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${colors.greySmoke}`,
    },
    '& .MuiOutlinedInput-input.Mui-disabled': {
      backgroundColor: colors.greySmoke,
    },
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  autocompleteRoot: {
    //height: '46px',
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${colors.greySmoke}`,
    },
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${colors.greySmoke}`,
    },
    '& .MuiSvgIcon-root': {
      // marginRight: '10px',
      fontSize: '24px',
    },
    '& .MuiOutlinedInput-root': {
      height: '46px',
      padding: '0 0 0 5px',
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
      // height: 'auto',
      // padding: '9px',
    },
    '&  .MuiOutlinedInput-root .MuiAutocomplete-input': {
      padding: '5px 4px 8px 6px!important',
    },
    '& .MuiOutlinedInput-root.Mui-disabled': {
      backgroundColor: colors.greySmoke,
    },
    '& .MuiOutlinedInput-root.Mui-disabled .MuiAutocomplete-input': {
      backgroundColor: colors.greySmoke,
    },
  },
  datAndTimeRoot: {
    '& .MuiOutlinedInput-input.Mui-disabled': {
      backgroundColor: colors.greySmoke,
    },
    '& .MuiOutlinedInput-root.Mui-disabled': {
      backgroundColor: colors.greySmoke,
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      //border: `1px solid ${colors.greySmoke}`,
    },
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      // borderColor: '#1976D2!important',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      //borderColor: 'rgba(0, 0, 0, 0.87)',
    },
  },
  menuActiveBorder: {
    '&': {
      position: 'relative',
    },
    '& .MuiListItemButton-root.Mui-selected': {
      width: 'calc(100% - 12px)',
      borderRadius: '6px',
    },
    '&::before': {
      position: 'absolute',
      content: '""',
      top: '0',
      right: '6px',
      width: '6px',
      height: '100%',
      backgroundColor: colors.paper,
      zIndex: '1',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      top: '0',
      right: '0',
      width: '6px',
      height: '100%',
      backgroundColor: colors.warningMain,
      borderRadius: '3px',
    },
  },
  inputSize: {
    height: 46,
  },
  inputDisabled: {
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      backgroundColor: colors.greySmoke,
    },
    '& .MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
      backgroundColor: 'transparent',
    },
  },
  menuPaper: {
    maxHeight: 450,
    maxWidth: 600,
  },
  button: {
    '&.MuiButton-root.Mui-disabled': {
      backgroundColor: colors.greySmoke,
    },
  },

  textArea: {
    '& textarea::placeholder': {
      lineHeight: '64px',
      color: '#A5A5A5',
    },
  },
  errorFormHelperText: {
    '&.MuiFormHelperText-root.Mui-error': {
      marginLeft: '14px',
      color: colors.errorInput,
    },
  },
  errorTextFieldHelperText: {
    '& .MuiFormHelperText-root.Mui-error': {
      marginLeft: '14px',
      color: colors.errorInput,
    },
  },
}));

export default useStyles;
