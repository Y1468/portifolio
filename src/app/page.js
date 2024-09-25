
import Image from "next/image";
import style from './page.module.css'
import Link from "next/link";
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import p5 from '../../public/p5.jpg'
import { Header } from "@/app/components/page";
import Linkedin from '../../public/linkedin.jpg'
import Git from '../../public/git.png'
import { Projetos } from "@/app/header/page";
import P2 from '../../public/p2.jpg'
import P6 from '../../public/p6.jpg'
import { Perfil } from "./perfil/page";
import { Skils } from "./skils/page";
import firebase from '../../public/firebase.png'
import { Footer } from "./footer/page";


export default function Home() {
    const titulo='Carrinho'
    const titulo2='Lista de tarefa'
    const image=P2
    const image2=P6
    const icone=firebase
    const texto='Projeto criado com react native e javascript.Nesse projeto o usuario pode adcionar produltos no carrinho,aumenta e diminui a quantidade e vêr o preço total.Tambem e possivel calcular o preço total dos items'
    const texto2='Projeto crud.com funcionalidades de adicionar,buscar,alterar e excluir.Ultilizando tambem cadastro e altenticação com firebase.'
    const git01='https://github.com/Y1468/BuscarCep'
    const git02='https://github.com/Y1468/AppCarrinho'
    const git03='https://github.com/Y1468/ListTarefa'
    const apk001='https://github.com/Y1468/BuscarCep/releases/tag/0.01'
    const apk002='https://github.com/Y1468/AppCarrinho/releases/tag/0.01'
    const apk003='https://github.com/Y1468/ListTarefa/releases/tag/0.01'

  return (
    <div className={style.container}>
      <Header/>
       <main className={style.main}>
      <Perfil/>
      <Skils/>
        <div>
        <section className={style.section}>
          
          <h1 className={style.texto}>Projetos</h1>

            <div className={style.mais}>
             <Projetos git01={git01} apk001={apk001}/>
            </div>

            <div className={style.mais}>
              <Projetos projetoNovo={image} novoTexto={texto} texto={titulo} git2={git02} apk002={apk002}/>
            </div>

            <div className={style.mais}>
              <Projetos projetoNovo2={image2} novoTexto2={texto2} icone={icone} texto2={titulo2} git03={git03} apk003={apk003}/>
            </div>
            
          </section>

          <div className={style.divBtn}>
          <button className={style.btnProjects}>
            <Link className={style.txtButon} href="/projetos">
              Ver todos os projetos
            </Link>
          </button>
          </div>
        </div>
       </main>
       <Footer/>

    </div>
  )
} 