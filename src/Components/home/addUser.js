import React, { useState } from "react";

const AddUser = props => {
  const [form, setForm] = useState({
    name: {
      title: "",
      first: "",
      last: ""
    },
    email: "",
    username: "",
    password: "",
    gender: "",
    dob: "",
    phone: ""
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeFirst = e => {
    let FullName = JSON.parse(JSON.stringify(form));
    FullName.name.first = e.target.value;
    setForm(FullName);
  };

  const handleChangeLast = e => {
    let FullName = JSON.parse(JSON.stringify(form));
    FullName.name.last = e.target.value;
    setForm(FullName);
  };

  const handleChangeTitle = e => {
    let FullName = JSON.parse(JSON.stringify(form));
    FullName.name.title = e.target.value;
    setForm(FullName);
  };

  const handleAdd = e => {
    const closeForm = {
      name: {
        title: "",
        first: "",
        last: ""
      },
      email: "",
      username: "",
      password: "",
      gender: "",
      dob: "",
      phone: ""
    };
    setForm(closeForm);
    props.handleAddUser(form);
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add User
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="p-3">
                <div className="d-flex justify-content-between">
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChangeTitle}
                      name="title"
                      value={form.name.title}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChangeFirst}
                      name="first"
                      value={form.name.first}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChangeLast}
                      name="last"
                      value={form.name.last}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      name="username"
                      value={form.username}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                      name="email"
                      value={form.email}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                      name="password"
                      value={form.password}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Gender
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      name="gender"
                      value={form.gender}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      DOB
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={handleChange}
                      name="dob"
                      value={form.dob}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      onChange={handleChange}
                      name="phone"
                      value={form.phone}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAdd}
                data-dismiss="modal"
              >
                Save Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
