import React, { useState, useEffect } from "react"
//import "react-datepicker/dist/react-datepicker.css"
import moment from "moment"
import Dropzone from "react-dropzone"
import { toast } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'

function UploadDocument({ documents, setDocuments, edit, editJobData, setLoading }) {
  
  const name = ''
  const today = moment()
  let todayDate = today.format("MM/DD/YYYY")
  const [ deleteFile, setDeleteFile ] = useState(false)
  const [ fileName, setFileName ] = useState('')
  const [ indexValue, setIndexValue ] = useState(0)

  const onUploadHandler = (file) => {
    let docs = [...documents]
    if (file.length > 0) {
      file.forEach((eachFile) => {
        const reader = new FileReader()
        reader.readAsDataURL(eachFile)
        reader.onload = (event) => {
          const obj = {
            documentName: eachFile.name,
            base64: event.target.result,
            uploadedDate: todayDate,
            uploadedBy: name,
            category: "Job Description",
            role: 'role'
          }
          docs.push(obj)
          setDocuments((current) => [...current, obj])
        }
      })
    }
  }

  const changeCategory = (e, index) => {
    let doc = [...documents]
    doc[index] = { ...doc[index], category: e.target.value }
    setDocuments(doc)
  }

  const fileDelete = async () => {
    setDeleteFile(false)
    setLoading(true)
    setLoading(false)
}

  const DeleteRow = (index, eachFile) => {
    if(edit && !eachFile.base64) {
      setIndexValue(index)
      setFileName(eachFile.documentName)
      setDeleteFile(true)
    }
    else {
      let doc = [...documents]
      doc.splice(index, 1)
      setDocuments(doc)
    }
  }

  return (
    <>
      <div>
        <div className="mb-2 mt-3">
          <div className="ml-4 mr-5 d-flex">
            Upload essential documents required for the job
            <Dropzone onDrop={onUploadHandler}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="ml-auto">
                  <button type="button" className=" btn btn-text-accent mr-1">
                    <i
                      aria-hidden="true"
                      className="far fa-cloud-upload mr-1 fa-fw"
                    ></i>
                    Upload
                  </button>
                  <input type="file" {...getInputProps()} accept=".doc, .docx, .pdf, application/msword" />
                </div>
              )}
            </Dropzone>
          </div>

          <div className="ml-0 mt-2 mb-4 mr-4">
            <div className="card card-flat bg-gray4 ml-4 ml-0-600">
              <div className="card-body">
                { documents.length > 0 &&
                  <>
                    <div className="row mx-3 d-flex align-items-center">
                      <div className="col-lg-3">
                        <label>File Name</label>
                      </div>
                      <div className="col-lg-4">
                        <label>Category</label>
                      </div>
                      <div className="col-lg-2">
                        <label>Date</label>
                      </div>
                      <div className="col-lg-2">
                        <label>Uploaded By</label>
                      </div>
                    </div>
                    <hr/>
                  </>
                }
                { documents.length > 0 ?
                  documents.map((eachFile, index) => (
                    <div className="row m-3 d-flex align-items-center">
                      <div className="col-lg-3">
                        <div>{eachFile.documentName}</div>
                      </div>
                      <div className="col-lg-4">
                        <input
                          type='text'
                          value={eachFile.category}
                          onChange={(e) => changeCategory(e, index)}
                          disabled={eachFile.category === 'Video Job Description'}
                        />
                      </div>
                      <div className="col-lg-2">
                        <div>{eachFile.uploadedDate}</div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-floating form-date">
                          <div>
                            {eachFile.uploadedBy}                          
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1">
                        <div title="Delete">
                          <button
                            type="button"
                            onClick={() => DeleteRow(index, eachFile)}
                            className="btn btn-text-accent mr-2"
                            title="Delete"
                          >
                            <i
                              className="fal fa-trash-alt fa-fw"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )) :               
                  <div class="text-center p-3">
                      <div class="avatar avatar-lg">
                          <i class="fad fa-users-slash"></i>
                      </div>
                      <div class="mt-2">
                          No Documents { edit ? 'Found' : 'Added'}
                      </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={deleteFile}>               
        <div>
            <div className="bl-modal-body text-center">
                <div className="avatar avatar-lg avatar-red2 mr-3">
                    <i class="fas fa-exclamation-triangle fa-fw"></i>
                </div>
                <p className="text-center lead mt-3">
                  <h6 className="m-2">{fileName}</h6> will be deleted permanently
                </p>
                <div class="text-center my-4">
                    <button type="button" className="btn btn-secondary mr-3" data-dismiss="modal" onClick={() => setDeleteFile(false)}>Cancel</button>
                    <button type="button" className="close p-0 bl-modal-close-btn" data-dismiss="modal" aria-label="Close" onClick={() => setDeleteFile(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <button type="button" className="btn btn-primary" onClick={fileDelete}>Confirm Delete</button>
                </div>
            </div>
        </div>
      </Modal>
    </>
  )
}

export default UploadDocument
