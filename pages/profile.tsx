import Head from "next/head";
import styles from  "../styles/profile.module.scss" ;
import UserForm from "@/components/profile/user";
import HeaderAuth from "@/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/components/common/footer";

const UserInfo = function (){
    return (
        <>
        <Head>
            <title> OneBitFlix - Meus Dados</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <div className={styles.header}>
                <HeaderAuth/>
            </div>
            <Container className="py-5">
            <p className={styles.title}>MInha conta</p>
            <Row className="pt-3 pb-5">
                <Col md ={4} className={styles.btnColumn}>
                <Button className={styles.renderForm}>Dados Pessoais</Button>
                <Button className={styles.renderForm}>Senha</Button>
                </Col>
                <Col>
                <UserForm />
                </Col>
            </Row>
            </Container>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </main>
        </>
    )
}
export default UserInfo