import React from 'react'
import style from './Footer.module.css'
import Vetor from '../../assets/Logo/Vector.svg'
import Alura from '../../assets/Logo/AluraGeek-1.svg'
import Geek from '../../assets/Logo/AluraGeek.svg'


function Footer() {
    return (
        <>
            <footer>

                <div className={style.conteudo}>
                    <div className={style.logo}>
                        <img src={Vetor} alt="" />
                        <img src={Alura} alt="" />
                        <img src={Geek} alt="" />
                    </div>

                    <div className={style.links}>
                        <ul>
                            <li>Quem somos nós</li>
                            <li>Política de privacidade</li>
                            <li>Programa de fidelidade</li>
                            <li>Nossas lojas</li>
                            <li>Quero ser franqueado</li>
                            <li>Anuncie aqui</li>
                        </ul>
                    </div>

                    <div className={style.contato}>
                        <p>Fale conosco</p>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Digite seu nome' />
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder='Digite seu E-mail' />
                        <button type='submit'>Enviar Menssagem</button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;