import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("Generate a quote!");

  const funnyQuotes = [
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "I'm writing a book on anti-gravity. It's impossible to put down.",
    "Why did the scarecrow get promoted? Because he was outstanding in his field, but hay, it's in his jeans.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I asked the gym instructor if he could teach me to do the splits. He said, 'How flexible are you?' I said, 'I can't make it on Tuesdays.'",
    "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did.",
    "I used to play piano by ear, but now I use my hands. That was just ear-ritating!",
    "I'd tell you a construction joke, but I'm still working on that one.",
    "I know a lot of jokes about retired people, but none of them work.",
    "Why did the math book look sad? Because it had too many 'problems'. I can relate!",
    "I asked the librarian if they had books on paranoia. She whispered, 'They're right behind you!'",
    "I'd tell you a chemistry joke, but all the good ones Argon.",
    "Why did the chicken go to the seance? To talk to the other side.",
    "Why don't scientists trust atoms? Because they make up everything, even this joke.",
    "I have a joke about time travel, but you didn't like it."
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * funnyQuotes.length);
    setQuote(funnyQuotes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Quote Machine</h1>
      <p>{quote}</p>
      <button onClick={generateQuote}>Generate Quote</button>
    </div>
  );
}

export default App;
