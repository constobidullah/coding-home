import React from 'react';
import logo from '../../image/guru.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AboutCoatch.css'

const AboutCoatch = () => {

    const notify = () => {
        toast.success("Activity complete", {
            position: "top-center",
            // hideProgressBar: false,
            // closeOnClick: true,
            // pauseOnHover: true,
            draggable: true,
            progress: 100,
            theme: "dark",
        })
    }

    return (
        <div className='about-coatch-container'>

            <div className='info'>
                <img src={logo} alt="" />
                <div className='coatch-text'>
                    <h2>Obidullah</h2>
                    <p><i class="fa-solid fa-location-dot"></i>Madaripur, Dhaka.</p>
                </div>
            </div>

            <div className='coatch-into'>

                <div>
                    <h3>Weight</h3>
                    <p>42kg</p>
                </div>
                <div>
                    <h3>Height</h3>
                    <p>65 inch</p>
                </div>
                <div>
                    <h3>Age</h3>
                    <p>19 year</p>
                </div>

            </div>

            <h3>Break time(Minute)</h3>
            <div className='break-time'>
                <p>10</p>
                <p>20</p>
                <p>30</p>
                <p>40</p>
                <p>50</p>
            </div>

            <h3>Coding details </h3>
            <div className='coding-time'>
                <h4>Coding time</h4>
                <p>Hours</p>
            </div>

            <div className='coding-break'>
                <h4>Coding Break</h4>
                <p>Minute</p>
            </div>

            <ToastContainer
                position="top-center"
                // hideProgressBar={false}
                newestOnTop={false}
                // closeOnClick
                rtl={false}
                // pauseOnFocusLoss
                draggable
                // pauseOnHover
                theme="dark"
            ></ToastContainer>
            <div className='activity-complete-btn'>
                <button onClick={notify}>Activity complete</button>
            </div>

        </div>
    );
};

export default AboutCoatch;