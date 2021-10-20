import React from 'react'
import Character from '../character'
import { Link } from 'react-router-dom'
import './landing.css'

const Landing = () => {

    return (
        <section className="profiles">
            <Character name={"R2-D2"} image_url={'../../images/r2d2.jpg'} />
            <Character name={"ANAKIN SKYWALKER"} image_url={'../../images/anakin.jpg'} />
            <Character name={"BOBA FETT"} image_url={'../../images/boba-fett.jpg'} />
            <Character name={"CHEWBACCA"} image_url={'../../images/chewie.jpg'} />
            <Character name={"DARTH MAUL"} image_url={'../../images/maul.jpg'} />
            <Character name={"DARTH VADER"} image_url={'../../images/vader.jpg'} />
            <Character name={"HAN SOLO"} image_url={'../../images/han.jpg'} />
            <Character name={"LANDO CALRISSIAN"} image_url={'../../images/lando.jpg'} />
            <Character name={"LEIA ORGANA"} image_url={'../../images/leia.jpg'} />
            <Link to="/luke-skywalker">
                <Character name={"LUKE SKYWALKER"} image_url={'../../images/luke-skywalker-2.jpg'} />
            </Link>
            <Character name={"MACE WINDU"} image_url={'../../images/mace.jpg'} />
            <Character name={"OBI-WAN KENOBI"} image_url={'../../images/obi-wan.jpg'} />
            <Character name={"PALPATINE"} image_url={'../../images/palpatine.jpg'} />
            <Character name={"QUI GON JINN"} image_url={'../../images/qui-gon2.jpg'} />
            <Character name={"YODA"} image_url={'./../images/yoda3.jpg'} />
        </section>
    )
}

export default Landing
