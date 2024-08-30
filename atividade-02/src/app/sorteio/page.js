import style from './sorteio.module.css'
import Logo from "./logo";
import Numero from "./numero";

export default function Sorteio() {
    return (
        <>
            <Logo />

            <h2 className={style.h2}>Os números de hoje são:</h2>

            <div className={style.resultadoDoSorteio}>
            <Numero />
            <Numero />
            <Numero />
            <Numero />
            <Numero />
            <Numero />
            </div>

        </>
    )
}