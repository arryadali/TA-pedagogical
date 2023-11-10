import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../navbar';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';

    
  

const Biodatasiswa = () => {
    const [page, setPage] = useState(0);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/signup')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const rowsPerPage = 10;

    const rowsToDisplay = students.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
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
                                <TableCell>{row.absen}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={students.length}
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
