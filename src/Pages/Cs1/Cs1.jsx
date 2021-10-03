import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';
import { Crossicon, Plusicon } from '../../svgs';
import { Dropdownstyle, Headerstyle, Cardstyle, Buttonstyle } from './Cs1.style';




const Header = () => {

    return (

        <Headerstyle>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dignissimos!</h3>
            <h3>Lorem ipsum dolor sit amet consecteturrr </h3>
        </Headerstyle>


    )
}

const Buttontab = () => {
    return (
        <Buttonstyle>
            <Link to="./cat1" className="login-btn">Back</Link>
            <Link to="/category" className="login-btn">Next</Link>

        </Buttonstyle>
    )
}


const Card = () => {

    const [isflipped, setisflipped] = useState(false);

    const handleClick = () => {

        setisflipped(!isflipped);

    };


    return (

        <Cardstyle>
            <ReactCardFlip isFlipped={isflipped} flipDirection="vertical">
                <article>
                    <span className="icon" onClick={handleClick}><Plusicon /></span>
                </article>

                <article>
                    <span className="icon" onClick={handleClick}><Crossicon /></span>
                </article>
            </ReactCardFlip>


        </Cardstyle>
    )
}






function Cs1() {

    return (
        <>
            <Header />
            <Dropdownstyle>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Dropdownstyle>
            <Buttontab />
        </>
    )
}

export default Cs1;
