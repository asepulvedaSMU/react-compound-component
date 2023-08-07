import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {
	// los values son los datos que se etan enviando en el formulario (	firstName,lastName, email)

	return (
		<div>
			<h1>Formik Components</h1>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Debe tener 15 caracteres o menos')
						.required('Requerido'),
					lastName: Yup.string()
						.max(10, 'Debe tener 15 caracteres o menos')
						.required('Requerido'),
					email: Yup.string()
						.email('El correo no tiene un formato valido')
						.required('Requerido'),
					terms: Yup.boolean().oneOf(
						[true],
						'Debe aceptar las condiciones'
					),
					jobType: Yup.string().notOneOf(['it-jr']).required('Requerido'),
				})}
			>
				{(formik) => (
					<Form>
						<label htmlFor='firstName'>First Name</label>
						<Field
							name='firstName'
							type='text'
							placeholder='firstName'
						/>
						<ErrorMessage
							name='firstName'
							component='span'
						/>
						<label htmlFor='lastName'>Last Name</label>
						<Field
							name='lastName'
							type='text'
						/>
						<ErrorMessage
							name='lastName'
							component='span'
						/>
						<label htmlFor='email'>Email Adress</label>
						<Field
							name='email'
							type='text'
						/>
						<ErrorMessage
							name='email'
							component='span'
						/>
						<label htmlFor='jobType'>Job Type</label>
						<Field
							name='jobType'
							as='select'
						>
							<option value=''>Pick something</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT Senior</option>
							<option value='it-jr'>IT Jr.</option>
						</Field>
						<label>
							<Field
								name='terms'
								type='checkbox'
							/>
							Terms and condition
						</label>
						<ErrorMessage
							name='terms'
							component='span'
						/>
						<button type='submit'>submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
