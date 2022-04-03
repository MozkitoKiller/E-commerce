import React from 'react';
import style from './Navbar.module.css'
import Vetor from '../../assets/Logo/Vector.svg'
import Alura from '../../assets/Logo/AluraGeek-1.svg'
import Geek from '../../assets/Logo/AluraGeek.svg'
import {FiSearch} from 'react-icons/fi'





function Navbar() {
    return (
        <div>
            <div className={style.navbar}>
                <div className={style.logo_pesquisa}>
                    <img src={Vetor} alt="" />
                    <img src={Alura} alt="" />
                    <img src={Geek} alt="" />
                    <input placeholder='O que deseja procurar?'></input>

                </div>

                <div>
                   <button className={style.btn}>Login</button>
                </div>
                <FiSearch className={style.lupa}/>
            </div>
        </div>
    )
}

export default Navbar;