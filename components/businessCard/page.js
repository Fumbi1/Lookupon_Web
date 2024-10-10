import Image from "next/image";
import { useRouter } from "next/navigation";
import "./card.css"


const BusinessCard = ({
  img,
  namee,
  time,
  menu,
  comment,
}) => {

  const route = useRouter()
  return (
    <div className="business-card" onClick={() => route.push("/businessProfile")}>
      <Image className="business-pic" src={img} height="252" width="360" alt="omooo"/>
      <div className="card-details">
        <p className="card-name">{namee}</p>
        <p className="card-time">{time}</p>
        <p className="card-menu">{menu}</p>
        <div className="business-comment">
          <Image src="/comment.svg" height="19" width="18" alt="omooo" />
          <p className="card-comment">{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default BusinessCard;
