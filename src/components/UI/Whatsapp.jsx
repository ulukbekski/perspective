import React from 'react';
import '../../styles/whatsapp.css'

const Whatsapp = () => {
    const [show, setShow] = React.useState(false)
    return (
        <div className='watsap'>

            <div id='whatsapp-chat' className={show ? "show" : "hide"}>
                <div className='header-chat'>
                    <div className='head-home'><h3>Здраствуйте!</h3>
                        <p>Выберите консультанта</p></div>
                    <div className='get-new hide'><div id='get-label'></div><div id='get-nama'></div></div></div>
                <div className='home-chat'>

                    <a className='informasi' href='javascript:void' title='Chat Whatsapp'>
                        <div className='info-avatar'><img src='https://2.bp.blogspot.com/-y6xNA_8TpFo/XXWzkdYk0MI/AAAAAAAAA5s/RCzTBJ_FbMwVt5AEZKekwQqiDNqdNQJjgCLcBGAs/s70/supportmale.png' /></div>
                        <div className='info-chat'>
                            <span className='chat-label'>Консультация</span>
                            <span className='chat-nama'>Эдил</span>
                        </div><span className='my-number'>6281977094280</span>
                    </a>

                    <a className='informasi' href='javascript:void' title='Chat Whatsapp'>
                        <div className='info-avatar'><img src='https://4.bp.blogspot.com/-X1Xs2iRKabY/XXWzkqQ-iDI/AAAAAAAAA5w/HSyhR0gIXvUzlAx5XgaZzmlrCJkTgrOFQCLcBGAs/s70/supportfemale.png' /></div>
                        <div className='info-chat'>
                            <span className='chat-label'>Консультация</span>
                            <span className='chat-nama'>Ранелья</span>
                        </div><span className='my-number'>6222222222</span>
                    </a>

                    <div className='blanter-msg'>Или можете позвонить на номер <br /> <b>+62123456</b> от <i>9:00 до 19:00</i></div>
                </div>
                {/* <div className='start-chat hide'>
            <div className='first-msg'><span>Hello! What can I do for you?</span></div>
            <div className='blanter-msg'><textarea id='chat-input' placeholder='Write a response' maxlength='120' row='1'></textarea>
            <a href='javascript:void;' id='send-it'>Send</a></div></div> */}
                <div id='get-number'></div><span onClick={() => setShow(false)} className='close-chat'>&times;</span>
            </div>
            <a className='blantershow-chat' onClick={() => setShow((prev) => !prev)} href='javascript:void' title='Show Chat'><i className='fab fa-whatsapp'></i>Подробная консультации</a>
        </div>
    );
}

export default Whatsapp;
