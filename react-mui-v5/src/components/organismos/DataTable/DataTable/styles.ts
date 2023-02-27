// eslint-disable-next-line import/named
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100px',
  },
  responsivePagination: {
    [theme.breakpoints.down(600)]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up(600)]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  MuiPaginationItemRoot: {
    '& .MuiPaginationItem-root': {
      '&:active': {
        backgroundColor: theme.palette.warning,
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.warning,
        color: theme.palette.success,
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: '26px',
    },
  },
  flexBoxAlignsCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  selectRoot: {
    margin: '8px',
    '& .MuiInputBase-input': {
      fontWeight: 100,
      marginTop: '5px',
    },
    width: '141px',
    border: '1px solid #EDEDED',
    borderRadius: '6px',
    backgroundColor: '#fff',
    fontSize: '16px',
    '& .MuiInput-input:focus': {
      backgroundColor: '#fff',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '10px',
      fontSize: '22px',
    },
  },
}));

export default useStyles;
