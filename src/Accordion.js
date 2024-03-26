import { useState } from "react";
import "./styles-accordion.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  // Based on the num we'll open particular accordion on which the click happens
  const [currentClicked, setCurrentClicked] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          title={faq.title}
          key={faq.title}
          num={index + 1}
          currentClicked={currentClicked}
          setCurrentClicked={setCurrentClicked}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  children,
  title,
  num,
  currentClicked,
  setCurrentClicked,
}) {
  //   const [isOpen, setIsOpen] = useState(false);

  const isOpen = num === currentClicked;
  const handleToggle = () => {
    setCurrentClicked(num);
  };
  return (
    <>
      <div
        className={`item ${isOpen && "open"}`}
        onClick={() => handleToggle(num)}
      >
        <span className="number">{num <= 9 ? `0${num}` : num}</span>
        <span className="title">{title}</span>
        <span className="icon">{isOpen ? "-" : "+"}</span>
        {isOpen && <div className={`content-box`}>{children}</div>}
      </div>
    </>
  );
}
