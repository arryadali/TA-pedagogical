import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../navbar';
import TablePagination from '@mui/material/TablePagination';


function createData(nama, username, kelas, nisn) {
    return { nama, username, kelas, nisn};
  }
  
  const rows = [
    createData('Nadhira', "nadhira", "5C", "xxxxxxxxx"),
    createData('Adristi Ogya Maharani', "aristi", "5C", "xxxxxxxxx"),
    createData("Muhamad Arfan Mahendra", 'arfan', "5C", "xxxxxxxxx"),
    createData("Naufal Alkhairi", 'naufal', "5C", "xxxxxxxxx"),
    createData("Kiani Putri Subhan", 'kiani', "5C", "xxxxxxxxx"),
    createData("Hisyam Ali Ridwan", 'hisyam', "5C", "xxxxxxxxx"),
    createData("Nabil Alauna Kamil", 'nabil', "5C", "xxxxxxxxx"),
    createData("Paiz Paizi", 'paiz', "5C", "xxxxxxxxx"),
    createData("Sandra Faradilla Alamsyah", 'sandra', "5C", "xxxxxxxxx"),
    createData("Calista", 'calista', "5C", "xxxxxxxxx"),
    createData("Nabyla Putri Alya Gunawan", 'nabyla', "5C", "xxxxxxxxx"),
    createData("Enzo Kaleb Rimaya Panggabean", 'enzo', "5C", "xxxxxxxxx"),
    createData("Rafka Khoerul Azam", 'rafka', "5C", "xxxxxxxxx"),
    createData("Setiti Firdausi", 'setiti', "5C", "xxxxxxxxx"),
    createData("M. Radhitya Priatna", 'radhitya', "5C", "xxxxxxxxx"),
    createData("Arif Fadhil Maulana", 'arif', "5C", "xxxxxxxxx"),
    createData("Rakha Muhammad Hermawan", 'rakha', "5C", "xxxxxxxxx"),
    createData("Kayla Adhisti Putri", 'kayla', "5C", "xxxxxxxxx"),
    createData("Athaya Mahardika Sadeli", 'athaya', "5C", "xxxxxxxxx"),
    createData("Latisya Amora Juniard", 'latisya', "5C", "xxxxxxxxx"),
    createData("Vanya Elmina Kalma", 'vanya', "5C", "xxxxxxxxx"),
    createData("Muhammad Akhtar Aldirayyan", 'akhtar', "5C", "xxxxxxxxx"),
  ];

  const rowsPerPage = 10;
  

const Biodatasiswa = () => {
    const [page, setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const rowsToDisplay = rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
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
                            <TableCell>NO</TableCell>
                            <TableCell>NAMA</TableCell>
                            <TableCell>USERNAME</TableCell>
                            <TableCell>KELAS</TableCell>
                            <TableCell>NO ABSEN</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rowsToDisplay.map((row, index) => (
                            <TableRow
                            key={row.nama}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                            {(page * rowsPerPage) + index + 1}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.nama}
                            </TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.kelas}</TableCell>
                                <TableCell>{row.nisn}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
            />
        </div>

        
    </section>
  )
}

export default Biodatasiswa;
