import { Navbar } from "@/components";
import Form from "@/components/Minute_form/Form";
import { Fragment } from "react";

const Add_minutes = () => {
    return (
        <Fragment>
            <Navbar Heading="Add Minutes" />
            <Form />
        </Fragment>
    );
}

export default Add_minutes;