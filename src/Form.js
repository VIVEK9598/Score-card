import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core/';


const Form = (props) => {
    const { name, score, subject } = props



    const mystyle = {
        margin: '5px'

    }

    return (

        <React.Fragment>

            <Container maxWidth="sm">
                <Typography align="center" variant="h6" gutterBottom>
                    Fill users details
                    </Typography>

                <form onSubmit={props.onSubmit} autoComplete="off">
                    <TextField
                        required
                        style={mystyle}
                        id="user"
                        label="Name:"
                        variant="outlined"
                        name="name"
                        value={name || ""}
                        onChange={props.onChange} /><br />
                    <TextField
                        required
                        style={mystyle}
                        id="subject"
                        label="Subject:"
                        variant="outlined"
                        name="subject"
                        value={subject || ""}
                        onChange={props.onChange} /><br />
                    <TextField
                        required
                        style={mystyle}
                        type="number"
                        id="score"
                        label="Score:"
                        variant="outlined"
                        name="score"
                        value={score || ""}
                        onChange={props.onChange} /><br />
                    <div style={{ textAlign: "center" }}><Button type="submit" variant="contained" color="primary">
                        Submit
                        </Button></div>
                </form>
            </Container>
        </React.Fragment>
    );

}

export default Form;