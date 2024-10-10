import Image from "next/image";
import { usePathname } from "next/navigation";
import BusinessReply from "../reviewReply/reply";
import { reviewSection } from "@/app/utils/arrays";
import "./review.css";

const Review = () => {

  const pathName = usePathname()
  const display = () => {
    console.log(pathName)
  }
  return (
    <div className="review_wrap">
      {reviewSection.map((content, index) => {
        return (
          <div key={index}>
            <div className="user_details">
              <Image
                src={content.image}
                width={"40"}
                height={"40"}
                alt="User Image"
              />
              <div>
                <p className="user_name">{content.name}</p>
                <div className="other_details">
                  <p>*****</p> {/*replace with stars*/}
                  <p className="comment_date">{content.date}</p>
                </div>
              </div>
            </div>
            <div className="review_comment">
              <p>
                {content.review_comment}
              </p>
              <div className="image_flex" onClick={display}>
                {
                  content.photo_evidence?.map((photo, i) => {
                    return(
                    <Image key={i} src={photo} alt="proof" width={'176'} height={'123'}/>
                    )
                  })
                }
                
              </div>
            </div>

            {
              pathName === "/businessDomain" &&
              <BusinessReply />
            }
          </div>
        );
      })}
    </div>
  );
};
export default Review;
