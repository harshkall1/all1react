import React from 'react'
import './style.css'

import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Contactbar = () => {
    return (
        <div className='contactbar'>
            <a className="c-icon c-icon-w">
                <FaWhatsapp />
            </a>
            <a className="c-icon c-icon-f">
                <FaFacebookF />

            </a>
            <a className="c-icon c-icon-i">
                <FaInstagram />

            </a>
            <a className="c-icon c-icon-c">
                <IoIosCall />

            </a>
        </div>
    )
}

export default Contactbar