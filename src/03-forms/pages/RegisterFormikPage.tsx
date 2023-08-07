import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
export const RegisterFormikPage = () => {
	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, 'Debe tener 2 caracteres como minimo')
						.max(15, 'Debe tener 15 caracteres o menos')
						.required('Requerido'),
					email: Yup.string()
						.email('El correo no tiene un formato valido')
						.required('Requerido'),
					password1: Yup.string()
						.min(6, 'Debe tener 6 caracteres como minimo')
						.required('Requerido'),
					password2: Yup.string()
						.oneOf(
							[Yup.ref('password1')],
							'Las contraseñas no son iguales'
						)
						.required('Requerido'),
					jobType: Yup.string().notOneOf(['it-jr']).required('Requerido'),
				})}
			>
				{(formik) => (
					<Form>
						<MyTextInput
							label={'Nombre'}
							name={'name'}
							placeholder='Manuel'
						/>
						<MyTextInput
							label={'Email'}
							name={'email'}
							placeholder='manolito@gmail.com'
						/>
						<MyTextInput
							label={'Password'}
							name={'password1'}
							type='password'
							placeholder='******'
						/>
						<MyTextInput
							label={'Confirm password'}
							name={'password2'}
							type='password'
							placeholder='******'
						/>
						<button type='submit'>Create</button>
						<button
							type='reset'
							onClick={formik.handleReset}
						>
							reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
