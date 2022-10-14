import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createDataEvent } from "../../store/action/event";

export default function Modal() {
  const dispatch = useDispatch();
  // const event = useSelector((state) => state.event);

  const [form, setForm] = useState({});
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // only used for data that has file type data
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    dispatch(createDataEvent(formData));
  };

  const handleChangeForm = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content ">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Create Event
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
        <div
          className="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          Message
        </div>
        <form className="modal-body d-flex flex-column" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChangeForm} />
          <label>Category</label>
          <input type="text" name="category" onChange={handleChangeForm} />
          <label>Location</label>
          <input type="text" name="location" onChange={handleChangeForm} />
          <label>Date Time Show</label>
          <input type="text" name="dateTimeShow" onChange={handleChangeForm} />
          <label>Price</label>
          <input type="text" name="price" onChange={handleChangeForm} />
          <label>Image</label>
          <input type="file" name="image" onChange={handleChangeForm} />
          {image && <img src={image} alt="preview-image" />}

          <label>Detail</label>
          <input type="text" name="detail" onChange={handleChangeForm} />
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              {/* Create event */}
              <div className="spinner-border text-white" role="status">
                <span className="sr-only"></span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
