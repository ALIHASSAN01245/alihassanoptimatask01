import React, { useEffect } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll, persistTodos } from "./redux/action/addTodo.action";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1 style={{ color: "red" }}> OPTIMA-GEEKS-ASSESTMENT</h1>
      <InputField />
      <TodosList />
      <div>
        <button  type="button" class="btn btn-danger"
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
      <br/>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">Marked as Done
  </label>
    </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
