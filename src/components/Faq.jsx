// import React, { useState } from 'react';
import React, { useState } from "react";
import Plus from "../assets/img/plus.png";
import Min from "../assets/img/minus.png";

const questions = [
  {
    id: 1,
    subject: "programmer",
    question: "kenapa menu pdf di tradelist engga bisa di buka?",
    detail:
      "Mohon di bantu bapak/ibu programmer untuk solve masalah di atas dalam beberapa hari kedepan",
  },
  {
    id: 2,
    subject: "support",
    question: "inject nasabah ke dealer",
    detail: "tolong bantu inject nasabah ke dealer ya pak",
  },
  {
    id: 3,
    subject: "programmer",
    question: "kenapa menu broker summary engga tampil data?",
    detail:
      "Mohon di bantu bapak/ibu programmer untuk solve masalah di atas dalam beberapa hari kedepan",
  },
  {
    id: 4,
    subject: "infra",
    question: "Open port 9000",
    detail: "Mohon bantu di open port 9000 di area development",
  },
  {
    id: 5,
    subject: "infra",
    question: "tolong config ip di dev samakan dengan yang sebelumnya",
    detail: "minta tolong ya pak",
  },
];

function Faq({ theme }) {
  return (
    <div>
      <FaqDetails data={questions} theme={theme} />
    </div>
  );
}

function FaqDetails({ data, theme }) {
  const [openQuestions, setOpenQuestions] = useState([]);
  const [divisions, setDivisions] = useState("");

  function handleToggle(questionId) {
    if (openQuestions.includes(questionId)) {
      setOpenQuestions(openQuestions.filter((id) => id !== questionId));
    } else {
      setOpenQuestions([...openQuestions, questionId]);
    }
  }

  function handleDivision(divisi) {
    setDivisions(divisi);
  }

  return (
    <div className="helpdesk-faq">
      {/* <div className="faq-header" id={theme}> */}
      <div
        className="faq-header"
        id={`${theme === "light" ? "special-light" : "dark"}`}
      >
        <h2>FAQ (Frequently Asked Questions)</h2>
      </div>
      <div className="faq-box">
        <div className="divisions-faq">
          <h2>Divisions</h2>
          <hr />
          <button onClick={() => handleDivision("programmer")}>
            ☀ Programmer{" "}
            <span>
              {
                data.filter((question) => question.subject === "programmer")
                  .length
              }
            </span>
          </button>
          <br />
          <hr />
          <button onClick={() => handleDivision("support")}>
            ☀ IT Support{" "}
            <span>
              {data.filter((question) => question.subject === "support").length}
            </span>
          </button>
          <br />
          <hr />
          <button onClick={() => handleDivision("infra")}>
            ☀ Infra{" "}
            <span>
              {data.filter((question) => question.subject === "infra").length}
            </span>
          </button>
          <hr />
        </div>
        <div className="questions-faq">
          <h3>Questions</h3>
          <hr />
          {data
            .filter(
              (question) => divisions === "" || question.subject === divisions
            )
            .map((question) => (
              <div
                className={`item ${
                  openQuestions.includes(question.id) ? "open" : ""
                }`}
                onClick={() => handleToggle(question.id)}
                key={question.id}
              >
                {/* <p>{question.id}</p> */}
                <p>{question.question}</p>
                <p className="question-faq-step">
                  {openQuestions.includes(question.id) ? (
                    <img src={Plus} alt="Open" />
                  ) : (
                    <img src={Min} alt="Close" />
                  )}
                </p>

                {openQuestions.includes(question.id) && (
                  <div className="item-detail">
                    <p>{question.detail}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
