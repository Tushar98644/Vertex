import { Navbar, Gallery_base, Gallery_form } from "@/components";
import { Fragment } from "react";

const Gallery = () => {
    return (
        <Fragment>
            <Navbar Heading="Gallery" />
            <Gallery_form />
            <Gallery_base />
        </Fragment>
    );
}



export default Gallery;