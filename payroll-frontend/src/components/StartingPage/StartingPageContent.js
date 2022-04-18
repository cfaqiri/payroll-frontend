import { useContext, useRef } from "react";
import AuthContext from "../../contexts/auth-context";

import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const authCtx = useContext(AuthContext);
  const reportInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append("file", fileField.files[0]);

    fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      body: formData,
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: "Token " + authCtx.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // const enteredFile = document.getElementById("report-form");
    // const newForm = new FormData(enteredFile);

    // newForm.append("file", enteredFile);

    // fetch("http://127.0.0.1:8000/upload/", {
    //   method: "POST",
    //   body: newForm,
    //   headers: {
    //     // "Content-Type": "multipart/form-data",
    //     Authorization: "Token " + authCtx.token,
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(authCtx.token);
    //   });
  };

  if (authCtx.isLoggedIn) {
    return (
      <section className={classes.upload}>
        <h1>Upload File</h1>
        <form id="report-form" onSubmit={submitHandler}>
          <div>
            <label htmlFor="file">Report</label>
            <input type="file" id="file" required ref={reportInputRef} />
          </div>
          <div className={classes.actions}>
            <button>Upload</button>
          </div>
        </form>
      </section>
    );
  }
  return <p>Welcome!</p>;
};

export default StartingPageContent;
