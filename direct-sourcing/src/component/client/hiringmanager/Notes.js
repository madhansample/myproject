import React from 'react'
import Avatar from 'react-avatar'
import moment from 'moment'

const Notes = ({ notesDetails, notesValue, setNotesValue, setNotesDetails }) => {
  return (
    <div className="card card-flat bg-gray4 m-3">
        <div className="card-body">
            <div className="row">
                <div className="col-lg-12">
                    <h6>Add Notes</h6>
                </div>
            </div>
            <hr></hr>                      
            <div className='form-floating'>
                <textarea 
                    onChange={(e) => setNotesValue(e.target.value)} 
                    value={notesValue} 
                    className='form-control'
                />                                                    
            </div>                     
            <div className='d-flex'>
                <button 
                    className='btn btn-sm ml-auto mt-2' 
                    disabled={notesValue ? false : true}
                    onClick={() => {
                        let obj = {
                            comments: notesValue,
                            name: 'Name',
                            role: 'role',
                            createdDate: new Date(),
                            updatedDate: ''
                        }
                        setNotesDetails([ ...notesDetails, obj ]) 
                        setNotesValue('')                                                 
                    }}
                >
                    Add
                </button>
            </div>
            <div className="row m-2">
                <div className="col-lg-12">
                    {
                        notesDetails.length > 0 &&
                        notesDetails.map(item => 
                            <div className="d-flex mb-2">
                                <Avatar size="30" name={item.name} round="60px" />
                                <div className="ml-2">
                                    <p className="m-0">
                                        <strong>{item.name}</strong>
                                        <small className="ml-2">{moment(item.createdDate).format('MM/DD/YYYY')}</small>
                                        <p className="">
                                            <small>{item.comments}</small>
                                        </p>
                                    </p>                                                   
                                </div>
                            </div>
                        )
                    }                                                                                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notes