import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductsContext'
import Product from '../Products/Product'
import style from './Home.module.css'
import Banner from './Banner/Banner'
import { Link } from 'react-router-dom'

function Home() {

    const {produtos} = useContext(ProductContext)
    
    return (
        <>
            <Banner/>
            <div className={style.section}>
                <div className={style.titulo}>
                    <h3>Star Wars</h3>
                    
                    <Link to="/AllProducts" className={style.link}>Ver tudo</Link>
                </div>
                <div className={style.products} key={produtos.id}>
                    {produtos.map((product) => {
                        if (product.category === "Star-wars") {
                            return (
                                <Product key={product.id} product={product} />
                    
                            )
                        }
                    }
                    )}

                </div>
            </div>
            <div className={style.section}>
                <div className={style.titulo}>
                    <h3>Consoles</h3>
                    <Link to="/AllProducts" className={style.link}>Ver tudo</Link>
                </div>
                <div className={style.products} key={produtos.id}>
                    {produtos.map((product) => {
                        if (product.category === 'Consoles') {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        }
                    }
                    )}

                </div>
            </div>
            <div className={style.section}>
                <div className={style.titulo}>
                    <h3>Diversos</h3>
                    <Link to="/AllProducts" className={style.link}>Ver tudo</Link>
                </div>
                <div className={style.products} key={produtos.id}>
                    {produtos.map((product) => {
                        if (product.category === 'Diversos') {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        }
                    }
                    )}

                </div>
            </div>


        </>

    )
}

export default Home