import React, { Component } from 'react';
import Form from './Form';
import TablList from './Table_List';
import { Container, Grid, Typography } from '@material-ui/core/';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })

  }
  handleSubmit = event => {
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
  render() {
    const { name, data, score, subject } = this.state
    return (

      <div className="App">
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Form
                name={name}
                score={score}
                subject={subject}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              {data.length === 0 ? <Typography align="center" variant="h5">Data not available</Typography> : <TablList data={data} />}


            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
