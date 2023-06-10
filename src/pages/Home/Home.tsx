import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
function Home() {
    return (
        <div style={{height: "200vh", backgroundColor: "#ecb0e9d5"}}>
            <Navbar />
            <Main />
        </div>
    )
}
export default Home;