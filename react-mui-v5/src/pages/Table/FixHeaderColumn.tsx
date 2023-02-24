import React from 'react'
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
  
  interface Address {
    streetAddress: string;
    secondaryAddress: string;
    zipCode: string;
    city: string;
    state: string;
  }

  const addresses: Array<Address> = [];

    for (let i = 0; i < 20; i++) {
    addresses.push({
        streetAddress: faker.address.streetAddress(),
        secondaryAddress: faker.address.secondaryAddress(),
        zipCode: faker.address.zipCode(),
        city: faker.address.city(),
        state: faker.address.state()
    });
    }

    const tableContainerSx: SxProps = {
        border: "1px solid rgba(128,128,128,0.4)",
        // width: "max-content",
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 4,
        borderRadius: 2,
        maxHeight: 500,
        overFlow: 'auto',
      };
      
      
const FixHeader = () => {
  return (
    <div>
       <TableContainer
        component={Paper}
        sx={tableContainerSx}
      >
        <Table stickyHeader={true} >
            
            <TableHead sx={{ "& .MuiTableCell-stickyHeader": {backgroundColor: "primary.main"} }}>
            <TableRow>
                <TableCell  
                  scope="header" 
                  style={{
                    position: 'sticky',
                    left: 0,
                    background: 'white',
                    zIndex: 900,
                  }}>
                    Street Address
                  </TableCell>
                <TableCell scope="header">Zip Code</TableCell>
                <TableCell scope="header">City</TableCell>
                <TableCell scope="header">State</TableCell>
                </TableRow>
            </TableHead>
            <TableBody
              sx={{
                "& tr:nth-of-type(2n+1)": {
                  backgroundColor: "grey.100",
                },
              }}
            >
                {addresses.map((address) => (
              <TableRow key={address.streetAddress}>
                <TableCell scope="row"  
                    component="th"
                    style={{
                        position: 'sticky',
                        left: 0,
                        background: 'white',
                        zIndex: 800,
                        backgroundColor: 'green',
                    }}>
                  <Stack direction="column">
                    <div>{address.streetAddress}</div>
                    <div>{address.secondaryAddress}</div>
                  </Stack>
                </TableCell>
                <TableCell scope="row">
                  <Link
                    color="secondary"
                    href={`https://www.google.com/search?q=zip+code+${address.zipCode}`}
                    target="_blank"
                  >
                    {address.zipCode}
                  </Link>
                </TableCell>
                <TableCell scope="row">{address.city}</TableCell>
                <TableCell scope="row">
                  <Button
                    sx={{width: 200}}
                    variant="outlined"
                    color="secondary"
                    href={`https://www.google.com/maps/place/${address.state}`}
                    target="_blank"
                  >
                    {address.state}
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default FixHeader
