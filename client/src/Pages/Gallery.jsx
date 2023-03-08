import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { useState,useEffect } from "react";
import axios from "axios";
import Gallery_base from "../components/Gallery/Gallery_base";
import Gallery_form from "../components/Gallery_form/gallery_form";


const Gallery = () => {
    return (
        <><Navbar Heading="Gallery"/>
        <Gallery_form/>
                    <Gallery_base  />
            <Footer /></>
    );
}



export default Gallery;