import React from 'react'
import { Link } from 'react-router-dom'
import { Categorystyle, Headerstyle, Buttonstyle } from './Subcategory.styled'



const Header = () => {
    return (

        <Headerstyle>
            <h1>Choose a Sub-Category</h1>
        </Headerstyle>


    )
}

const Buttontab = () => {
    return (
        <Buttonstyle>
            <Link to="./cs1" className="login-btn">Back</Link>
            <Link to="" className="login-btn">Next</Link>

        </Buttonstyle>
    )
}


function Subcategory() {
    return (
        <>
            <Header />
            <Categorystyle>
                <article >
                    <article className="box"></article>
                    <h2>1-A</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>1-B</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>1-C</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>1-D</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>1-E</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>1-F</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>1-G</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>1-H</h2>
                </article>


            </Categorystyle>
            <Buttontab></Buttontab>
        </>
    )
}

export default Subcategory;
