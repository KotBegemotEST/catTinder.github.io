import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './img/heart.png';
import img from "./img/profile.png"
import './App.css';



export default function Profiil(){
let sendMsg = (msg)=>{
    console.log("test")
}

    return (
        <div className="pinkBox">
            <span>profil</span>
            <div className="back">
                <img className="item-img" src={img} alt="" />
                <span className="catName"> TEST </span>
                <p className="item-desc">     Olen rahuliku iseloomuga kass.     
     Olen kahe aastane ja mul on 
     kaks armastavat vanemat.
            </p>
                <Link to="/message" className="button">  SAADA KIRI </Link>
            </div>
        </div>
    )
 }