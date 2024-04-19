
const RestaurantCards = (props) => {
  const { resData } = props;

  const {
    name,
    image,
    rating,
    cuisine,
    cfo, 
    distance,
    

  } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="cardImg" src={image.url} />

      <h3>{name}</h3>
      <h4>{cuisine && (
  <div>
    {cuisine?.map((cuisineItem, index) => (
      <p
        key={index}
      >
        {cuisineItem.name}
      </p>
    ))}
  </div>
)}
</h4>
      <h4>avgRating:{rating.rating_text}</h4>
      <h4>{cfo.text}</h4>
      <h4>{distance}</h4>
    </div>
  );
};

export default RestaurantCards;
