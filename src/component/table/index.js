import React from 'react';
import {Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core';

const TableList = ({ListData}) => {
    return (

        <Table>
            <TableHead>
                <TableRow hover={true} >
                    <TableCell component="th" ><b>User name</b></TableCell >
                    <TableCell component="th" ><b>Subject</b></TableCell >
                    <TableCell component="th" ><b>Score</b></TableCell >
                </TableRow>
            </TableHead>
            <TableBody>
                {ListData.map(d => {
                    return (
                        <TableRow hover={true} key={d.id}>
                            <TableCell component="td">
                                {d.name}
                            </TableCell>
                            <TableCell component="td">
                                {d.subject}
                            </TableCell>
                            <TableCell component="td">
                                {d.score}
                            </TableCell>
                        </TableRow>
                    )
                })}

            </TableBody>
        </Table>
    );
}

export default TableList;