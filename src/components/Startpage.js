import React, { useState } from 'react';
import Question from './Question';

const Startpage = ({ startQuiz, data }) => {
  const [showQuestions, setShowquestions] = useState(false);
  const handlestartquiz = () => {
    setShowquestions(true);
  };
  console.log(showQuestions, startQuiz);
  return (
    <main>
      {showQuestions ? (
        <Question data={data} />
      ) : (
        <div className="startPage-main">
          <h4>Random Question Genaration...</h4>
          <button className="btn1 start-btn" onClick={handlestartquiz}>
            startQuiz
          </button>
        </div>
      )}
    </main>
  );
};

export default Startpage;
