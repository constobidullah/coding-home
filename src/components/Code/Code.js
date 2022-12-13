import React, { useEffect, useState } from 'react';
import AboutCoatch from '../AboutCoatch/AboutCoatch';
import CodeDetails from '../CodeDetails/CodeDetails';
import './Code.css'

const Code = () => {

    const [codes, setCodes] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('codeFakeApi.json')
        .then(res => res.json())
        .then(data => setCodes(data))
    }, [])

    const handleList = (code) => {
        const newCart = [...cart, code];
        setCart(newCart)
    }

    return (
        <div className='code-compo-container'>
            <div className='codes-pass-compo-container'>
                {
                    codes.map(code => <CodeDetails 
                        key={code.id} 
                        code={code}
                        handleList={handleList}
                        ></CodeDetails>)
                }
            </div>
            <div className='about-coatch'>
                <AboutCoatch cart={cart}></AboutCoatch>
            </div>
        </div>
    );
};

export default Code;