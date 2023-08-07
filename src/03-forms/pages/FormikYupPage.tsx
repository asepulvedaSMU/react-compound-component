import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
	// los values son los datos que se etan enviando en el formulario (	firstName,lastName, email)
	const { handleSubmit, errors, touched, getFieldProps } = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Debe tener 15 caracteres o menos')
				.required('Requerido'),
			lastName: Yup.string()
				.max(10, 'Debe tener 15 caracteres o menos')
				.required('Requerido'),
			email: Yup.string()
				.email('El correo no tiene un formato valido')
				.required('Requerido'),
		}),
	});
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				noValidate
			>
				<h1>Formik Yup Tutorial</h1>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='text'
					// name='firstName'
					// value={values.firstName}
					// onChange={handleChange}
					// onBlur={handleBlur}
					// el getFieldProps reemplaza todos los campos comentados(name, values, onChange, onBlur)
					{...getFieldProps('firstName')}
				/>
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}
				<label htmlFor='lastName'>Last Name</label>
				<input
					type='text'
					{...getFieldProps('lastName')}
				/>
				{touched.lastName && errors.lastName && (
					<span>{errors.lastName}</span>
				)}
				<label htmlFor='email'>Email Adress</label>
				<input
					type='email'
					{...getFieldProps('email')}
				/>
				{touched.firstName && errors.email && <span>{errors.email}</span>}
				<button type='submit'>submit</button>
			</form>
		</div>
	);
};
