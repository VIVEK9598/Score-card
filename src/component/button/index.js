import React from 'react';
import { Button } from '@material-ui/core'

const ButtonContained = ({ type, onSubmit }) => {
    return (
        <div>
            <Button
                onClick={onSubmit}
                type={type}
                variant="contained"
                color="primary">submit
        </Button>
        </div>

    );
}

export default ButtonContained;