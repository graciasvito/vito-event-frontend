import { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidemenu from "../../component/ProfileSection";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import CardEvent from "../../component/CardEvent/create-event";
import "./createEvent.css";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  console.log(setPage, pagination);
  useEffect(() => {
    getDataProduct();
  }, []);

  useEffect(() => {
    getDataProduct();
  }, [page]);

  const getDataProduct = async () => {
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

  const handleDetailProduct = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  // const handlePrevPage = () => {
  //   setPage(page - 1);
  // };

  // const handleNextPage = () => {
  //   setPage(page + 1);
  // };

  return (
    <>
      <div className="profile-body">
        {/* HEADER */}
        <Header />

        {/* SECTION */}
        <section className="container-fluid profile-section-container">
          <Sidemenu />
          <div className="create-right-section-container ml-sm-5">
            <h3 className="ml-4 mt-3 font-weight-bold">Manage Event</h3>
            <main className="container-fluid">
              {data.length > 0 ? (
                data.map((item) => (
                  <div key={item.id}>
                    <CardEvent
                      data={item}
                      newData="Data Baru nih"
                      handleDetail={handleDetailProduct}
                    />
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <h3>Data Not Found !</h3>
                </div>
              )}
            </main>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}