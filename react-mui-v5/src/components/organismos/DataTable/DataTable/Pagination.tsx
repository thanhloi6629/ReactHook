import {
  Box,
  FormControl,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { FunctionComponent } from 'react';
import useStyles from './styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type TypePaginationComponent = {
  onChangePage?: (page: number) => void;
  onChangePageSize?: (size: number) => void;
  sizes?: number[];
  pageSize?: number;
  page?: number;
  totalPage?: number;
  totalItem?: number;
};

const PaginationComponent: FunctionComponent<TypePaginationComponent> = ({
  onChangePage = () => {},
  onChangePageSize = () => {},
  sizes = [10, 20, 30],
  pageSize = 10,
  page = 1,
  totalPage = 0,
  totalItem = 1,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(600));
  const classes = useStyles(theme);

  const handleChangePageSize = (pageSizeNow: number) => {
    if (onChangePageSize) onChangePageSize(Number(pageSizeNow || 10));
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, pageNow: number) => {
    if (onChangePage) onChangePage(Number(pageNow));
  };

  return (
    <>
      <Paper sx={{ minHeight: '4rem', mt: 3 }} className={`${classes.responsivePagination}`}>
        <Box className={`${classes.flexBoxAlignsCenter}`} px={1.8}>
          <Typography
            variant="h5"
            sx={{
              px: '20px',
              '&': {
                fontWeight: 100,
              },
              fontSize: '14px',
            }}
          >
            Hiển thị
          </Typography>
          <FormControl size="small">
            <Select
              className={classes.selectRoot}
              sx={{
                width: '140px',
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              disableUnderline
              value={pageSize}
              IconComponent={ExpandMoreIcon}
              onChange={(event) => handleChangePageSize(event.target.value as number)}
            >
              {sizes.map((size: number) => (
                <MenuItem key={size} value={size}>
                  {size} kết quả
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Stack>
            <Pagination
              count={totalPage}
              page={page}
              onChange={handleChangePage}
              shape="rounded"
              color="primary"
              className={classes.MuiPaginationItemRoot}
              size={isSmallScreen ? 'small' : 'medium'}
            />
          </Stack>
        </Box>
      </Paper>
    </>
  );
};

export default PaginationComponent;
