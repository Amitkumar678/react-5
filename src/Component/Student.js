import { useContext } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import { ContextData } from "./StudentContext"


export default function BasicTable() {
  const [data] = useContext(ContextData)
 

  return (
    <div className='containertable'>
    <h2>Student List</h2>
    <NavLink className={'addstudent1'} to='/addstudent' style={()=>{return {color:"black",textDecoration:"none",float:"right",fontSize:"30px"}}} >AddStudent</NavLink>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{""}
              
              <NavLink to={`/student/${row.id}`}>Edit</NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


