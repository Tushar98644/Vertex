import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { motion, spring } from "framer-motion";
import Minute_modal from "../Modals/Minute_modal";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Button_delete = styled(motion.button)`
    background-color: red;
    border: none;
    color: white;
    border-radius: 80px;
    height:50px;
    width:130px;
    margin-top: 20px;
    margin-left:50px;
    `;

const Button_edit = styled(motion.button)`
background-color:blue;
border: none;
color: white;
border-radius: 80px;
height:50px;
width:130px;
margin-top: 20px;
margin-left:50px;
`;

const Card_main = () => {

    const [minutes, setMinutes] = useState([]);

    const loadminutes = async () => {
        const result = await axios.get('http://127.0.0.1:8000/api/')
        setMinutes(result.data);
    }

    useEffect(() => {
        loadminutes();
    }, [])


    const deleteMinute = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
        window.location.reload();
    }


    return (


        <div class="col row-cols-1 row-cols-md-3 g-4 p-5">
            {
                minutes.map((minute, index) => (
                    <div class="col mb-5">
                        <div class="card h-100">
                            <img src={minute.image} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{minute.title}</h5>
                                <p class="card-text">
                                    {minute.description}
                                </p>
                            </div>
                            <div class="card-body">
                                <Link to={`/update/${minute.id}`} style={{ color: "white", textDecoration: "none" }}>
                                    <Button_edit whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} class="card-link">
                                        Edit
                                    </Button_edit>
                                </Link>
                                <Button_delete whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} class="card-link  btn-danger" onClick={()=>deleteMinute(minute.id)}>Delete</Button_delete>
                            </div>
                            <div class="card-footer mt-2">
                                <small class="text-muted">Date created -{minute.date}</small>
                            </div>
                        </div>


                    </div>
                ))
            }
                </div>            
    );
}

export default Card_main;