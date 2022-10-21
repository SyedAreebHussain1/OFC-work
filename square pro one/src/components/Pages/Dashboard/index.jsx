import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import "./style.css"
const Dashboard = (props) => {


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Usman Khan', 'L-265', 16.0, 49, 3.9),
        createData('Areeb Hussain', 'L-195', 6.0, 24, 4.0),
        createData('Saad Khan', 'L-139', 9.0, 37, 4.3),
        createData('Humza Junaid', 'L-395', 16.0, 24, 6.0),
        createData('Aqib Hussain', 'L-159', 3.7, 67, 4.3),
    ];




    return (
        <div className="mainDashboard">
            {/* <div>Dashboard</div> */}
            <div>
                <br />
                <div className="ratingBox flexs">
                    <div className="todaySale">
                        <p style={{ color: 'gray', fontSize: '10px', width: '50%' }}>Today's Sales</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px', width: '55%' }}>$53,000</h5>
                        <p style={{ color: 'green', width: '35%' }}>+30%</p>
                    </div>
                    <div className="todayUser">
                        <p style={{ color: 'gray', fontSize: '10px', width: '55%' }}>Today's User</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px', width: '65%' }}>3,200</h5>
                        <p style={{ color: 'green', width: '45%' }}>+20%</p>
                    </div>
                    <div className="newClient">
                        <p style={{ color: 'gray', fontSize: '10px', width: '40%' }}>New Client</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px', width: '40%' }}>+1,200</h5>
                        <p style={{ color: 'red', width: '35%' }}>-20%</p>
                    </div>
                    <div className="newOrders">
                        <p style={{ color: 'gray', fontSize: '10px', width: '50%' }}>New Orders</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px', width: '90%' }}>$13,200</h5>
                        <p style={{ color: 'green', width: '40%' }}>20%</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Plot no</StyledTableCell>
                                <StyledTableCell align="right">Location&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <div className="activeUser flexs">
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Dashboard