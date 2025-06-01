import React, { useEffect, useState, useMemo } from "react";
import Groq from "groq-sdk";
import "../styles/Result.css";
import FoodCarousel from "./FoodCarousel";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Result = () => {
  const [error, setError] = useState("");
  const selectObject = useSelector((state) => state.user_Details.userObj);
  // console.log(selectObject)
  const [result, setResult] = useState("");

  const groq = useMemo(
    () =>
      new Groq({
        apiKey: process.env.REACT_APP_GROQ_API_KEY,
        dangerouslyAllowBrowser: true,
      }),
    [],
  );

  const gptQuery = useMemo(() => {
    if (!selectObject || !selectObject.name) return null;

    return `You are a meal planner AI. You are given the following details of a user. 

Name: ${selectObject.name}, 
Weight: ${selectObject.weight}Kg, 
Height: ${selectObject.height}cm, 
Age: ${selectObject.age}, 
Cuisines: ${selectObject.cusines}, 
Dietary: ${selectObject.dietary}, 
Allergies: ${selectObject.allergies}, 
Goal: ${selectObject.goal}. 

Create a personalized meal plan for 7 days. For each day, include:
- Breakfast: an object with keys "name", "calories", "protein", "fat", "carbohydrates"
- Lunch: same structure
- Dinner: same structure

The response should be **strictly a valid JSON** object with the structure:

{
  "meal_plan": {
    "monday": {
      "breakfast": {
        "name": "...",
        "calories": 0,
        "protein": 0,
        "fat": 0,
        "carbohydrates": 0
      },
      "lunch": { ... },
      "dinner": { ... }
    },
    ...
    "sunday": { ... }
  }
}

Do not include markdown, notes, explanation, code blocks or anything else. Only return the JSON.`;
  }, [selectObject]);

  useEffect(() => {
    if (!groq || !gptQuery) return;
    const groqApicall = async () => {
      try {
        const completion = await groq.chat.completions.create({
          messages: [
            {
              role: "user",
              content: gptQuery,
            },
          ],
          model: "llama-3.3-70b-versatile",
          temperature: 0,
        });
        const parsedResult = JSON.parse(completion.choices[0].message.content);
        setResult(parsedResult);
        // console.log(parsedResult);
      } catch (err) {
        setError(
          `🔧 An error occurred while fetching the meal plan: ${err.error.error.code}. Please try again later.`,
        );
        // console.log(err.message,err.code,);
      }
    };
    groqApicall();
  }, [groq, gptQuery]);

  if (error) {
    return (
      <div className="result-container">
        <h3>{error}</h3>
      </div>
    );
  }

  if (!selectObject || !selectObject.name || !result) {
    return <Loading />;
  }

  if (!result.meal_plan || Object.keys(result.meal_plan).length === 0) {
    return (
      <div className="result-container">
        <h3>No meal plan available.</h3>
      </div>
    );
  }

  return (
    <div className="result-container">
      <h3 className="namePlan">
        Hi {selectObject.name} , please go through your plan details here:
      </h3>
      <table className="result-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result?.meal_plan &&
            Object.entries(result.meal_plan).length === 0 && (
              <tr>
                <td colSpan="4">No meal plan available</td>
              </tr>
            )}
          {result &&
            result?.meal_plan &&
            Object.entries(result.meal_plan).map(([key, meals]) => (
              <tr key={key}>
                <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                <td>
                  <strong>{meals.breakfast.name}</strong>
                  <br />
                  <span>Calories: {meals.breakfast.calories}</span>
                  <br />
                  <span>Protein: {meals.breakfast.protein}</span>
                  <br />
                  <span>Fat: {meals.breakfast.fat}</span>
                  <br />
                  <span>Carbohydrates: {meals.breakfast.carbohydrates}</span>
                </td>
                <td>
                  <strong>{meals.lunch.name}</strong>
                  <br />
                  <span>Calories: {meals.lunch.calories}</span>
                  <br />
                  <span>Protein: {meals.lunch.protein}</span>
                  <br />
                  <span>Fat: {meals.lunch.fat}</span>
                  <br />
                  <span>Carbohydrates: {meals.lunch.carbohydrates}</span>
                </td>
                <td>
                  <strong>{meals.dinner.name}</strong>
                  <br />
                  <span>Calories: {meals.dinner.calories}</span>
                  <br />
                  <span>Protein: {meals.dinner.protein}</span>
                  <br />
                  <span>Fat: {meals.dinner.fat}</span>
                  <br />
                  <span>Carbohydrates: {meals.dinner.carbohydrates}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="result-details">
        <h3>Note:</h3>
        <ul>
          <li>
            The calorie and macronutrient content of each meal is an
            approximation and may vary based on specific ingredients and portion
            sizes.
          </li>
          <li>
            It's recommended to consult with a healthcare professional or
            registered dietitian before starting any new diet or meal plan.
          </li>
          <li>
            The meal plan is designed to provide a balanced and nutritious diet
            for weight loss, but the user's individual calorie needs may vary
            depending on their activity level, age, and other factors.
          </li>
          <li>
            The meal plan includes a variety of south Indian dishes, but it's
            recommended to include other cuisines and foods to ensure a
            well-rounded diet.
          </li>
          <li>
            The user is advised to drink plenty of water throughout the day and
            to limit their intake of sugary drinks and saturated fats.
          </li>
        </ul>
      </div>
      <FoodCarousel />
      <Footer />
    </div>
  );
};

export default Result;
