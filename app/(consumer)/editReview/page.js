import Image from "next/image";
import Button from "@/components/button/page";
import "./edit.css";

const EditReview = () => {
  return (
    <div>
      <form action="" method="post">
        <p className="business_name">HotSoup ‘n’ More</p>

        <div className="edit_wrap">
          <Image
            src={"/starRating.svg"}
            alt={"rating"}
            width={"176"}
            height={"32"}
          />
          <p className="notice">
            Things to consider in your review: Service, Quality, Value, etc.
          </p>

          <textarea name="" id="" cols="75" rows="10">
            Came here for dinner with friends before a concert at The Warfield
            nearby. It was a Monday night so it was pretty quiet, there were
            only a few other parties dining at the same time.Our server was
            great. Very attentive, let us know we could adjust spice levels if
            needed, even offered to take a group photo for us!I tried the
            pineapple fried rice and my friends got the pad Thai and a salmon
            dish (can't remember the name). Everything was flavorful and
            delicious, and the portions were big without being too much to eat.
            I also got a blue margarita, which was really good but didn't taste
            like it had much alcohol in it.
          </textarea>
        </div>

        <p className="attach">Attach photos</p>

        <input className="add_image" type="file" name="" id="" />

        <Button value={"Save Changes"} className={"save_btn"} type={"submit"} />
      </form>
    </div>
  );
};
export default EditReview;
