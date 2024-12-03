export const FavoriteArray = () => [
    "Sushi",
    "Pizza",
    "Tacos",
    "Pasta Carbonara",
    "Chili Con Carne",
  ];
  
  export const Favorite = (props) => {
    const foodItems = FavoriteArray(); 
  
    return (
        <ul>
          {foodItems.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
    );
  };