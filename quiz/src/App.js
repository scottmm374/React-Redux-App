import React, { useEffect } from "react";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import { connect } from "react-redux";
import { fetchQuestions } from "./actions/questions";

import "./App.css";

function App(props) {
  useEffect(() => {
    props.fetchQuestions();
  }, []);

  console.log("question", props);
  return (
    <div className="App">
      <Header />
      <div>
        {props.results.map(item => (
          <Quiz
            key={item.question}
            question={item.question}
            result={item.correct_answer}
          />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    results: state.results,
    isLoading: state.results.isLoading
  };
}

const mapDispatchToProps = {
  fetchQuestions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
