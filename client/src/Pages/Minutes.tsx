import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Card from "../components/cards/card";


const Minutes = () => {

    // const [minutes, setMinutes] = useState([]);

    // const getMinutes = async () => {
    //     const response = await axios.get('http://127.0.0.1:8000/api/');
    //     console.log(response.data);
    //     setMinutes(response.data);
    // }

    // useEffect(() => {
    //     getMinutes();
    // }, [])

    return (
        <><Navbar Heading="Minute List" />
            {/* {
                minutes.map((minute, index) => (
                    <Card title={minute.name} description={minute.description} url={minute.image} date={minute.date} />
                )
                )
            } */}
            <Card />
            <Footer /></>
    );
}

export default Minutes;