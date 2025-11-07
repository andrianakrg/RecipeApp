import { useLocation, useNavigate } from "react-router-dom";
import diet from "../../assets/diet.svg";

import "./Details.css";

const Detail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="detailWrapper">
      <h1>{state.label}</h1>
      <div className="imgWrapper">
  
        <img src={state.image ? state.image : diet} alt="food" className="mealImage" />
      </div>
      <div className="bottomWrapper">
        <div className="nutWrapper">
          <h4>NUTRIENTS:</h4>
          <p>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </div>
       
        <div className="ingWrapper">
          <h4>INGREDIENTS:</h4>
          {state.ingredientLines.map((ingredient, index) => (
            <div key={index}>
              <p>
                {index + 1}-{ingredient}
              </p>
            </div>
          ))}
        </div>

        <div className="instructions">
          <h4>INSTRUCTIONS:</h4>
          <p>
            You can view the full instructions here:{" "}
            <a href={state.url} target="_blank" rel="noreferrer">
              {state.source}
            </a>
          </p>
        </div>
      </div>
      <button className="backBtn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default Detail;