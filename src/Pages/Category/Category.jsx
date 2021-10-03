import React from 'react'
import { Link } from 'react-router-dom'
import { Categorystyle, Headerstyle } from './Category.style'



const Header = () => {
    return (

        <Headerstyle>
            <h1>Choose a Category</h1>
        </Headerstyle>


    )
}

function Category() {
    return (
        <>
            <Header />
            <Categorystyle>
                <article >
                    <Link to="/subcategory">  <article className="box"></article></Link>
                    <h2>1</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>2</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>3</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>4</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>5</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>6</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>7</h2>
                </article>
                <article >
                    <article className="box"></article>
                    <h2>8</h2>
                </article>


            </Categorystyle>
        </>
    )
}

export default Category;
