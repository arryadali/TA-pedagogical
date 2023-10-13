import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from './navbar';

function createData(nama, username, kelas, nisn) {
    return { nama, username, kelas, nisn};
  }
  
  const rows = [
    createData('Arrya Dali Lesmana', "arryadali", "5", "1301204292"),
    createData('Aryasatya Okta Pradana', "arysat", "5", "1301010101"),
    createData("Maulana Ihsan", 'maulanaihsan', "5", "1301204222"),
  ];
  

const Biodatasiswa = () => {
  return (
    <section id='biodatasiswa'>
        <Navbar/>
        <div className='font-[poppins] text-center font-bold text-lg'>
            BIODATA SISWA
        </div>

        <div className='w-[80%] h-auto m-auto'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>NAMA</TableCell>
                            <TableCell align="right">USERNAME</TableCell>
                            <TableCell align="right">KELAS</TableCell>
                            <TableCell align="right">NISN</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.nama}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.nama}
                        </TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">{row.kelas}</TableCell>
                            <TableCell align="right">{row.nisn}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </section>
  )
}

export default Biodatasiswa;
