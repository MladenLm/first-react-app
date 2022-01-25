import react from "react";
import fb from "../img/Facebook Icon.png"
import gh from "../img/GitHub Icon.png"
import ins from "../img/Instagram Icon.png"
import tw from "../img/Twitter Icon.png"

export default function Footer() {
    return(
        <div className="footer">
            <a href="https://web.facebook.com/mlamesevic/"><img src={fb}/></a>
            <a href="https://github.com/MladenLm"><img src={gh}/></a>
            <a href="https://instagram.com/mladen_lm"><img src={ins}/></a>
            <a href="https://twitter.com/MladenLm"><img src={tw}/></a>
        </div>
    )
}