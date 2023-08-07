import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';
export const RegisterPage = () => {
	const {
		formData,
		email,
		name,
		password1,
		password2,
		onChange,
		resetForm,
		isValidEmail,
	} = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Register Page</h1>

			<form
				noValidate
				onSubmit={(e) => onSubmit(e)}
			>
				<input
					type='text'
					placeholder='Name'
					value={name}
					name='name'
					onChange={onChange}
					className={`${name.trim().length <= 0 && 'has-error'}`}
				/>
				{name.trim().length <= 0 && <span>Este campo es necesario</span>}
				<input
					type='email'
					placeholder='Email'
					value={email}
					name='email'
					onChange={onChange}
					className={`${!isValidEmail(email) && 'hasd-error'}`}
				/>
				{!isValidEmail(name) && <span>Email no es valido</span>}

				<input
					type='password'
					placeholder='Password'
					value={password1}
					name='password1'
					onChange={onChange}
				/>
				<input
					type='password'
					placeholder='Repeat Password'
					value={password2}
					name='password2'
					onChange={onChange}
				/>

				<button type='submit'>Create</button>
				<button
					type='reset'
					onClick={resetForm}
				>
					reset
				</button>
			</form>
		</div>
	);
};
