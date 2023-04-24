import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { GridFooterContainer, GridPagination } from "@mui/x-data-grid";
import PaginationComponent from "components/organismos/DataTable/Pagination";
type TypePaginationComponent = {
  onChangePage?: (page: number) => void;
  onChangePageSize?: (size: number) => void;
  sizes?: number[];
  pageSize?: number;
  page?: number;
  totalPage?: number;
  totalItem?: number;
};
const CustomFooterDataGrid: React.FC<TypePaginationComponent> = ({
  onChangePage = () => {},
  onChangePageSize = () => {},
  sizes = [10, 20, 30],
  pageSize = 10,
  page = 1,
  totalPage,
  totalItem,
}) => {
  const handleChangePageSize = (pageSizeNow: number) => {
    if (onChangePageSize) onChangePageSize(Number(pageSizeNow));
  };
  const handleChangePage = (pageNow: number) => {
    if (onChangePage) onChangePage(Number(pageNow));
  };
  return (
    <Box sx={{ width: "100% " }}>
      <GridFooterContainer
        sx={{
          visibility: "visible!important",
          width: "100%!important",
          position: "absolute",
          height: "auto!important",
          left: 0,
          bottom: "-90px",
          borderTop: "none",
        }}
      >
        <PaginationComponent
          sizes={sizes}
          onChangePage={handleChangePage}
          onChangePageSize={handleChangePageSize}
          pageSize={pageSize}
          page={page}
          totalItem={totalItem}
          totalPage={totalPage}
        />
        <GridPagination />
      </GridFooterContainer>
    </Box>
  );
};

export default React.memo(CustomFooterDataGrid);
