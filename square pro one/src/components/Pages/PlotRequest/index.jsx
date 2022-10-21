import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const PlotRequest = () => {

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

    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    // }

    function createData(name, agency, agent, project, plotcatergory, plotPosition, plotSector, plotStreet, plotType, statuss, action) {
        return { name, agency, agent, project, plotcatergory, plotPosition, plotSector, plotStreet, plotType, statuss, action };
    }

    const rows = [
        createData('Usman Khan', 'ST', 'Agent', 'Hussain', '100 sq. yd', 'PARK FACING', 'A', '-', '-', 'UNPAID',),
        createData('Shan Ali', 'ST', 'Agent', 'Hussain', '-', 'PARK FACING', 'A', '-', '-', 'UNPAID',),
        createData('Hassan Khan', 'ST', 'Agent', 'Hussain', '120 sq. yd', 'ROAD FACING', 'B', '-', 'residential', 'PENDING',),
        createData('Mian Muhammad', 'ST', 'Agent', 'Hussain', '100 sq. yd', 'PARK FACING', 'D', '-', '-', 'UNPAID',),
        createData('Usman Khan', 'ST', 'Agent', 'Hussain', '100 sq. yd', 'ROAD FACING', 'A', '-', 'residential', 'ACCEPTED',),
        createData('Usman Khan', 'ST', 'Agent', 'Hussain', '100 sq. yd', 'ROAD FACING', 'A', '-', '-', 'ACCEPTED',),
        createData('Shan Ali', 'ST', 'Agent', 'Hussain', '100 sq. yd', 'PARK FACING', 'A', '-', '-', 'UNPAID',),
        createData('Hassan Khan', 'ST', 'Agent', 'Hussain', '120 sq. yd', 'PARK FACING', 'B', '-', '-', 'UNPAID',),
        createData('Mian Muhammad', 'ST', 'Agent', 'Hussain', '100 sq. yd', 'ROAD FACING', 'D', '-', '-', 'PENDING',),
        // createData('Areeb Hussain', 'L-195', 6.0, 24, 4.0),
        // createData('Saad Khan', 'L-139', 9.0, 37, 4.3),
        // createData('Humza Junaid', 'L-395', 16.0, 24, 6.0),
        // createData('Aqib Hussain', 'L-159', 3.7, 67, 4.3),
    ];

    return (
        <div>
            {/* <h1>PlotRequest</h1> */}
        
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>PLOT REQUEST LIST</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="right">Agency</StyledTableCell>
                                <StyledTableCell align="right">Agent</StyledTableCell>
                                <StyledTableCell align="right">Project</StyledTableCell>
                                <StyledTableCell align="right">Plot Catergory</StyledTableCell>
                                <StyledTableCell align="right">Plot Position</StyledTableCell>
                                <StyledTableCell align="right">Plot Sector</StyledTableCell>
                                <StyledTableCell align="right">Plot Street</StyledTableCell>
                                <StyledTableCell align="right">Plot Type</StyledTableCell>
                                <StyledTableCell align="right">Status</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.agency}</StyledTableCell>
                                    <StyledTableCell align="right">{row.agent}</StyledTableCell>
                                    <StyledTableCell align="right">{row.project}</StyledTableCell>
                                    <StyledTableCell align="right">{row.plotcatergory}</StyledTableCell>
                                    <StyledTableCell align="right">{row.plotPosition}</StyledTableCell>
                                    <StyledTableCell align="right">{row.plotSector}</StyledTableCell>
                                    <StyledTableCell align="right">{row.plotStreet}</StyledTableCell>
                                    <StyledTableCell align="right">{row.plotType}</StyledTableCell>
                                    <StyledTableCell align="right">{row.statuss}</StyledTableCell>
                                    <StyledTableCell align="right">{row.action}<button>Update</button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
                <br />
            </div>
        </div>
    )
}
export default PlotRequest