import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import axios from "axios";

const HomePage = () => {
  const key = process.env.REACT_APP_OPEN_AI_KEY;

  const NoBearerAxios = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  });

  const prompt = `List all unexplored places in Pune that are worth visiting`;

  const createTravelPlan = async (prompt) => {
    const data = {
      prompt: prompt,
      max_tokens: 1024,
      n: 1,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    };
    try {
      const response = await NoBearerAxios.post(
        "https://api.openai.com/v1/engines/text-davinci-002/completions",
        data,
        { headers }
      );
      console.log(response);
      return response.data.choices[0].text;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles["home"]}>
      <Navbar />
      <Form />

      {/* <button onClick={() => createTravelPlan(prompt)}> Chatgpt access </button> */}
    </div>
  );
};

export default HomePage;
