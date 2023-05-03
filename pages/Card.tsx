import { dummyData, DummyData } from "./dummydata";
import Cardstyles from "../styles/cardStyles.module.css";

interface CardProps {
  item: DummyData;
}

function Card({ item }: CardProps) {
  return (
    <div className={Cardstyles["card"]}>
      <div className={Cardstyles["card-img"]}>
        <img src={item.img} alt={item.name} />
      </div>
      <div className={Cardstyles["card-body"]}>
        <h3 className={Cardstyles["card-title"]}>{item.name}</h3>
        <p className={Cardstyles["card-category"]}>{item.category}</p>
        <div className={Cardstyles["card-rating"]}>{item.rating} stars</div>
        <div className={Cardstyles["card-pricing"]}>
          {item.discountPercentage ? (
            <>
              <span className={Cardstyles["card-price-new"]}>
                ${item.price.toFixed(2)}
              </span>
              <span className={Cardstyles["card-price-old"]}>
                ${item.oldPrice.toFixed(2)}
              </span>

              <span className={Cardstyles["card-price-discount"]}>
                {item.discountPercentage} off
              </span>
            </>
          ) : (
            <span className={Cardstyles["card-price"]}>
              ${item.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
