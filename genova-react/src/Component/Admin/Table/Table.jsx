import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./Table.css";

function createData(nama, nim, email, ktm, lomba) {
  return { nama, nim, email, ktm, lomba };
}

export default function BasicTable({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Transform the provided data into rows for the table
  const rows = data.map((item) =>
    createData(item.name, item.nim, item.email, item.ktm, item.lomba)
  );

  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell align="left">NIM</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">KTM</TableCell>
              <TableCell align="left">Lomba</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.nama}</TableCell>
                  <TableCell align="left">{row.nim}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">
                    <img
                      src={row.ktm}
                      alt="gambar"
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "auto",
                        maxWidth: "100px",
                      }}
                      onClick={() => handleClickOpen(row.ktm)}
                    />
                  </TableCell>
                  <TableCell align="left">{row.lomba}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img src={selectedImage} alt="gambar" style={{ maxWidth: "100%" }} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
