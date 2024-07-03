import { Navbar, School_form, School_view } from "@/components";
import { Fragment } from "react";

const School_List = () => {
    return (
        <Fragment>
            <Navbar Heading="School List" />
            <School_form />
            <School_view />
        </Fragment>
    );
}

export default School_List;