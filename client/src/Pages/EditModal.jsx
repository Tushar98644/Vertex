import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    MDBInput,
}
    from 'mdb-react-ui-kit';

const Edit_Modal = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleclose = () => {
        setShow(false);
        navigate('/');
    }

    const loadminutes = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
        console.log(data);
        setName(data.name);
        setDescription(data.description);
        setDate(data.date);
    }

    useEffect(() => {
        loadminutes();
    }, [])

    const updateMinute = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('date', date);
        formData.append('image', image);
        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/${id}/`,
            data: formData,
        }).then((res) => {
            console.log(res.data);
            alert("Minute Updated Successfully");
            navigate('/');
        }).catch((err) => {
            console.log(err);
            alert("Enter the details correctly")
        })
    }
    return (
        <><Navbar />
            <Modal show={show} >
                <Modal.Header >
                    <Modal.Title>Update Minute</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MDBInput wrapperClass='mb-4 my-5' label='Title' id='formControlLg' type='text' size="lg" value={name} required onChange={(e) => setName(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Description' id='formControlLg' type='text' size="lg" value={description} required onChange={(e) => setDescription(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Enter Date' id='formControlLg' type='date' size="lg" value={date} onChange={(e) => setDate(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='click to upload image' id='formControlLg' type='file' size="lg" onChange={(e) => setImage(e.target.files[0])} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleclose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateMinute} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Footer /></>
    );
}

export default Edit_Modal;