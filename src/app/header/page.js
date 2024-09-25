
import style from './page.module.css'
import Image from 'next/image'
import Img1 from '../../../public/p1.jpg'
import React from '../../../public/react.png'
import Javascript from '../../../public/js.png'
import Link from 'next/link'

export function Projetos(
  {
    projetoNovo,
    novoTexto,
    projetoNovo2,
    novoTexto2,
    icone,
    texto,
    texto2,
    cro,
    bis,
    insta,
    pitsa,
    cadastro,
    texto01,
    texto02,
    texto03,
    texto04,
    texto05,
    texto06,
    texto07,
    node,
    mysql,
    firebase,
    typs,
    conversor,
    filmes,
    paragrafo1,
    paragrafo2,
    paragrafo3,
    paragrafo4,
    paragrafo5,
    paragrafo6,
    paragrafo7,
    link1,
    link2,
    link3,
    link4,
    link5,
    link6,
    link7,
    apk1,
    apk2,
    apk3,
    apk4,
    apk6,
    apk7,
    git01,
    git02,
    git03,
    apk001,
    apk002,
    apk003
  }
) {

    return(
        <div className={style.divP}>
            <header id={style.container}>
                <div id={style.div1}>

                     {
                       projetoNovo ? 
                       (
                        <Image id={style.img} src={projetoNovo}/>
                       ) : 
                         projetoNovo2 ? 
                         (
                        <Image id={style.img} src={projetoNovo2}/> 
                         ):
                         cro ?
                         (
                        <Image id={style.img} src={cro}/> 
                         ):

                         bis ?
                         (
                          <Image id={style.img} src={bis}/>
                         ):

                         insta ?
                         (
                          <Image id={style.img} src={insta}/>
                         ):

                         cadastro ?
                         (
                          <Image id={style.img} src={cadastro}/>
                         ):

                         pitsa ?
                         (
                          <Image id={style.img} src={pitsa}/>
                         ):

                         conversor ?
                         (
                          <Image id={style.img} src={conversor}/>
                         ):

                         filmes ?
                         (
                          <Image id={style.img} src={filmes}/>
                         ):

                         (
                         <Image id={style.img} src={Img1}/>
                         )
                     }
                </div>

                <div id={style.div2}>

                    <div id={style.div3}>
                    
                     {
                       texto ? 
                       (
                        <h2 id={style.h2}>{texto}</h2>
                       ):
                        texto2 ?
                       (
                        <h2 id={style.h2}>{texto2}</h2>
                       ):

                       texto01 ?
                       (
                        <h2 id={style.h2}>{texto01}</h2>
                       ):

                       texto02 ?
                       (
                        <h2 id={style.h2}>{texto02}</h2>
                       ):

                       texto03 ?
                       (
                        <h2 id={style.h2}>{texto03}</h2>
                       ):

                       texto04 ?
                       (
                        <h2 id={style.h2}>{texto04}</h2>
                       ):

                       texto05 ?
                       (
                        <h2 id={style.h2}>{texto05}</h2>
                       ):

                       texto06 ?
                       (
                        <h2 id={style.h2}>{texto06}</h2>
                       ):

                       texto07 ?
                       (
                        <h2 id={style.h2}>{texto07}</h2>
                       ):

                       (
                        <h2 id={style.h2}>Buscar cep</h2>
                       )
                     }
                       <section id={style.section}>

                       <Image id={style.imgProject} src={React}/>
                       <Image id={style.imgProject} src={Javascript}/>
                          {
                            icone &&
                            (
                              <Image id={style.imgProject} src={icone}/>
                            ) 

                          }

                          {
                            typs &&
                            (
                              <Image id={style.imgProject} src={typs}/>
                            )
                          }

                          {
                            node &&
                            (
                              <Image id={style.imgProject} src={node}/>
                            )
                          }

                          {
                            mysql &&
                            (
                              <Image id={style.imgProject} src={mysql}/>
                            )
                          }

                          {
                            firebase &&
                            (
                              <Image id={style.imgProject} src={firebase}/>
                            )
                          }


                       </section>
                    </div>
                    <article id={style.sobre}>
                        {
                           novoTexto ?
                           (
                              <p id={style.texto}>{novoTexto}</p>
                           ) :
                            novoTexto2 ?
                            (
                              <p id={style.texto}>{novoTexto2}</p>
                            ) :

                             paragrafo1 ?
                             ( 
                              <p id={style.texto}>{paragrafo1}</p>
                             ) :

                            paragrafo2 ?
                            (
                              <p id={style.texto}>{paragrafo2}</p>
                            ):

                            paragrafo3 ?
                            (
                              <p id={style.texto}>{paragrafo3}</p>
                            ):

                            paragrafo4 ?
                            (
                              <p id={style.texto}>{paragrafo4}</p>
                            ):

                            paragrafo5 ?
                            (
                              <p id={style.texto}>{paragrafo5}</p>
                            ):

                            paragrafo6 ?
                            (
                              <p id={style.texto}>{paragrafo6}</p>
                            ):

                            paragrafo7 ?
                            (
                              <p id={style.texto}>{paragrafo7}</p>
                            ):
                            
                           (
                            <p id={style.texto}>Projeto criado com react native e javascript.
                            Nesse projeto foi consumido uma api ultilizando axios,
                            permitindo ao usuario a busca pelo cep informado no campo; trazendo a localidade da região como cidade,bairro,avenida e etc.
                            </p>
                           )
                        }
                        
                        <div className={style.divBtn}>
                            <button className={style.btn}>
                              {
                               link1 ?
                               (
                                <Link className={style.link} href={link1}>
                                  Repositorio
                                </Link>
                               ):

                               git01 ?
                               (
                                <Link className={style.link} href={git01}>
                                Repositorio
                              </Link>
                               ):

                               git02 ?
                               (
                                <Link className={style.link} href={git02}>
                                Repositorio
                              </Link>
                               ):

                               git03 ?
                               (
                                <Link className={style.link} href={git03}>
                                Repositorio
                              </Link>
                               ):

                               link2 ?
                               (
                                <Link className={style.link} href={link2}>
                                Repositorio
                              </Link>
                               ):

                               link3 ?
                               (
                                <Link className={style.link} href={link3}>
                                  Repositorio
                                </Link>
                               ):

                               link4 ?
                               (
                                <Link className={style.link} href={link4}>
                                  Repositorio
                                </Link>
                               ):

                               link5 ?
                               (
                                <Link className={style.link} href={link5}>
                                  Repositorio
                                </Link>
                               ):

                               link7 ?
                               (
                                <Link className={style.link} href={link7}>
                                Repositorio
                              </Link>
                               ):

                               link6 ?
                               (
                                <Link className={style.link} href={link6}>
                                  Repositorio
                                </Link>
                               ):

                               <Link className={style.link} href='https://github.com/Y1468/AppCarrinho'>
                                  Repositorio
                                </Link>
                              }
                                
                            </button>
                            <button className={style.btn}>
                              {
                               apk1 ?
                               (
                                <Link className={style.link} href={apk1}>
                                   Download apk
                                </Link>
                               ):

                               apk001 ?
                               (
                                <Link className={style.link} href={apk001}>
                                   Download apk
                                </Link>
                               ):

                               apk002 ?
                               (
                                <Link className={style.link} href={apk002}>
                                   Download apk
                                </Link>
                               ):

                               apk003 ?
                               (
                                <Link className={style.link} href={apk003}>
                                   Download apk
                                </Link>
                               ):

                               apk2 ?
                               (
                                <Link className={style.link} href={apk2}>
                                   Download apk
                                </Link>
                               ):

                               apk3 ?
                               (
                                <Link className={style.link} href={apk3}>
                                   Download apk
                                </Link>
                               ):

                               apk4 ?
                               (
                                <Link className={style.link} href={apk4}>
                                   Download apk
                                </Link>
                               ):

                               apk7 ?
                               (
                                <Link className={style.link} href={apk7}>
                                Download apk
                                </Link>
                               ):

                               apk6 ?
                               (
                                <Link className={style.link} href={apk6}>
                                  Download apk
                                </Link>
                               ):

                               <Link className={style.link} href='#'>
                                   Download apk
                                </Link>

                              }
                            </button>
                        </div>
                    </article>
                </div> 
            </header>
        </div>
    )
}