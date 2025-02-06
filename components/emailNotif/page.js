"use client"

import Button from "../button/page";
import { useState } from "react";
import "./notif.css";

const EmailNotification = () => {

  const [colour, setcolour] = useState(
    {
      opt1: false,
      opt2: false
    }
  )

  const switchColour1 = () => {
    setcolour(
      prev =>({
        ...prev,
        opt1: !colour.opt1
      })
    )
  }

  const switchColour2 = () => {
    setcolour(
      prev =>({
        ...prev,
       opt2: !colour.opt2
      })
    )
  }

  return (
    <div>
      <form action="" method="post">
        <div className="email_notif_wrap">
          <p className="alerts">Alerts & Notifications</p>
          <hr className="linne" />

          <p className="otherss">Send me:</p>

          <div>
            <input type="checkbox" name="" id="comms" onClick={switchColour1} />
            <label htmlFor="comms" className={colour.opt1 ? "titlee-true" : "titlee"}>Lookupon Communication</label> <br />
            <p className={colour.opt1 ? "otherss-true" : "otherss"}>Get Lookupon news, announcements, and product updates</p>
            <hr className="linne" />
          </div>
          <div>
            <input type="checkbox" name="" id="activity" onClick={switchColour2} />
            <label htmlFor="activity" className={colour.opt2 ? "titlee-true" : "titlee"}>Account Activity</label> <br />
            <p className={colour.opt2 ? "otherss-true" : "otherss"}>
              Get important notifications about you or activity you've missed
            </p>
            <hr className="linne" />
          </div>

          <Button
            value={"Update Email Notifications"}
            type={"submit"}
            className={"edit_password_btn"}
          />
        </div>
      </form>
    </div>
  );
};
export default EmailNotification;
