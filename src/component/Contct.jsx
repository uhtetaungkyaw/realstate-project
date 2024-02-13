import React, { useState } from 'react'

export const Contct = () => {

    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")

    const submitHandler = () => {
        console.log(`Message: ${message}`)
        console.log(`Name: ${name}`)
        console.log(`Email: ${email}`)
        console.log(`Subject: ${subject}`)
    }

    return (
        <>
            <section className="two">
                <div className="get-combine">
                    <div className="get-combine__getintouch">
                        <h2>Get in Touch</h2>
                        <textarea type="text" className='get-combine__input' placeholder='Enter Message'
                            value={message}
                            onChange={
                                (e) => {
                                    // console.log("Your Message " + e.target.value)
                                    setMessage(e.target.value)
                                }
                            }
                        />

                        <div className="name-email">
                            <input type="text" className='name-email__name' placeholder='Enter your Name'

                                value={name}
                                onChange={
                                    (e) => {
                                        // console.log("Your Message " + e.target.value)
                                        setName(e.target.value)
                                    }
                                }
                            />
                            <input type="text" className='name-email__password' placeholder='Enter your Email'

                                value={email}
                                onChange={
                                    (e) => {
                                        // console.log("Your Message " + e.target.value)
                                        setEmail(e.target.value)
                                    }
                                }

                            />
                        </div>
                        <input type="text" className='get-combine__subject' placeholder='Enter Subject'

                            value={subject}
                            onChange={
                                (e) => {
                                    // console.log("Your Message " + e.target.value)
                                    setSubject(e.target.value)
                                }
                            }

                        /><br />
                        <button className='btn btn--submit' onClick={submitHandler}>Submit</button>

                    </div>
                    <div className="get-combine__getinicon">

                        <div className="icon-text">
                            <img src="#" alt="icon" />
                            <address>Hledan,Yangon</address>
                            <address>Hledan,C91170</address>
                        </div>
                        <div className="icon-text">
                            <img src="#" alt="icon" />
                            <address>09-766189813</address>
                            <address>Mon to Fri  9am to 6pm</address>
                        </div>
                        <div className="icon-text">
                            <img src="#" alt="icon" />
                            <address>metro@yahoo.com</address>
                            <address>send us your query
                                anytime</address>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
