import React, { useState } from 'react';
import TopNavBar from '../../common/TopNavBar';
import Modal from 'react-bootstrap/Modal'
import AddJob from './AddJob';

const Index = () => {
    const [ showAddJobModal, setShowAddJobModal ] = useState(false)
    return (
        <>
            <button type='button' className='btn btn-outline-secondary m-2' onClick={() => setShowAddJobModal(true)}>
                Add Job
            </button>
            <Modal show={showAddJobModal} size="lg">
                <Modal.Header>        
                    <h6 class="">Add Job</h6>
                    <button type="button" data-dismiss="modal" aria-label="Close" 
                        onClick={() => setShowAddJobModal(false)} 
                        class="close p-0 bl-modal-close-btn"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <AddJob 
                        closePanel={() => setShowAddJobModal(false)} 
                    />
                </Modal.Body>             
            </Modal>
        </>
    )
};

export default Index;