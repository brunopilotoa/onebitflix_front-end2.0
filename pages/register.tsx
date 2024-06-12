import HeaderGeneric from "@/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Form,FormGroup , Label , Container ,Button, Input } from "reactstrap";
import Footer from "@/components/common/footer";

const Register = function(){
    return(
        <>
            <Head>
                <title>Onebitflix - Register
                </title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <script src="https://jsuites.net/v4/jsuites.js"></script>

            </Head>
            <main className= {styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl ="/login" btnContent="Quero Fazer Login" />
                <Container className="py-5">
                    <p className={styles.formTitle}><strong>
                        Bem Vindo ao Onebitflix
                        </strong>
                        </p>
                    <Form className={styles.form}>
                        <p className='text-center'>
                        <strong>Faça a Sua conta</strong>
                        </p>
                        <FormGroup>
                        <Label for="firstName" className={styles.label}>
                            Nome
                        </Label>
                        <Input id="firstName" 
                        name="firstName" 
                        type="text" 
                        placeholder="Qual seu nome " 
                        required 
                        maxLength={20} 
                        className={styles.inputName}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="lastName" className={styles.label}>
                            Sobrenome
                        </Label>
                        <Input id="lastName" 
                        name="lastName" 
                        type="text" 
                        placeholder="Qual seu sobrenome " 
                        required 
                        maxLength={20} 
                        className={styles.inputName}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="phone" className={styles.label}>
                            Whatsapp / Telegram
                        </Label>
                        <Input id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="(xx )9xxxx-xxxx  " 
                        data-mask = "[-] +55 (00) 00000-0000"
                        required 
                        className={styles.input}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="email" className={styles.label}>
                           Email
                        </Label>
                        <Input id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Digite Seu email" 
                        required 
                        className={styles.input}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="birth" className={styles.label}>
                        Data de Nascimento
                        </Label>
                        <Input id="birth" 
                        name="birth" 
                        type="date"
                        min="1930-01-01"
                        max="2024-06-12" 
                        placeholder="(xx )Digite Seu email" 
                        required 
                        className={styles.input}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="password" className={styles.label}>
                            Senha
                        </Label>
                        <Input id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Digite Sua Senha(Min 6 | Max 20)" 
                        required 
                        minLength={6}
                        maxLength={20}
                        className={styles.input}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="password" className={styles.label}>
                            Confirme sua Senha
                        </Label>
                        <Input id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Confirme a Sua Senha" 
                        required 
                        minLength={6}
                        maxLength={20}
                        className={styles.input}/>
                        </FormGroup>
                        <Button type="submit" outline className={styles.formBtn}>
                            Cadastrar
                        </Button>
                    </Form>
                </Container>
                <Footer/>
            </main>
        </>
    )
}

export default Register ;