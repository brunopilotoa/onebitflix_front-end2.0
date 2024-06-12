import HeaderGeneric from "@/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";

const Register = function(){
    return(
        <>
            <Head>
                <title>Onebitflix - Register
                </title>
                        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />

            </Head>
            <main>
                <HeaderGeneric logoUrl="/" btnUrl ="/login" btnContent="Quero Fazer Login" />
            </main>
        </>
    )
}

export default Register ;