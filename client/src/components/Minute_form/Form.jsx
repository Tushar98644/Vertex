import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = styled(motion.button)`
    background-color:blue;
    border: none;
    color: white;
    padding: 15px 42px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0.5vw 9.5vw 2vw;
    border-radius: 7vw;
    cursor: pointer;
`;

const Form=()=> {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const AddMinutes = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('image', image);
    await axios ({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/',
      data: formData,
    }).then((res) => {
        console.log(res.data);
        alert("Minute Added Successfully");
        navigate('/');
    }).catch((err) => { 
        console.log(err);
        alert("Enter the details correctly")
    })
  }

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='4'>
          <MDBInput wrapperClass='mb-4 my-5' label='Title' id='formControlLg' type='text' size="lg" value={name} required onChange={(e)=>setName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4 my-2' label='Description' id='formControlLg' type='text' size="lg" value={description} required onChange={(e)=>setDescription(e.target.value)}/>
          <MDBInput wrapperClass='mb-4 my-2' label='Enter Date' id='formControlLg' type='date' size="lg" onChange={(e)=>setDate(e.target.value)} />
          <MDBInput wrapperClass='mb-4 my-2' label='click to upload image' id='formControlLg' type='file' size="lg" onChange={(e)=>setImage(e.target.files[0])} />
          <Button whileHover={{scale:1.1}} whileTap={{scale:0.8}} onClick={AddMinutes}>Add Minutes</Button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Form;