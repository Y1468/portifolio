
import imagePerfil from "../../../public/img1.png"
import style from "./page.module.css"
import Image from "next/image"

export function Perfil() {
    return(
        <div id={style.main}>      
          <div className={style.titulo}>
          <h1 className={style.h1}>Ola! Meu nome e ivan sousa</h1>
          <p id={style.txt}>
            Um desemvoldor mobil apaixonado por tecnologia.
            Iniciei minha jornada no desemvolvimento mòbil em 2023.atualmente venho estudando atravès de curssos e projetos pessoais,
            meu foco principal e aprimorar ainda mais minhas skils e adquirir ainda mais conhecimento.
            
            Estou sempre mim desafiando com novos projetos e buscando feedback na comunidade de programação,alem
            de compartilhar meus conhecimentos.

            Gosto muito de assistir animes e ver tutoriais de programação e tecnologia
          </p>
          </div>
          <Image className={style.img} src={imagePerfil} alt="Meu perfil"/>
        </div>
    )
}