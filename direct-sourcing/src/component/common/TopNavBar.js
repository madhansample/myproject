import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

function TopNavBar() {

    const [ login, setLogin ] = useState(false)

    return (
        <>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='my-2 mx-4'>
                    <img src="https://assets.livehire.com/tc-branding/hcltech/logo-3.png" alt="" />
                </div>
                <div className='ml-auto my-2 mx-4'>
                    <button className='btn btn-outline-secondary' onClick={() => setLogin(true)}>
                        LOG IN
                    </button>
                </div>
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
            </Modal>
        </>
    )
}

export default TopNavBar