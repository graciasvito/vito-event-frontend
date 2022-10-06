import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { useEffect, useState } from "react";
import CardEvent from "../../component/CardEvent";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import Banner from "../../component/homeBanner";
import Calendar from "../../component/Calendar";
import "../LandingPage/index.css";
import moment from "moment/moment";

function LandingPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [dateSearch, setDateSearch] = useState(moment().format("YYYY-MM-DD"));

  const handleSearch = (keyword) => {
    setSearchName(keyword);
  };
  const selectDate = (date) => {
    setDateSearch(date);
  };

  // DIGUNAKAN UNTUK GET DATA PERTAMA KALI
  useEffect(() => {
    getDataProduct();
  }, []);

  // DIGUNAKAN UNTUK GET DATA JIKA ADA PERUBAHAN STATE
  useEffect(() => {
    getDataProduct();
  }, [page, searchName, dateSearch]);

  const getDataProduct = async () => {
    try {
      const result = await axios.get(
        `event?page=${page}&limit=5&searchName=${searchName}&sort=name asc&searchDateShow=${dateSearch}`
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

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="landing-body">
        {/* HEADER */}
        <Header />
        {/* BANNER */}
        <Banner handleSearch={handleSearch} />

        <div className="landing-main-event mt-5">
          <div className="landing-strike">
            <span className="fw-bold">Event</span>
          </div>
        </div>

        {/* CALENDAR */}
        <Calendar selectDate={selectDate} />
        {/* CARD */}

        <main className="container-fluid d-flex gap-3 landing-overflow">
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
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
