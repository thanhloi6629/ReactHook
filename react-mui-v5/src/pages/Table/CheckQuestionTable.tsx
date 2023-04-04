import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
interface Column {
  id: "id" | "isvalid" | "questionContent" | "actionType" | "errorMessage";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
export interface ICheckFileBeforeUpload {
  id: string;
  questionContent: string;
  isvalid: boolean;
  actionType: "ADD" | "UPDATE";
  errorMessage: string;
}
const rowsDataDefault = [
  {
    id: "",
    questionContent: "Nội dung Upload 01",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 02",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 03",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 04",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 05",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 06",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 07",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 08",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 09",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 10",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 11",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 12",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
  {
    id: "",
    questionContent: "Nội dung Upload 13",
    isvalid: true,
    actionType: "ADD",
    errorMessage: "",
  },
];
const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "questionContent", label: "Câu hỏi", minWidth: 100 },
  {
    id: "isvalid",
    label: "Hợp lệ",
    minWidth: 170,
    align: "right",
  },

  {
    id: "actionType",
    label: "Trạng thái",
    minWidth: 170,
    align: "right",
  },
  {
    id: "errorMessage",
    label: "Ghi Chú",
    minWidth: 170,
    align: "right",
  },
];
const CheckQuestionTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //   const [rowsData, setRowsData] =
  //     useState<ICheckFileBeforeUpload[]>(rowsDataDefault);

  const format = (value: string | boolean, columnType: string) => {
    if (columnType === "id") {
      return value ? value : "Chưa có";
    }
    if (columnType === "isvalid") {
      return value ? "Hợp lệ" : "Không hợp lệ";
    }
    if (columnType === "actionType") {
      if (value === "ADD") {
        return "Thêm mới";
      }
      if (value === "UPDATE") {
        return "Cập nhật";
      }
      return value;
    }
    if (columnType === "errorMessage") {
      return value ? value : "Không";
    }

    return value;
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            <TableBody>
              {rowsDataDefault
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`${row.id}_${index}`}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Typography
                              fontSize={"14px"}
                              color={`${!row.isvalid ? "red" : "black"}`}
                            >
                              {format(value, column.id)}
                            </Typography>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rowsDataDefault.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Hiển thị:"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default CheckQuestionTable;
