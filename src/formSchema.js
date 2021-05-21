import * as yup from 'yup';

export const formSchema = yup.object({
    name: yup.string().required("Name is required!"),
    score: yup.number().positive().required("Score is required!"),
    subject: yup.string().required('Suject is required!')
});