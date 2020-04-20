import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core/';



const TablList = (props) => {

    const { data } = props

    return (
        <Table>
            <TableHead>
                <TableRow hover={true} >
                    <TableCell component="th" >User name</TableCell >
                    <TableCell component="th" >Subject</TableCell >
                    <TableCell component="th" >Score</TableCell >
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(d => {
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

export default TablList;