
import react from '../../../public/react.png'
import javascript from '../../../public/js.png'
import api from '../../../public/api.png'
import firebase from '../../../public/firebase.png'
import mysql from '../../../public/mysql.png'
import node from '../../../public/node.png'
import redux from '../../../public/Redux.png'
import typscript from '../../../public/typscript.png'
import style from './page.module.css'
import Image from 'next/image'

export function Skils(params) {
    return(
        <div>
            <article className={style.sckils}>
          <div>
            <h1 className={style.skilTec}>Skils</h1>
            <div className={style.mySkil}>

            <div className={style.divColumn}>
              <div id={style.dvSkil}>
                <Image className={style.imgSkil} src={react}/>
                <li id={style.sk}>React native</li>
              </div>

              <div>
               <Image className={style.imgSkil} src={javascript}/>
               <li id={style.sk}>javascript</li>
              </div>

              <div>
               <Image className={style.imgSkil} src={typscript}/>
               <li id={style.sk}>Typscript</li>
              </div>

              <div>
               <Image className={style.imgSkil} src={mysql}/>
               <li id={style.sk}>Mysql</li>
              </div>
              </div>
              
              <div className={style.divColumn}>
              <div>
               <Image className={style.imgSkil} src={node}/>
               <li id={style.sk}>Node</li>
              </div>

              <div>
               <Image className={style.imgSkil} src={firebase}/>
               <li id={style.sk}>Firebase</li>
              </div>

              <div>
              <Image className={style.imgSkil} src={api}/>
              <li id={style.sk}>Rest api</li>
              </div>

              <div>
              <Image className={style.imgSkil} src={redux}/>
              <li id={style.sk}>Redux</li>
              </div>
              </div>
            
            
            </div>
          </div>
        </article>
        </div>
    )
}