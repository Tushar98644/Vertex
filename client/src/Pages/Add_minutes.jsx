import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Form from "../components/Minute_form/Form";

const Gap = styled.div`
    height: 65vh;
    background-color: white;
`;

const Add_minutes = () => {
    return (
        <><Navbar Heading="Add Minutes"/>
            <Form/>
            <Footer /></>
    );
}

export default Add_minutes;