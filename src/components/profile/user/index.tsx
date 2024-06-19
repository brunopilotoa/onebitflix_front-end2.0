import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import styles from "../../../../styles/profile.module.scss"

const UserForm = function () {
    return (<>
    <Form className={styles.form}>
        <div className={styles.formName}>
            <p className={styles.nameAbreviation}>NT</p>
            <p className={styles.userName}>NAME TEST</p>
        </div>
        <div className={styles.memberTime}>
            <img src="/profile/iconUserAccount.svg" alt="iconProfile"  className={styles.memberTimeImg}/>
            <p className={styles.memberTimeText}>
                Membro desde <br />
            </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
        <FormGroup>
            <Label className ={styles.label} for="firstName">
            NOME
            </Label>
            <Input
            name="firstname"
            type="text"
            id="firstName"
            placeholder="Qual o Seu Primeiro Nome ?"
            required
            maxLength={20}
            className={styles.inputFlex}
            value={"Name"}
            >
            </Input>
        </FormGroup>
        <FormGroup>
            <Label className ={styles.label} for="lastName">
            Sobrenome
            </Label>
            <Input
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Qual o Seu SobreNome ?"
            required
            maxLength={20}
            className={styles.inputFlex}
            value={"LastName"}
            >
            </Input>
        </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
        <FormGroup>
            <Label className ={styles.label} for = "phone">
            WHATSAPP / TELEGRAM
            </Label>
            <Input
            name="phone"
            type="tel"
            id="phone"
            placeholder="(xx) 9xxxx-xxxx "
            required
            className={styles.input}
            value={"+ 55 (21) 99999-9999"}
            >
            </Input>
        </FormGroup>
        <FormGroup>
            <Label className ={styles.label} for = "email">
                email
             </Label>
            <Input
            name="email"
            type="email"
            id="email"
            placeholder="Coloque o Seu Email"
            required
            className={styles.input}
            value={"testeemail@gmail.com"}
            >
            </Input>
        </FormGroup>
        <Button className = {styles.formBtn} outline type="submit   ">
            Salvar Alterações
        </Button>
        </div>
    </Form>
    </>)
}

export default UserForm