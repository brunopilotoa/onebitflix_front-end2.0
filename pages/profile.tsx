import Head from 'next/head';
import styles from '../styles/profile.module.scss';
import UserForm from '@/components/profile/user';
import HeaderAuth from '@/components/common/headerAuth';
import { Button, Col, Container, Row } from 'reactstrap';
import Footer from '@/components/common/footer';
import { useState } from 'react';
import PasswordForm from '@/components/profile/password';

const UserInfo = function () {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!sessionStorage.getItem('onebitflix-token')) {
			router.push('/login');
		} else {
			setLoading(false);
		}
	}, []);

	if (loading) {
		return <PageSpinner />;
	}
	const [form, setForm] = useState('userForm');

	return (
		<>
			<Head>
				<title> OneBitFlix - Meus Dados</title>
				<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
			</Head>
			<main className={styles.main}>
				<div className={styles.header}>
					<HeaderAuth />
				</div>
				<Container className={styles.gridContainer}>
					<p className={styles.title}>MInha conta</p>
					<Row className="pt-3 pb-5">
						<Col md={4} className={styles.btnColumn}>
							<Button
								className={styles.renderForm}
								style={{ color: form === 'userForm' ? '#ff0044' : 'white' }}
								onClick={() => {
									setForm('userForm');
								}}
							>
								Dados Pessoais
							</Button>
							<Button
								className={styles.renderForm}
								style={{ color: form === 'passwordForm' ? '#ff0044' : 'white' }}
								onClick={() => {
									setForm('passwordForm');
								}}
							>
								Senha
							</Button>
						</Col>
						<Col md>
							{form === 'userForm' ? <UserForm /> : <PasswordForm />}
						</Col>
					</Row>
				</Container>
				<div className={styles.footer}>
					<Footer />
				</div>
			</main>
		</>
	);
};
export default UserInfo;
