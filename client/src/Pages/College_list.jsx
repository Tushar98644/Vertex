import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import College_form from "../components/College_form/college_form";
import College_view from "../components/College_form/College_view";

const College_List = () => {
    return ( 
        <><Navbar Heading="College List"/>
<College_form/>
<College_view/>
        <Footer /></>
     );
}
 
export default College_List;