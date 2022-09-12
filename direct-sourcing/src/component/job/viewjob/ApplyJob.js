import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";

const ApplyJob = () => {
  const [isApplyJobModal, setIsApplyJobModal] = useState(false);
  return (
    <>
      <div className="col-xxl-3 col-sm-4 mt-2">
        <div className="card card-lg mb-2">
          <div className="card-body" style={{ padding: "1.1rem" }}>
            <div className="w-50">
              <h4 className="font-light mb-0">Apply</h4>
              {/* <p className="mb-0 " style={{ width: "180px" }}>
              asdasdsd
            </p> */}
            </div>
            <hr></hr>
            <div>
              <button
                className="btn btn-sm"
                style={{
                  width: "100%",
                  backgroundColor: "#3388C4",
                  color: "whitesmoke",
                  fontWeight: "bold",
                }}
                onClick={() => setIsApplyJobModal(true)}
              >
                <i className="fas fa-plus mr-2" />
                Apply for this job
              </button>
            </div>

            <div
              className="d-flex mt-2 border-bottom mb-2"
              style={{ height: "15px" }}
            >
              <hr></hr>
              <div>
                <p style={{ color: "gray", backgroundColor: "white" }}>
                  <small className="mx-2">Powered by High5Hire</small>
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-4 mt-2">
        <div className="card card-lg mb-2">
          <div className="card-body">
            <div>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{
                  width: "100%",
                  backgroundColor: "#3388C4",
                  color: "whitesmoke",
                  fontWeight: "bold",
                }}
                // onClick={() => closeModal(true)}
              >
                Refer someone
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-4 mt-2">
        <div className="card card-lg mb-2">
          <div className="card-body">
            <div>
              <h6>Join our Talent Community</h6>
            </div>
            <p style={{ color: "gray" }}>
              <small>
                Not the job you're looking for? Become a member of our talent
                community to stay connected and be informed of any new
                opportunities.
              </small>
            </p>
            <div>
              <button
                className="btn btn-outline-primary btn-sm"
                style={{
                  width: "25%",
                  backgroundColor: "#3388C4",
                  color: "whitesmoke",
                  fontWeight: "bold",
                }}
                // onClick={() => closeModal(true)}
              >
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Job Modal */}

      {/* <Modal
        show={isApplyJobModal}
        size="lg"
        className="modal fade"
        data-backdrop="static"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-header" id="CreateQuestionModal">
          <h6 className="modal-title" id="CreateQuestionModalLabel">
            Create a question.
          </h6>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setIsApplyJobModal(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Modal.Body>
          <CreateQuestion
                        close={setShowAddQuestionModal}
                        parent="QuestionLib"
                        testCategory="undefined"
                        setAddQuestion={setAddQuestion}
                        addQuestion={addQuestion}
                        getQuestions={getQuestions}
          />
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default ApplyJob;
