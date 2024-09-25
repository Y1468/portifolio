

"use client"
import { useState } from "react"
import { Header } from "../components/page"
import { Footer } from "../footer/page"
import { Projetos } from "../header/page"
import Cronometro from "../../../public/cronometro.jpg"
import Biscoito from "../../../public/biscoito.jpg"
import Instagran from "../../../public/instagran.jpg"
import Pitsaria from "../../../public/pitsaria.jpg"
import Cadastro from "../../../public/cadastro.jpg"
import Firebase from '../../../public/firebase.png'
import Node from '../../../public/node.png'
import Mysql from '../../../public/mysql.png'
import Typescript from '../../../public/typscript.png'
import Conversor from '../../../public/conversor.png'
import Filmes from '../../../public/filmes.png'
import st from './page.module.css'

export default function Project() {

    //const imgCronometro=Cronometro
    //const imgBiscoito=Biscoito
   
    const[cronometro,setCronometro]=useState(Cronometro)
    const[biscoito,setBiscoito]=useState(Biscoito)
    const[instagran,setInstagran]=useState(Instagran)
    const[cadastro,setCadastro]=useState(Cadastro)
    const[pitsaria,setPitsaria]=useState(Pitsaria)
    const[filme,setFilme]=useState(Conversor)
    const[conversor,setConversor]=useState(Filmes)
    const[txt01,setTexto01]=useState('Cronometro')
    const[txt02,setTexto02]=useState('Biscoito da sorte')
    const[txt03,setTexto03]=useState('Interface instagran')
    const[txt04,setTexto04]=useState('Tela de cadastro')
    const[txt05,setTexto05]=useState('Pitsaria')
    const[txt06,setTexto06]=useState('Lista de filmes')
    const[txt07,setTexto07]=useState('Comversor')
    const[node,setNode]=useState(Node)
    const[mysql,setMysql]=useState(Mysql)
    const[fire,setFire]=useState(Firebase)
    const[typs,setTyps]=useState(Typescript)
    const[p1,setP1]=useState('')
    const[p2,setP2]=useState('')
    const[p3,setP3]=useState('')
    const[p4,setP4]=useState('')
    const[p5,setP5]=useState('')
    const[paragrafo1,setParagrafo1]=useState('Nesse projeto o usuario pode iniciar o tempo parar e listar o tempo que fôi pausado')
    const[paragrafo2,setParagrafo2]=useState('O Projeto tem a finalidade de quebrar o biscoito e sortear uma frase aleatoria')
    const[paragrafo3,setParagrafo3]=useState('Nesse projeto fôi criado uma lista de usuarios exibindo as postagems permitindo tambem poder curtir cada postagem')
    const[paragrafo4,setParagrafo4]=useState('Projeto criado com o intuito de permitir ao usuario cadastrar uma conta.Ultilizando tambem o firebase para altenticar e armazenar dados do mesmo.')
    const[paragrafo5,setParagrafo5]=useState('Nesse projeto fôi criado um backend ultilizando node js e typscript.no mesmo fôi consumido uma api rest ultilizando axios.ultizando tambem context api entre os componentes.Nesse projeto o usuario pode logar,abrir uma mesa e tambem filtrar e listar todos os pedidos podendo tambem excluilos.')
    const[paragrafo6,setParagrafo6]=useState('Projeto criado com react native e javascript.No mesmo fôi consumido uma api de filmes ultilizando axios.nesse projeto o usuario pode ver todos os filmes em cartazes.')
    const[paragrafo7,setParagrafo7]=useState('Nesse projeto fôi consumido uma api de cotação ultilizando axios.O mesmo tem a funcionalidade de converter de uma determinada moeda para outra e mostrar sêu respectivo valor. ')
    const[link1,setLink1]=useState('https://github.com/Y1468/Cronometro')
    const[link2,setLink2]=useState('https://github.com/Y1468/BiscoitoDasorte')
    const[link3,setLink3]=useState('https://github.com/Y1468/interfaceInsta')
    const[link4,setLink4]=useState('https://github.com/Y1468/telaLogin')
    const[link5,setLink5]=useState('https://github.com/Y1468/mobile')
    const[link6,setLink6]=useState('https://github.com/Y1468/comversorMoeda')
    const[link7,setLink7]=useState('https://github.com/Y1468/ListFilme')
    const[apk1,setApk1]=useState('https://github.com/Y1468/Cronometro/releases/tag/0.01')
    const[apk2,setApk2]=useState('https://github.com/Y1468/BiscoitoDasorte/releases/tag/0.01')
    const[apk3,setApk3]=useState('https://github.com/Y1468/interfaceInsta/releases/tag/0.01')
    const[apk4,setApk4]=useState('https://github.com/Y1468/telaLogin/releases/tag/0.01')
    const[apk6,setApk6]=useState('https://github.com/Y1468/comversorMoeda/releases/tag/001')
    const[apk7,setApk7]=useState('https://github.com/Y1468/ListFilme/releases/tag/0.01')


   return(
     <div id={st.container}>
       <div id={st.header}>
       <Header/>
       </div>
      <div>
        <div id={st.Projects}>
         <Projetos cro={cronometro} texto01={txt01} p1={p1} paragrafo1={paragrafo1} link1={link1} apk1={apk1}/>
        </div>
        <div id={st.Projects}>
         <Projetos bis={biscoito} texto02={txt02} p2={p2} paragrafo2={paragrafo2} link2={link2} apk2={apk2}/>
        </div>
        <div id={st.Projects}>
          <Projetos insta={instagran} texto03={txt03} p3={p3} paragrafo3={paragrafo3} link3={link3} apk3={apk3}/>
        </div>
        <div id={st.Projects}>
         <Projetos cadastro={cadastro} texto04={txt04} firebase={fire} p4={p4} paragrafo4={paragrafo4} link4={link4} apk4={apk4}/>
        </div>
        <div id={st.Projects}>
         <Projetos pitsa={pitsaria} texto05={txt05} node={node} mysql={mysql} typs={typs} p5={p5} paragrafo5={paragrafo5} link5={link5}/>
        </div>
        <div id={st.Projects}>
         <Projetos conversor={conversor} texto06={txt06} paragrafo6={paragrafo6} link7={link7}  apk7={apk7}/>
        </div>
        <div id={st.Projects}>
         <Projetos filmes={filme} texto07={txt07} paragrafo7={paragrafo7} link6={link6} apk6={apk6}/>
        </div>
      </div>

        <footer className={st.footer}>
         <Footer/>
        </footer>
     </div>
   )
}