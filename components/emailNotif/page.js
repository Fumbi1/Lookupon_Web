import Button from "../button/page";
import "./notif.css";

const EmailNotification = () => {
  return (
    <div>
      <form action="" method="post">
        <div className="email_notif_wrap">
          <p className="alerts">Alerts & Notifications</p>
          <hr className="linne"/>

          <p className="otherss">Send me:</p>

          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="titlee">Lookupon Communication</label> <br />
            <p className="otherss">Get Lookupon news, announcements, and product updates</p>
            <hr className="linne"/>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="titlee">Account Activity</label> <br />
            <p className="otherss">
              Get important notifications about you or activity you've missed
            </p>
            <hr className="linne"/>
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
