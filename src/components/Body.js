import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Body.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, resetUserDetails } from "../utils/UserDetails";
const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user_Details.userObj);
  const [formData, setFormData] = useState(selector);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    dispatch(resetUserDetails());
    // console.log(selector)
    setFormData({
      name: "",
      weight: "",
      height: "",
      age: "",
      cusines: "",
      dietary: "",
      allergies: "",
      goal: "",
      email: "",
    });
    // console.log(selector)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      weight,
      height,
      age,
      cusines,
      dietary,
      allergies,
      goal,
      email,
    } = formData;
    // console.log(name,weight,height,age,cusines,dietary,allergies,goal,email)
    if (
      name &&
      weight &&
      height &&
      age &&
      cusines &&
      dietary &&
      allergies &&
      goal &&
      email
    ) {
      dispatch(
        setUserDetails({
          name,
          weight,
          height,
          age,
          cusines,
          dietary,
          allergies,
          goal,
          email,
        }),
      );

      navigate("/plans");
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div className="body-container">
      <div className="body-details">
        <h1 className="bodyTitle"> Smart Meal Planner</h1>
        <p className="bodyDescription">
          Step up your fitness game with your personalised AI Meal plan.
        </p>
        <span className="bodyDetails">
          SmartMeal is your AI-powered meal planner that creates personalized,
          nutritious meal plans based on your dietary goals, preferences, and
          schedule — all in just a few clicks.
        </span>
      </div>
      <div>
        <form className="bodyForm">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Rashika"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="weight">Weight (in Kgs):</label>
          <br />
          <input
            type="number"
            id="weight"
            placeholder="60"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="height">Height (in cms):</label>
          <br />
          <input
            type="number"
            id="height"
            placeholder="163"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="age">Age:</label>
          <br />
          <input
            type="number"
            id="age"
            placeholder="25"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="cusines">Cuisine Preference:</label>
          <br />
          <select
            id="cusines"
            value={formData.cusines}
            onChange={handleChange}
            name="cusines"
          >
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="north_indian">North Indian</option>
            <option value="south_indian" selected>
              South Indian
            </option>
            <option value="chinese">Chinese</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="american">American</option>
            <option value="thai">Thai</option>
            <option value="japanese">Japanese</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="french">French</option>
            <option value="korean">Korean</option>
          </select>
          <br />
          <label htmlFor="dietary">Dietary Preference:</label>
          <br />
          <select
            id="dietary"
            value={formData.dietary}
            onChange={handleChange}
            name="dietary"
          >
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="none">None</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Keto">Keto</option>
            <option value="Paleo">Paleo</option>
            <option value="Low-Carb">Low-Carb</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="High-Protein">High-Protein</option>
            <option value="Dairy-Free">Dairy-Free</option>
            <option value="Nut-Free">Nut-Free</option>
          </select>
          <br />
          <label htmlFor="allergies">Allergies/Intolerance:</label>
          <br />
          <input
            type="text"
            placeholder="none"
            id="allergies"
            value={formData.allergies}
            onChange={handleChange}
            name="allergies"
            required
          />
          <br />
          <label htmlFor="goal">Fitness Goal:</label>
          <br />
          <select
            id="goal"
            value={formData.goal}
            onChange={handleChange}
            name="goal"
          >
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="weight_loss" selected>
              Weight Loss
            </option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="maintenance">Weight Maintenance</option>
            <option value="weight_gain">Weight Gain</option>
          </select>
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            id="email"
            name="email"
            required
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Get Started
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Body;
