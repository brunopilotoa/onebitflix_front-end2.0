/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss'
import { Button , Container } from 'reactstrap';

const HeaderNoAuth = () =>{
    return(

        <>
    <div className={styles.ctaSection}>
        <img src="/homeNoAuth/logoCta.png" 
        alt="logo-cta" 
        className= {styles.imgCta}/>
    <p>
        Se cadastre para ter acesso aos cursos
    </p>
    <img src="/homeNoAuth/iconSearch.svg" 
        alt="logo-cta" 
        className= {styles.imgCta}/>
    </div>
    <Container>
        <img src="/logoOnebitflix.svg" alt="logo-onebitflix" />
        <div>
            <Button outline color='primary'>
                Entrar
            </Button>
        </div>
    </Container>
    </>
        )
};

export default HeaderNoAuth;