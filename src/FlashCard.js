import "./styles.css";
import { useState } from "react";
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function FlashCard() {
  return (
    <div className="App">
      <h2 className="flashcard-heading">Flash Cards Q&A</h2>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const cardsRendered = questions.map((question) => <Card {...question} />);
  return <div className="flashcards">{cardsRendered}</div>;
}

function Card({ id, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${isOpen && "selected"}`}
    >
      {!isOpen ? question : answer}
    </div>
  );
}
