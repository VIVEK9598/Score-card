import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@material-ui/core/';


const Form = (props) => {

    // const { name, score, subject } = props
   const handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    
      }
     const handleSubmit = event => {
        event.preventDefault();
        const { data, name, subject, score } = this.state
        let arr = data
        const currentIndex = data.findIndex(d => name === d.name && subject === d.subject)
        if (currentIndex === -1) {
          arr.push({ id: arr.length + 1, name, subject, score })
    
        }
        else {
          arr[currentIndex] = { ...arr[currentIndex], score: parseInt(arr[currentIndex].score, 10) + parseInt(score, 10) }
        }
        this.setState({ data: arr })
    
      }


    const mystyle = {
        margin: '5px'

    }

    return (
        <Container maxWidth="sm">
            <Typography align="center" variant="h6" gutterBottom>
                Fill users details
                    </Typography>

            
        </Container>
    );

}

export default Form;