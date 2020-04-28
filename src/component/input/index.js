import React from 'react';
import { TextField } from '@material-ui/core';

const Input = ({ type, id, label, name, onChange, value }) => {
    const mystyle = {
        margin: '5px'
    }
    return (
        <div>
            <TextField
                value={value}
                onChange={onChange}
                type={type}
                style={mystyle}
                id={id}
                label={label}
                variant="outlined"
                name={name} />
        </div>

    );
}

export default Input;