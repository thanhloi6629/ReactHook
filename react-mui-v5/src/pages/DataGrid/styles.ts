// eslint-disable-next-line import/named
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100px',
  },
  // responsivePagination: {
  //   [theme.breakpoints.down(600)]: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //   },
  //   [theme.breakpoints.up(600)]: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //   },
  // },
  MuiPaginationItemRoot: {
    '& .MuiPaginationItem-root': {
      '&:active': {
        // backgroundColor: theme.palette.yellowMain.dark,
        backgroundColor: '#F0B71C',

      },
      '&.Mui-selected': {
        // backgroundColor: theme.palette.yellowMain.dark,
        // color: theme.palette.darkColor.main,

        backgroundColor: '#F0B71C',
        color: '#434243',
      },
    },
  },
  flexBoxAlignsCenter: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
