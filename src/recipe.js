import React from "react";
<<<<<<< HEAD
import style from "./recipe.module.css";

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li className={style.ingredient}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <img className={style.image} src={img} alt="" />

    </div>
  );
};

export default Recipe;
