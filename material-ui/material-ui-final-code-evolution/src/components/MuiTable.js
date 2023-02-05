import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell align="center">IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell align="center">{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const Data = [
  {
    id: 1,
    first_name: "Charity",
    last_name: "Stiling",
    email: "cstiling0@yellowpages.com",
    gender: "Female",
    ip_address: "79.246.0.77",
  },
  {
    id: 2,
    first_name: "Elisabetta",
    last_name: "Savatier",
    email: "esavatier1@1und1.de",
    gender: "Female",
    ip_address: "217.96.117.79",
  },
  {
    id: 3,
    first_name: "Matthew",
    last_name: "McAuliffe",
    email: "mmcauliffe2@xrea.com",
    gender: "Genderqueer",
    ip_address: "160.152.195.130",
  },
  {
    id: 4,
    first_name: "Roberta",
    last_name: "Nattrass",
    email: "rnattrass3@nbcnews.com",
    gender: "Female",
    ip_address: "138.232.170.7",
  },
  {
    id: 5,
    first_name: "Lorettalorna",
    last_name: "Woolaghan",
    email: "lwoolaghan4@livejournal.com",
    gender: "Female",
    ip_address: "189.99.13.120",
  },
  {
    id: 6,
    first_name: "Carina",
    last_name: "Daugherty",
    email: "cdaugherty5@parallels.com",
    gender: "Female",
    ip_address: "98.130.50.209",
  },
  {
    id: 7,
    first_name: "Calida",
    last_name: "Winslet",
    email: "cwinslet6@feedburner.com",
    gender: "Female",
    ip_address: "242.215.253.21",
  },
  {
    id: 8,
    first_name: "Dulcie",
    last_name: "Blackston",
    email: "dblackston7@loc.gov",
    gender: "Female",
    ip_address: "176.240.27.22",
  },
  {
    id: 9,
    first_name: "Tom",
    last_name: "Parke",
    email: "tparke8@stumbleupon.com",
    gender: "Male",
    ip_address: "172.101.54.53",
  },
  {
    id: 10,
    first_name: "Mona",
    last_name: "Houchin",
    email: "mhouchin9@sciencedirect.com",
    gender: "Polygender",
    ip_address: "111.30.138.86",
  },
];
