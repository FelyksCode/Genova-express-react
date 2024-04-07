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
import Modal from "../Modal/Modal";
import "./Table.css";
import { anggota } from "../Data/Data";

export default function BasicTable({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openTeamModal, setOpenTeamModal] = React.useState(false);
  const [openMemberModal, setOpenMemberModal] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState(null);
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [teamMembers, setTeamMembers] = React.useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData =
    rowsPerPage === -1
      ? data
      : data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleTeamClick = (teamName) => {
    setSelectedTeam(teamName);
    const members = data.filter((member) => member.team_name === teamName);

    setTeamMembers(members[0].data.members);
    setOpenTeamModal(true);
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setOpenMemberModal(true);
  };

  return (
    <div className="Table">
      <div>
        <TableContainer
          component={Paper}
          style={{
            boxShadow: "0px 13px 20px 0px #80808029",
            maxHeight: 400,
          }}
          className="overflow-scroll"
        >
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Team Name</TableCell>
                <TableCell align="center">Line Ketua</TableCell>
                <TableCell align="center">Sport</TableCell>
              </TableRow>
            </TableHead>

            <TableBody style={{ color: "white" }}>
              {paginatedData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    style={{ width: "33.33%" }}
                    onClick={() => handleTeamClick(row.team_name)}
                    className="cursor-pointer"
                  >
                    {row.team_name}
                  </TableCell>
                  <TableCell align="center" style={{ width: "33.33%" }}>
                    {row.line_id}
                  </TableCell>
                  <TableCell align="center" style={{ width: "33.33%" }}>
                    {row.data.races.race_name}
                  </TableCell>
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

        <Dialog open={openTeamModal} onClose={() => setOpenTeamModal(false)}>
          <DialogContent>
            <Modal
              open={openTeamModal}
              onClose={() => setOpenTeamModal(false)}
              title={selectedTeam}
              content={
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Nama</TableCell>
                        <TableCell align="center">NIM</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">KTM</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {teamMembers.map((member, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          onClick={() => handleMemberClick(member)}
                        >
                          <TableCell align="center">{member.name}</TableCell>
                          <TableCell align="center">{member.nim}</TableCell>
                          <TableCell align="center">{member.email}</TableCell>
                          <TableCell align="center">
                            <img
                              src={member.ktm}
                              alt="KTM"
                              style={{ cursor: "pointer" }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              }
            />
          </DialogContent>
        </Dialog>

        <Dialog
          open={openMemberModal}
          onClose={() => setOpenMemberModal(false)}
        >
          <DialogContent>
            {selectedMember && (
              <Modal
                open={openMemberModal}
                onClose={() => setOpenMemberModal(false)}
                title={selectedMember.nama}
                content={<img src={selectedMember.ktm} alt="KTM" />}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
