/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./styles.module.scss"
import { Button, Col, Container, Row } from 'reactstrap'

const PresentationSection = function (){
    return (
        <>
        <Container className="py-4">
            <Row>
                <Col md className="d-flex flex-column justify-content-center align-items-start">
                    <p className={styles.subTitle}> ACESSO ILIMITADO </p>   
                    <p className={styles.title}> Tenha Acesso aos melhores <br /> tutoriais de programação</p>
                    <p className={styles.description}> Estude de onde estiver a qualquer momento e conitnue <br /> evoluindo como programador
                    </p>
                    <Link href='/register'>
                <Button outline  className={styles.btnCta}>
                    Acesse Agora <img src="/buttonPlay.svg" alt="buttonimg" className={styles.btnImg}/>
                </Button>
                    </Link>
                </Col>
                <Col md>  
                    <img src="/homeNoAuth/imgPresentation.png" alt="imgIndex" className={styles.imgPresentation} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center pt-5">
                    <img src="/homeNoAuth/iconArrowDown.svg" alt="arrowdown" className={styles.arrowDown} />
                </Col>    
            </Row>            
        </Container>
        </>
    )
}

export default PresentationSection;