import React from 'react';
import TableList from '../../component/table';
import { DataContext } from '../../DataContextProvider';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';


const StudentList = () => {
    const { ListData } = React.useContext(DataContext);
    const history = useHistory()

    const handleAdd = () => {
        history.push("/form ")
    }
    return (
        <div style={{ textAlign: "right" }}>
            <Button onClick={handleAdd} variant="contained" color="primary">add new student</Button>
            {ListData.length === 0 ? <Typography align="center" variant="h4">Data not available</Typography> :
                <TableList
                    ListData={ListData}
                />}

        </div>
    );
}

export default StudentList;