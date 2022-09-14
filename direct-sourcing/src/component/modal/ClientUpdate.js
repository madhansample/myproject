import { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ClientUpdate = (props) => {
  const { openClientUpdate, setOpenClientUpdate } = props;
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "Clive",
    lastName: "Liyod",
    email: "clive@yopmail.com",
    tenant: "TCC",
    stateName: "AR",
    countryName: "United States",
    cityName: "Conway",
    address: "Conway, AR, United States",
    zipCode: "72032",
    description: "At TCC, we don’t just accept the differences—we celebrate them. We are committed to cultivating and preserving a culture of inclusion and connectedness. We are able to grow and learn better together with a diverse team of employees. As an equal opportunity employer, we stay true to our mission by ensuring that our place can be anyone’s place. Explore what it is like to work and grow at HCL!",
  });

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    var file1 = dataURLtoFile(base64, "hello.jpeg");
    console.log(file1);
  };
  return (
    <Modal show={openClientUpdate} size="lg">
      <div className="bl-modal reveal-overlay reveal-card">
        <div className="bl-modal-overlay"></div>
        <div className="bl-modal-container">
          <div className="bl-modal-card bl-modal-card-lg">
            <div className="bl-modal-header">
              <h6 v-if="title" className="bl-modal-title">
                Update Client
              </h6>
              <button
                type="button"
                className="close p-0 bl-modal-close-btn"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setOpenClientUpdate(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div v-if="showBody" className="bl-modal-body pb-0">
              <div
                v-if="isAssign === false"
                className="card card-flat card-borderless bg-gray4 text-center"
              >
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-floating">
                          <Form.Control
                            type="text"
                            disabled
                            placeholder="Enter Tenant Name"
                            value={form.tenant}
                            onChange={(e) => setField("tenant", e.target.value)}
                            isInvalid={!!errors.tenant}
                          />
                          <label>Tenant Name *</label>
                          <Form.Control.Feedback type="invalid">
                            {errors.tenant}
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-floating">
                          <Form.Control
                            type="text"
                            disabled
                            placeholder="Enter email "
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            isInvalid={!!errors.email}
                          />
                          <label>Email id *</label>
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-6">
                        <div className="form-floating">
                          <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            value={form.firstName}
                            onChange={(e) =>
                              setField("firstName", e.target.value)
                            }
                            isInvalid={!!errors.name}
                          />
                          <label>First Name *</label>
                          <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-floating">
                          <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            value={form.lastName}
                            onChange={(e) =>
                              setField("lastName", e.target.value)
                            }
                            isInvalid={!!errors.lastName}
                          />
                          <label>Last Name *</label>
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                          </Form.Control.Feedback>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-12">
                        <div className="form-floating">
                          <Form.Control
                            type="text"
                            placeholder="Search Address"
                            isInvalid={!!errors.address}
                          />
                          <label>Search Address *</label>
                          <Form.Control.Feedback type="invalid">
                            {errors.address}
                          </Form.Control.Feedback>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="row mb-2">
                        <div className="col-lg-12">
                          <label className="mb-2">Address</label>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              placeholder="Enter Zipcode"
                              value={form.zipCode}
                              onChange={(e) =>
                                setField("zipCode", e.target.value)
                              }
                              isInvalid={!!errors.zipCode}
                            />
                            <label>Zipcode *</label>
                            <Form.Control.Feedback type="invalid">
                              {errors.zipCode}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              placeholder="Enter Address"
                              value={form.address}
                              onChange={(e) =>
                                setField("address", e.target.value)
                              }
                              isInvalid={!!errors.address}
                            />
                            <label>Address *</label>
                            <Form.Control.Feedback type="invalid">
                              {errors.address}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              placeholder="Enter City"
                              value={form.cityName}
                              onChange={(e) =>
                                setField("cityName", e.target.value)
                              }
                              isInvalid={!!errors.cityName}
                            />
                            <label>City *</label>
                            <Form.Control.Feedback type="invalid">
                              {errors.cityName}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              placeholder="Enter State"
                              value={form.stateName}
                              onChange={(e) =>
                                setField("stateName", e.target.value)
                              }
                              isInvalid={!!errors.stateName}
                            />
                            <label>State *</label>
                            <Form.Control.Feedback type="invalid">
                              {errors.stateName}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              placeholder="Enter Country"
                              value={form.countryName}
                              onChange={(e) =>
                                setField("countryName", e.target.value)
                              }
                              isInvalid={!!errors.countryName}
                            />
                            <label>Country *</label>
                            <Form.Control.Feedback type="invalid">
                              {errors.countryName}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-12">
                        <div className="form-floating">
                          <Form.Control
                            as="textarea"
                            placeholder="Enter Description"
                            value={form.description}
                            onChange={(e) =>
                              setField("description", e.target.value)
                            }
                            isInvalid={!!errors.description}
                          />
                          <label>Description *</label>
                          <Form.Control.Feedback type="invalid">
                            {errors.description}
                          </Form.Control.Feedback>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-12">
                        <div className="form-floating">
                          <Form.Group controlId="formFile">
                            <Form.Label style={{ float: "left" }}>
                              Upload Logo *
                              <small> Supported Formats: .jpeg, .png</small>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              accept="image/png,  image/jpeg"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-12">
                        <div className="form-floating">
                          <Form.Group controlId="formFile">
                            <Form.Label style={{ float: "left" }}>
                              Upload Image *
                              <small> Supported Formats: .jpeg, .png</small>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              accept="image/png,  image/jpeg"
                            />
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer mt-4 mb-0">
              <button
                type="button"
                className="btn btn-secondary mr-2"
                data-dismiss="modal"
                onClick={() => setOpenClientUpdate(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                // onClick={handleSubmit}
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ClientUpdate;
