
import Link from "next/link"
import style from './page.module.css'

export function Header() {
    return(
        <div>
            <header className={style.header}>
                <div className={style.divLogo}>
                  <h1 className={style.h1}>IS</h1> 
                </div>

                <div className={style.divPage}>
              <ul className={style.pages}>
                <li id={style.li}>
                  <Link id={style.link} href='/'>Home</Link>
                </li>
                <li id={style.li}>
                  <Link id={style.link} href='#'>Sobre</Link>
                </li>
                <li id={style.li}>
                  <Link id={style.link} href='#'>Skils</Link>
                </li>
                <li id={style.li}>
                  <Link id={style.link} href='/projetos'>Portifolio</Link>
                </li>
                <li id={style.li}>
                  <Link id={style.link} href='#'>Contato</Link>
                </li>
              </ul>
            </div>

       </header>
        </div>
    )
}