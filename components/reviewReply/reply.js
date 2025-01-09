"use client"

import { useState } from "react"
import Image from "next/image";
import "./reply.css"
const BusinessReply = () => {

    const [input, setInput] = useState("");

    const message = (e) => {
        setInput(e.target.value)
    }



    return (
        <div>
            <div className="reply-field">
                <input type="text" placeholder="Send a reply" name="reply" value={input} onChange={message}/>
                <div className="send-wrap">
                    <Image src={"/send_24px.svg"} alt="oomo" layout="responsive" width={24} height={24} onClick={() => console.log(input)} />
                </div>
            </div>
        </div>
    )
}

export default BusinessReply;