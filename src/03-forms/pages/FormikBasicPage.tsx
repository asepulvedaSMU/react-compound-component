import { useFormik, FormikErrors } from 'formik';
import '../styles/styles.css';

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikBasicPage = () => {
	const validate = ({ firstName, lastName, email }: FormValues) => {
		const errors: FormikErrors<FormValues> = {};

		if (!firstName) {
			errors.firstName = 'Required';
		} else if (firstName.length >= 15) {
			errors.firstName = 'Must be 15 characters or less';
		}
		if (!lastName) {
			errors.lastName = 'Required';
		} else if (lastName.length >= 10) {
			errors.lastName = 'Must be 10 characters or less';
		}
		if (!email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			errors.email = 'Invalid email address';
		}
		return errors;
	};

	// los values son los datos que se etan enviando en el formulario (	firstName,lastName, email)
	const {
		handleChange,
		values,
		handleSubmit,
		errors,
		touched,
		handleBlur,
	} = useFormik({
		initialValues: {
			firstName: 'Manolito',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validate,
	});
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				noValidate
			>
				<h1>Formik Basic Tutorial</h1>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='text'
					name='firstName'
					value={values.firstName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}
				<label htmlFor='lastName'>Last Name</label>
				<input
					type='text'
					name='lastName'
					value={values.lastName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{touched.lastName && errors.lastName && (
					<span>{errors.lastName}</span>
				)}
				<label htmlFor='email'>Email Adress</label>
				<input
					type='text'
					name='email'
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{touched.firstName && errors.email && <span>{errors.email}</span>}
				<button type='submit'>submit</button>
			</form>
		</div>
	);
};
