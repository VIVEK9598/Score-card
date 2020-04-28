import React from 'react';
import { Typography, Container } from '@material-ui/core';
import ButtonContained from '../../component/button/index';
import Input from '../../component/input/index';

const Form = ({ formData, onChange, onSubmit }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <Container maxWidth="sm">
                <Typography align="center" variant="h6" >Fill the  student details </Typography>

                <Input
                    value={formData.name||""}
                    type="text"
                    name="name"
                    id="name"
                    label="Name"
                    onChange={onChange}
                />
                <Input
                    value={formData.subject||""}
                    type="text"
                    name="subject"
                    id="subject"
                    label="Subject"
                    onChange={onChange}
                />
                <Input
                    value={formData.score||""}
                    type="number"
                    name="score"
                    id="score"
                    label="Score"
                    onChange={onChange}
                />
                <ButtonContained
                    onSubmit={onSubmit}
                    type="submit"
                />

            </Container>
        </div>
    );
}

export default Form;