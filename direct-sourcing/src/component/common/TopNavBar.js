import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { BsLinkedin } from "react-icons/bs"
import Amazon from './Amazon.png'

function TopNavBar() {

    const [ login, setLogin ] = useState(false)

    return (
        <>
            <div className='d-flex align-items-center'>
                <div className='my-2 mx-4'>
                    <img height='40' width='120' src={Amazon} alt="" />
                </div>
                { localStorage.getItem('role') === 'Candidate' &&
                <div className='ml-auto my-2 mx-4'>
                    <button className='btn btn-outline-secondary' onClick={() => setLogin(true)}>
                        LOG IN
                    </button>
                </div>}
            </div>
            <Modal show={login}>
                <Modal.Header>
                    <div>
                        <h6>Welcome Back!</h6>                                         
                    </div>
                    <div>
                        <button
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setLogin(false)}
                            class="close p-0 bl-modal-close-btn mx-1"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column mx-5'>
                        <button className='btn btn-secondary m-2'>
                            <BsFacebook /> Login with Facebook
                        </button>
                        <button className='btn btn-secondary m-2'>
                            <FcGoogle /> Login with Google
                        </button>
                        <button className='btn btn-secondary m-2'>
                            <BsLinkedin /> Login with Linkedin
                        </button>                      
                    </div>
                    <div className='text-center'>
                        OR
                    </div>
                    <div className='mx-3'>
                        <label>Email</label>
                        <input type='text'>

                        </input>
                    </div>
                    <div className='mx-3 mb-2'>
                        <label>Password</label>
                        <input type='text'>

                        </input>
                    </div>
                    <div className='d-flex align-items-center mx-3 my-3'>
                        <div>
                            <input type='checkbox'>

                            </input>
                        </div>                      
                        <div className='ml-2'>Remember me</div>
                        <div className='ml-auto'>
                            <a href='/'>Forgot Password</a>
                        </div>                     
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TopNavBar