import style from './sorteio.module.css'

export default function Logo() {
    return(
        <>
        <div className={style.div}>
        <img src="https://th.bing.com/th/id/OIP._bbQ3TmUIrlQXy0pu-Yj1QHaEO?rs=1&pid=ImgDetMain" className={style.logo}/>

        <h1 className={style.h1}>Bem Vindo a Mega Sena!</h1>
        </div>
        </>
    )
}