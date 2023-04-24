import Charts from "../../components/charts/Charts";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import Widget from "../../components/widgets/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="orders" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="chart">
          <Featured />
          <Charts aspect={2 / 1} title={"Last 6 Months Revenue"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Home;
