import React from 'react';
import manzara from './img/sample.jpg';
import UstKisim from './UstKisim';

function Anasayfa() {
    return (
        <>
            <UstKisim />
            <div className='container'>
                <h1>Anasayfa</h1>
                <div className='text-center my-3'>
                    <img style={{ width: "50%" }} src={manzara} alt="Manzara" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio, error, a veritatis ea ullam exercitationem dignissimos nemo porro, optio quod ex? Dicta ut tempore labore ducimus nihil facere incidunt.</p>
            </div>
        </>
    );
}

export default Anasayfa;