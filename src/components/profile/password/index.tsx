import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from"../../../../styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/services/profileService";
import ToastComponent from "@/components/common/toast";

const PasswordForm = function (){
  const [currentPassword , setCurrentPassword] = useState("");
  const [newPassword , setNewPassword] = useState("");
  const [confirmNewPassword , setConfirmNewpassword] = useState("");
  const [color,setColor] = useState("")
  const [toastIsOpen , setToastIsOpen] = useState(false)
  const [errorMessage , setErrorMessage] = useState("")

  useEffect(()=>{
    profileService.fetchCurrent().then((password)=>{
      setCurrentPassword(password.currentPassword)
      setNewPassword(password.newPassword)
    })
  },[])  

  const handlePasswordUpdate = async function (
    event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    if (newPassword!= confirmNewPassword){
      setToastIsOpen(true)
      setErrorMessage("Senha de confirmação diferente da senha")
      setColor("bg-danger")
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000*3)
     return
  }
    if (currentPassword === newPassword){
      setToastIsOpen(true)
      setErrorMessage("NÃO COLOQUE A SENHA ATUAL IGUAL ANTIGA")
      setColor("bg-danger")
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000*3)
      return
    }
  
  const res = await profileService.passwordUpdate({
    currentPassword,
    newPassword
  })
    if(res===204)  {
      setToastIsOpen(true)
      setErrorMessage("SENHA ALTERADA COM SUCESSO")
      setColor("bg-success")
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000*3);
      setCurrentPassword  ("") ;
      setNewPassword  ("") ;
      setConfirmNewpassword("") ;
    }
    if (res===400) {
      setToastIsOpen(true)
      setErrorMessage("SENHA ATUAL INCORRETA")
      setColor("bg-danger")
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000*3);
    }
  }

    return(
  <>
	<Form onSubmit = {handlePasswordUpdate}className={styles.form}>
	  <div className={styles.inputNormalDiv}>
	    <FormGroup>
	      <Label className={styles.label} for="currentPassword">
	        SENHA ATUAL
        </Label>
        <Input
        name="currentPassword"
        type="password"
        id="currentPassword"
        placeholder="******"
        required
        maxLength={12}
        value={currentPassword}
        onChange={(event)=>{setCurrentPassword(event.currentTarget.value)}}
        className={styles.input}
        />
      </FormGroup>
    </div>
    <div className={styles.inputFlexDiv}>
	    <FormGroup>
	      <Label className={styles.label} for="newPassword">
	        NOVA SENHA
        </Label>
        <Input
        name="newPassword"
        type="password"
        id="newPassword"
        placeholder="******"
        required
        value={newPassword}
        onChange={(event)=>{setNewPassword(event.currentTarget.value)}}
        className={styles.inputFlex}
        />
      </FormGroup>
	    <FormGroup>
	      <Label className={styles.label} for="confirmNewPassword">
		      CONFIRMAR NOVA SENHA
	      </Label>
	      <Input
		    name="confirmNewPassword"
		    type="password"
	      id="confirmNewPassword"
	      placeholder="******"
	      required
	      className={styles.inputFlex}
        value={confirmNewPassword}
        onChange={(event)=>{setConfirmNewpassword(event.currentTarget.value)}}
	      />
	    </FormGroup>

      <Button type="submit" className={styles.formBtn} outline>
	      Salvar Alterações
      </Button>
    </div>
  </Form>
  <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage}

/>
</>
    )
}

export default PasswordForm;