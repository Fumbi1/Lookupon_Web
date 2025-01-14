import Button from "../button/page";
import './password.css'

const ChangePassword = () => {
  return (
    <div>
      <form action="" method="post">
        <div>
          <input className="password-input" type="text" name="" id="" placeholder="Enter old password" />{" "}
          <br />
          <input className="password-input"
            type="text"
            name=""
            id=""
            placeholder="Enter new password"
          />{" "}
          <br />
          <input className="password-input" type="text" name="" id="" placeholder="Confirm new password" />
        </div>

        <Button
          value={"Change Password"}
          type={"submit"}
          className={"edit_password_btn"}
        />
      </form>
    </div>
  );
};
export default ChangePassword;
