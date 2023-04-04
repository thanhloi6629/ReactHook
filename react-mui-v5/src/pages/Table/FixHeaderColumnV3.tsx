import React from "react";
import {
  Button,
  Link,
  Paper,
  Stack,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import list360 from "./sample";

interface Address {
  streetAddress: string;
  secondaryAddress: string;
  zipCode: string;
  city: string;
  state: string;
}
const list = {
  assessor: [
    {
      statusName: "Chưa khảo sát",
      regionName: "Miền Bắc",
      positionName: "Giám đốc Phát triển Sản phẩm",
      levelName: "E4",
      unitName: "Corp",
      departmentName: "Khối Nhượng quyền",
      divisionName: "Phòng Phát triển Sản phẩm",
      restaurantName: "",
      orderByRespondents: 0,
      staffKey: "0160368",
      staffID: "000151",
      staffName: "Trần Hồng Vương",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: "0977828989",
      email: "vuong.tran@ggg.com.vn",
      surveyObject360: 1,
      superiorID: null,
    },
    {
      statusName: "Chưa khảo sát",
      regionName: "Miền Bắc",
      positionName: "Trưởng bộ phận Phát triển Sản phẩm",
      levelName: "E2.1",
      unitName: "Corp",
      departmentName: "Khối Nhượng quyền",
      divisionName: "Phòng Phát triển Sản phẩm",
      restaurantName: "Bộ phận Phát triển Sản phẩm",
      orderByRespondents: 0,
      staffKey: "0160368",
      staffID: "000165",
      staffName: "Lưu Ngọc Chi",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: "0989981498",
      email: "chi.luu@ggg.com.vn",
      surveyObject360: 3,
      superiorID: null,
    },
    {
      statusName: "Chưa khảo sát",
      regionName: "Miền Bắc",
      positionName: "Chuyên viên Kế toán",
      levelName: "O2",
      unitName: "Corp",
      departmentName: "Khối Tài chính Kế toán",
      divisionName: "Phòng Kế toán",
      restaurantName: "Bộ phận Kế toán Giá thành & Tồn kho",
      orderByRespondents: 0,
      staffKey: "0160368",
      staffID: "002250",
      staffName: "Nguyễn Thị Nhẫn",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: "0902232016",
      email: "nhan.nguyen@ggg.com.vn",
      surveyObject360: 3,
      superiorID: null,
    },
    {
      statusName: "Chưa khảo sát",
      regionName: "Miền Bắc",
      positionName: "Chuyên viên cao cấp Phát triển Sản phẩm (F&B)",
      levelName: "O3",
      unitName: "Corp",
      departmentName: "Khối Nhượng quyền",
      divisionName: "Phòng Phát triển Sản phẩm",
      restaurantName: "",
      orderByRespondents: 0,
      staffKey: "0160368",
      staffID: "007842",
      staffName: "Xiao Zhenglin",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: "0962767666",
      email: "xiao.zhenglin@ggg.com.vn",
      surveyObject360: 3,
      superiorID: null,
    },
    {
      statusName: "Chưa khảo sát",
      regionName: "Miền Bắc",
      positionName: "Chuyên gia Phát triển Sản phẩm",
      levelName: "E1",
      unitName: "Corp",
      departmentName: "Khối Nhượng quyền",
      divisionName: "Phòng Phát triển Sản phẩm",
      restaurantName: "",
      orderByRespondents: 0,
      staffKey: "0160368",
      staffID: "008067",
      staffName: "Noda Toshiro",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: "0339247940",
      email: "noda.toshiro@ggg.com.vn",
      surveyObject360: 3,
      superiorID: null,
    },
  ],
  personEvaluated: [
    {
      regionName: "Miền Bắc",
      positionName: "Trưởng nhóm Lập trình PHP (B2C)",
      levelName: "E2.1",
      unitName: "Corp",
      departmentName: "Phòng Giải pháp Công nghệ số",
      divisionName: "Phòng Lập trình",
      restaurantName: "Nhóm Lập trình PHP (B2C)",
      orderByRespondents: 0,
      staffKey: null,
      staffID: "0160368",
      staffName: "Nguyễn Đức Toàn",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: null,
      email: null,
      surveyObject360: 0,
      superiorID: null,
    },
    {
      regionName: "Miền Bắc",
      positionName: "Trưởng nhóm Lập trình PHP (B2C)",
      levelName: "E2.1",
      unitName: "Corp",
      departmentName: "Phòng Giải pháp Công nghệ số",
      divisionName: "Phòng Lập trình",
      restaurantName: "Nhóm Lập trình PHP (B2C)",
      orderByRespondents: 0,
      staffKey: null,
      staffID: "0160368",
      staffName: "Nguyễn Đức Toàn",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: null,
      email: null,
      surveyObject360: 0,
      superiorID: null,
    },
    {
      regionName: "Miền Bắc",
      positionName: "Trưởng nhóm Lập trình PHP (B2C)",
      levelName: "E2.1",
      unitName: "Corp",
      departmentName: "Phòng Giải pháp Công nghệ số",
      divisionName: "Phòng Lập trình",
      restaurantName: "Nhóm Lập trình PHP (B2C)",
      orderByRespondents: 0,
      staffKey: null,
      staffID: "0160368",
      staffName: "Nguyễn Đức Toàn",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: null,
      email: null,
      surveyObject360: 0,
      superiorID: null,
    },
    {
      regionName: "Miền Bắc",
      positionName: "Trưởng nhóm Lập trình PHP (B2C)",
      levelName: "E2.1",
      unitName: "Corp",
      departmentName: "Phòng Giải pháp Công nghệ số",
      divisionName: "Phòng Lập trình",
      restaurantName: "Nhóm Lập trình PHP (B2C)",
      orderByRespondents: 0,
      staffKey: null,
      staffID: "0160368",
      staffName: "Nguyễn Đức Toàn",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: null,
      email: null,
      surveyObject360: 0,
      superiorID: null,
    },
    {
      regionName: "Miền Bắc",
      positionName: "Trưởng nhóm Lập trình PHP (B2C)",
      levelName: "E2.1",
      unitName: "Corp",
      departmentName: "Phòng Giải pháp Công nghệ số",
      divisionName: "Phòng Lập trình",
      restaurantName: "Nhóm Lập trình PHP (B2C)",
      orderByRespondents: 0,
      staffKey: null,
      staffID: "0160368",
      staffName: "Nguyễn Đức Toàn",
      regionID: null,
      unitID: null,
      departmentID: null,
      divisionID: null,
      restaurantID: null,
      positionID: null,
      levelID: null,
      phone: null,
      email: null,
      surveyObject360: 0,
      superiorID: null,
    },
  ],
};

const tableContainerSx: SxProps = {
  border: "1px solid rgba(128,128,128,0.4)",
  // width: "max-content",
  width: 400,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 4,
  borderRadius: 2,
  maxHeight: 500,
  overFlow: "auto",
};

const FixHeader = () => {
  return (
    <div>
      <TableContainer component={Paper} sx={tableContainerSx}>
        <Table stickyHeader={true}>
          <TableHead
            sx={{
              "& .MuiTableCell-stickyHeader": {
                backgroundColor: "primary.main",
              },
            }}
          >
            <TableRow>
              <TableCell
                // scope="header"
                style={{
                  position: "sticky",
                  left: 0,
                  background: "white",
                  zIndex: 900,
                }}
              >
                MaNV
              </TableCell>
              <TableCell
                // scope="header"
                style={{
                  position: "sticky",
                  left: "88px",
                  background: "white",
                  zIndex: 900,
                  backgroundColor: "white",
                }}
              >
                Ten NV
              </TableCell>
              <TableCell scope="header">Vùng miền</TableCell>
              <TableCell scope="header">MaNV-NDG</TableCell>
              <TableCell scope="header">Ten NV_NDG</TableCell>
              <TableCell scope="header">Vùng miền -NDG</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& tr:nth-of-type(2n+1)": {
                backgroundColor: "grey.100",
              },
            }}
          >
            {list360.content?.map((address, index) => (
              <TableRow key={address.personEvaluated.staffID}>
                <TableCell
                  scope="row"
                  component="th"
                  style={{
                    position: "sticky",
                    left: 0,
                    background: "white",
                    zIndex: 800,
                    backgroundColor: "green",
                  }}
                >
                  {address.personEvaluated.staffID}
                </TableCell>
                <TableCell
                  scope="row"
                  style={{
                    position: "sticky",
                    left: "88px",
                    background: "white",
                    zIndex: 800,
                    backgroundColor: "green",
                  }}
                >
                  {address.personEvaluated.staffName}
                </TableCell>
                <TableCell scope="row">
                  {address.personEvaluated.departmentName}
                </TableCell>

                <TableCell scope="row">{address.assessor.staffID}</TableCell>
                <TableCell scope="row">{address.assessor.staffName}</TableCell>
                <TableCell scope="row">
                  {address.assessor.departmentName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FixHeader;
