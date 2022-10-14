import { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidemenu from "../../component/ProfileSection";

import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import CardEvent from "../../component/CardEvent/create-event";
import "./createEvent.css";
import Modal from "../../component/Modal";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDataEvent();
  }, []);

  useEffect(() => {
    getDataEvent();
  }, [page]);

  const getDataEvent = async () => {
    try {
      const result = await axios.get(
        `event?page=${page}&limit=3&searchName=&sort=name asc&searchDateShow=`
      );
      setData(result.data.data);
      setPagination(result.data.pagination);
    } catch (error) {
      // console.error(error);
    }
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
                className="btn btn-outline-primary  mr-5"
                data-toggle="modal"
                data-target="#create-event"
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
                <Modal />
              </div>
            </div>
            <main className="container-fluid">
              {data.length > 0 ? (
                data.map((item) => (
                  <div key={item.id}>
                    <CardEvent
                      data={item}
                      newData="Data Baru nih"
                      handleDetail={handleDetailEvent}
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
                disabled={page === pagination.totalPage ? true : false}
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
