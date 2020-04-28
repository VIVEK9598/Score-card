import React from 'react';
import Form from './Form';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../DataContextProvider';


const StudentForm = () => {
    const history = useHistory()
    const { ListData, setData } = React.useContext(DataContext)
    const [formData, setFormData] = React.useState({})

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        let arr = ListData
        const currentIndex = ListData.findIndex(d => d.name === formData.name && d.subject === formData.subject)
        if (currentIndex === -1) {
            arr.push({ id: ListData.length + 1, ...formData })

        }

        else {
            arr[currentIndex] = { ...arr[currentIndex], score: parseInt(arr[currentIndex].score,10) + parseInt(formData.score,10), id: arr[currentIndex].id }

        }
        setData(arr)
        history.push("/")
    }

    return (
        <div>
            <Form
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default StudentForm;