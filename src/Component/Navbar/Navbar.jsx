import React from 'react';
import style from './Navbar.module.css'
import Vetor from '../../assets/Logo/Vector.svg'
import Alura from '../../assets/Logo/AluraGeek-1.svg'
import Geek from '../../assets/Logo/AluraGeek.svg'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'




function Navbar() {
    return (
        <div>
            <div className={style.navbar}>
                <div className={style.logo_pesquisa}>
                    <Link to="/" >
                        <img src={Vetor} alt="" />
                    </Link>    
                        <img src={Alura} alt="" />
                        <img src={Geek} alt="" />
                    
                    <input placeholder='O que deseja procurar?'></input>
                </div>

                <div>
                    <Link to="/Cart">
                        <AiOutlineShoppingCart className={style.cart}/>
                    </Link>
                </div>
                <FiSearch className={style.lupa} />
            </div>
        </div>
    )
}

export default Navbar;