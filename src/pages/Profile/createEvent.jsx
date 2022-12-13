import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidemenu from "../../component/ProfileSection";
// import axios from "../../utils/axios";
import CardEvent from "../../component/CardEvent/create-event";
import "./createEvent.css";
import {
  getDataEvent,
  createDataEvent,
  updateDataEvent,
} from "../../store/action/event";

// import Modal from "../../component/Modal";

export default function CreateEvent() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [eventId, setEventId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    getEvent();
  }, [page]);

  const getEvent = () => {
    dispatch(getDataEvent(page));
  };

  const handleSubmit = (e) => {
    setIsUpdate(false);
    e.preventDefault();
    // only used for data that has file type data
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    dispatch(createDataEvent(formData)).then(() => {
      dispatch(getDataEvent(page));
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      location: "",
      dateTimeShow: "",
      price: "",
      image: "",
      detail: "",
    });
    setImage("");
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

  const setCreate = () => {
    setIsUpdate(false);
    setForm({
      name: "",
      category: "",
      location: "",
      dateTimeShow: "",
      price: "",
      image: "",
      detail: "",
    });
  };

  const setUpdate = (data) => {
    setIsUpdate(true);
    setEventId(data.eventId);
    setForm({
      name: data.name,
      category: data.category,
      location: data.location,
      dateTimeShow: data.dateTimeShow,
      price: data.price,
      image: data.image,
      detail: data.detail,
    });
  };

  // console.log(eventId);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    dispatch(updateDataEvent(formData, eventId)).then(() => {
      setIsUpdate(false);
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
    getDataEvent(page);
  };

  const handleDetailEvent = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="profile-body">
        {/* HEADER */}
        <Header />

        {/* SECTION */}
        <section className="container-fluid profile-section-container">
          <Sidemenu />
          <div className="create-right-section-container ml-sm-5 ">
            <div className="d-flex justify-content-between mt-3">
              <h3 className="ml-4 font-weight-bold">Manage Event</h3>
              <button
                type="button"
                className="btn btn-outline-primary mr-5"
                data-toggle="modal"
                data-target="#create-event"
                onClick={setCreate}
              >
                Create
              </button>

              <div
                className="modal fade"
                id="create-event"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content ">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        {isUpdate ? "Update Event" : "Create Event"}
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
                    {event.message && (
                      <div
                        className="alert alert-primary alert-dismissible fade show"
                        role="alert"
                      >
                        {event.message}
                      </div>
                    )}

                    <form
                      className="modal-body d-flex flex-column"
                      onSubmit={isUpdate ? handleUpdate : handleSubmit}
                    >
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChangeForm}
                        value={form.name}
                      />
                      <label>Category</label>
                      <input
                        type="text"
                        name="category"
                        onChange={handleChangeForm}
                        value={form.category}
                      />
                      <label>Location</label>
                      <input
                        type="text"
                        name="location"
                        onChange={handleChangeForm}
                        value={form.location}
                      />
                      <label>Date Time Show</label>
                      <input
                        type="text"
                        name="dateTimeShow"
                        onChange={handleChangeForm}
                        value={form.dateTimeShow}
                      />
                      <label>Price</label>
                      <input
                        type="text"
                        name="price"
                        onChange={handleChangeForm}
                        value={form.price}
                      />
                      <label>Image</label>
                      <input
                        type="file"
                        name="image"
                        onChange={handleChangeForm}
                      />
                      {image && <img src={image} alt="preview-image" />}

                      <label>Detail</label>
                      <input
                        type="text"
                        name="detail"
                        onChange={handleChangeForm}
                        value={form.detail}
                      />
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                          {event.isLoading ? (
                            <div
                              className="spinner-border text-white"
                              role="status"
                            >
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                            <div>
                              {isUpdate ? "Update Event" : "Create event"}
                            </div>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <main className="container-fluid">
              {event.data.length > 0 ? (
                event.data.map((item) => (
                  <div key={item.id}>
                    <CardEvent
                      data={item}
                      newData="Data Baru nih"
                      handleDetail={handleDetailEvent}
                      setUpdate={setUpdate}
                      data-target="#create-event"
                    />
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <h3>Data Not Found !</h3>
                </div>
              )}
            </main>
            <div className="d-flex gap-2 justify-content-center w-100 my-5">
              <button
                className="btn btn-primary"
                onClick={handlePrevPage}
                disabled={page === 1 ? true : false}
              >
                &lt;
              </button>
              <button
                className="btn btn-primary"
                onClick={handleNextPage}
                disabled={page === event.pagination.totalPage ? true : false}
              >
                &gt;
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
