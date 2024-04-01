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

  // Menentukan jumlah data yang akan ditampilkan
  const paginatedData =
    rowsPerPage === -1
      ? data
      : data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="Table">
      <div>
        <TableContainer
          component={Paper}
          style={{
            boxShadow: "0px 13px 20px 0px #80808029",
            maxHeight: 400, // Set maksimum tinggi TableContainer
            overflow: "auto", // Menambahkan scroll jika konten melebihi tinggi maksimum
          }}
        >
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nama</TableCell>
                <TableCell align="left">NIM</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">KTM</TableCell>
                <TableCell align="left">Lomba</TableCell>
              </TableRow>
            </TableHead>

            <TableBody style={{ color: "white" }}>
              {paginatedData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nama}
                  </TableCell>
                  <TableCell align="left">{row.nim}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">
                    <div
                      style={{
                        position: "relative",
                        width: "100px",
                        height: "auto",
                      }}
                    >
                      <img
                        src={row.ktm}
                        alt="gambar"
                        style={{
                          cursor: "pointer",
                          width: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          maxHeight: "100px", // Set maksimum tinggi gambar
                        }}
                        onClick={() => handleClickOpen(row.ktm)}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          display: "none",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => handleClickOpen(row.ktm)}
                      >
                        <span
                          style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "bold",
                            textAlign: "center",
                            display: "block",
                          }}
                        >
                          Click to Enlarge
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="left">{row.lomba}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <img
              src={selectedImage}
              alt="gambar"
              style={{ maxWidth: "100%" }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
