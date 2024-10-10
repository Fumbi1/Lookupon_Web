import Image from "next/image";
import Button from "../button/page";
import './profile.css'

const Profile = () => {
  return (
    <div>
      <form action="">
        <div className="user_photo_section">
          <Image
            src={"/profileImage.svg"}
            alt="photo"
            width={"80"}
            height={"80"}
          />
          <Button
            value={"Upload New Picture"}
            type={"submit"}
            className={"change_pic_btn"}
          />
          <Button
            value={"Delete"}
            type={"submit"}
            className={"delete_pic_btn"}
          />
        </div>

        <div>
          <input type="text" name="" id="" placeholder="First Name" /> <br />
          <input type="text" name="" id="" placeholder="Last Name" /> <br />
          <input type="text" name="" id="" placeholder="Nickname" />
        </div>

        <div className="radio_options">
          <p className="gender">Gender</p>
          <input type="radio" name="gender" id="male" value={"Male"} />
          <label htmlFor="male">Male</label> <br />
          <input type="radio" name="gender" id="female" value={"Female"} />
          <label htmlFor="female">Female</label> <br />
          <input
            type="radio"
            name="gender"
            id="anon"
            value={"Prefer not to say"}
          />
          <label htmlFor="anon">Prefer not to say</label> <br />
        </div>

        <div className="btns_flex">
          <Button
            value={"Save Changes"}
            type={"submit"}
            className={"save_btn"}
          />
          <Button value={"Cancel"} type={"submit"} className={"cancel_btn"} />
        </div>
      </form>
    </div>
  );
};
export default Profile;
