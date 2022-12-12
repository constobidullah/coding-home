import React, { useEffect, useState } from 'react';
import AboutCoatch from '../AboutCoatch/AboutCoatch';
import CodeDetails from '../CodeDetails/CodeDetails';
import './Code.css'

const Code = () => {

    const [codes, setCodes] = useState([]);
    useEffect(() => {
        fetch('codeFakeApi.json')
        .then(res => res.json())
        .then(data => setCodes(data))
    }, [])

    return (
        <div className='code-compo-container'>
            <div className='codes-pass-compo-container'>
                {
                    codes.map(code => <CodeDetails key={code.id} code={code}></CodeDetails>)
                }
            </div>
            <div className='about-coatch'>
                <AboutCoatch></AboutCoatch>
            </div>
        </div>
    );
};

export default Code;