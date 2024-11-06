import Image from "next/image";
import Navbar from "../components/navbar";
import Content from "./components/tools";
import Whois from "../components/assets/whoispng.png";
import Cekwarna from "../components/assets/cekwarna.png";


export default function Workshop() {
    return(
        <div className="contents">
            <Navbar></Navbar>
            <Content></Content>
        </div>
    )
}