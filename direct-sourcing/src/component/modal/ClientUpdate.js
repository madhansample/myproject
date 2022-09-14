import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ClientUpdate(props) {
  const [form, setForm] = useState({
    ID_user: "",
    lastname: "",
    middlename: "",
    name: "",
    stateName: "",
    CountryName: "",
    cityName: "",
    address: "",
    zipCode: "",
    description: "",
  });

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const close = () => {
    props.close(true);
  };
  return (
    <>
      <div class="bl-modal reveal-overlay reveal-card">
        <div class="bl-modal-overlay"></div>
        <div class="bl-modal-container">
          <div class="bl-modal-card bl-modal-card-lg">
            <div class="bl-modal-header">
              <h6 v-if="title" class="bl-modal-title">
                Update Client
              </h6>
              <button
                type="button"
                class="close p-0 bl-modal-close-btn"
                data-dismiss="modal"
                aria-label="Close"
                onClick={close}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div v-if="showBody" class="bl-modal-body pb-0">
              <div
                v-if="isAssign === false"
                class="card card-flat card-borderless bg-gray4 text-center"
              >
                <div class="card-body">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-floating">
                          <Form.Control
                            type="text"
                            //disabled
                            placeholder="Enter Tenant Type "
                            value={form.tenanttype}
                            onChange={(e) =>
                              setField("tenanttype", e.target.value)
                            }
                          />
                          <label>Tenant Type*</label>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-floating">
                          <Form.Control
                            type="text"
                            //disabled
                            placeholder="Enter Tenant Name "
                            value={form.tenant}
                            onChange={(e) => setField("tenant", e.target.value)}
                          />
                          <label>Tenant Name*</label>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-floating">
                          <Form.Control
                            type="text"
                            //disabled
                            placeholder="Enter email "
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                          />
                          <label>Email id*</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div class="col-lg-6">
                        <div class="form-floating">
                          <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            value={form.name}
                            onChange={(e) => setField("name", e.target.value)}
                          />

                          <label>First Name *</label>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="form-floating">
                          <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            value={form.lastname}
                            onChange={(e) =>
                              setField("lastname", e.target.value)
                            }
                          />

                          <label>Last Name *</label>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div className="row mb-2">
                        <div className="col-lg-12">
                          <label className="mb-2"> Address </label>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              placeholder="Enter zipcode "
                              id="zipCode"
                              value={form.zipCode}
                              onChange={(e) =>
                                setField("zipCode", e.target.value)
                              }
                            />
                            <label>Zipcode* </label>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="Address"
                              value={form.address}
                              // onChange={handleChange}
                            />
                            <label>Address 1 </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              className="form-control"
                              id="addressCity"
                              placeholder="Address City"
                              value={form.cityName}
                              onChange={(e) =>
                                setField("cityName", e.target.value)
                              }
                            />
                            <label>City* </label>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              className="form-control"
                              id="stateName"
                              placeholder="Address State"
                              value={form.stateName}
                              onChange={(e) =>
                                setField("stateName", e.target.value)
                              }
                            />
                            <label> State* </label>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-floating">
                            <Form.Control
                              type="text"
                              className="form-control"
                              id="CountryName"
                              placeholder="Address Country"
                              value={form.CountryName}
                              onChange={(e) =>
                                setField("CountryName", e.target.value)
                              }
                            />
                            <label> Country* </label>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div class="row mb-2">
                        <div class="col-12">
                          <div class="mb-2">
                            <label>Description</label>
                            <div class="form-floating">
                              <textarea
                                class="form-control"
                                placeholder="Description"
                                id="description"
                                value={form.description}
                                // onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer mt-4 mb-0">
              <button
                type="button"
                class="btn btn-secondary mr-2"
                data-dismiss="modal"
                onClick={close}
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientUpdate;
