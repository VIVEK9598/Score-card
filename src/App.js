import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Container, Grid, Typography, TextField, Button, Box } from '@material-ui/core/';

import TablList from './Table_List';
import { formSchema } from './formSchema'

const App = () => {
  const [data, setData] = useState([])
  const mystyle = {
    margin: '5px'
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Formik
            initialValues={{ name: '', score: '', subject: '' }}
            validationSchema={formSchema}
            onSubmit={(values, { setSubmitting }) => {
              let arr = []
              const currentIndex = data.findIndex(d => values.name === d.name && values.subject === d.subject)
              if (currentIndex === -1) {
                arr.push({ id: data.length + 1, name: values.name, subject: values.subject, score: values.score })
              }
              else {
                arr[currentIndex] = { ...data[currentIndex], score: parseInt(data[currentIndex].score, 10) + parseInt(values.score, 10) }
              }
              setData(arr)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Grid item md={6} xs={12}>
                <Form onSubmit={handleSubmit} autoComplete="off" noValidate>
                  <TextField
                    required
                    style={mystyle}
                    id="user"
                    label="Name:"
                    variant="outlined"
                    name="name"
                    value={values.name || ""}
                    onChange={handleChange}
                    error={touched.name && errors.name}
                    errorText={errors.name} />
                  {touched.name && errors.name && <div><Box color="error.main">{errors.name}</Box></div>}
                  <br />
                  <TextField
                    required
                    style={mystyle}
                    id="subject"
                    label="Subject:"
                    variant="outlined"
                    name="subject"
                    value={values.subject || ""}
                    onChange={handleChange}
                    error={touched.subject && errors.subject}
                    errorText={errors.subject}
                  />
                  {touched.subject && errors.subject && <div><Box color="error.main">{errors.subject}</Box></div>}
                  <br />
                  <TextField
                    required
                    style={mystyle}
                    type="number"
                    id="score"
                    label="Score:"
                    variant="outlined"
                    name="score"
                    value={values.score || ""}
                    onChange={handleChange}
                    error={touched.score && errors.score}
                    errorText={errors.score} />
                  {touched.score && errors.score && <div><Box color="error.main">{errors.score}</Box></div>}
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Grid>

            )}
          </Formik>

          <Grid item md={6} xs={12}>
            {
              data.length === 0 ? <Typography align="center" variant="h5">Data not available</Typography>
                : <TablList data={data} />
            }
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
