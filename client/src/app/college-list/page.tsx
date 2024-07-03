
import { College_form, College_view, Navbar } from "@/components";
import { Fragment } from "react";

const College_List = () => {
    return (
        <Fragment>
            <Navbar Heading="College List" />
            <College_form />
            <College_view />
        </Fragment>
    );
}

export default College_List;