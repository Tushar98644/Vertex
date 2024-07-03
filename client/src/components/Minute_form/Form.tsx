'use client'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Form = () => {

  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [date, setDate] = useState<string>('');

  const AddMinutes = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image as Blob);
    formData.append('date', date);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${apiUrl}/api/add-minute/`, formData);
        console.log(response.data);
        alert("Minute Added Successfully");
        router.push('/');
    }
    catch (err) {
      console.log(`There was a problem while sending the response to the minute route: ${err}`);
      alert("Error in adding minute");
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <MDBContainer fluid classtitle="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="pt-12 img-fluid" alt="Phone image" width={500} height={500} />
        </MDBCol>
        <MDBCol col='4' md='4' className='flex flex-col items-center justify-center'>
          <MDBInput wrapperClass='mb-4 my-5' label='Title' id='formControlLg' type='text' size="lg" value={title} required onChange={(e) => setTitle(e.target.value)} />
          <MDBInput wrapperClass='mb-4 my-2' label='Description' id='formControlLg' type='text' size="lg" value={description} required onChange={(e) => setDescription(e.target.value)} />
          <MDBInput wrapperClass='mb-4 my-2' label='Enter Date' id='formControlLg' type='date' size="lg" onChange={(e) => setDate(e.target.value)} />
          <MDBInput wrapperClass='mb-4 my-2' label='click to upload image' id='formControlLg' type='file' size="lg" onChange={handleFileChange} />
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={AddMinutes} className='bg-blue-700 px-10 py-3 rounded-full text-white'>Add Minutes</motion.button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Form;