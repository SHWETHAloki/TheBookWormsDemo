import React, { useState } from "react";
 
function View1() {
  const [username, setUsername] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  
  let names = [];

  const saveData = () => {
    //saving username to sesstion storage
    if (sessionStorage.getItem("name") != null) {
      let names = JSON.parse(sessionStorage.getItem("name"));
      names.push(username);
      const stringifiedNames= JSON.stringify(names);
      sessionStorage.setItem("name", stringifiedNames);

      setIsSaved(true);

      setTimeout(() => {
        setIsSaved(false);
      }, 2000);

    } else {
      names.push(username);
      const stringifiedNames= JSON.stringify(names);
      sessionStorage.setItem("name", stringifiedNames);

      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  }
  
    const getSessionData = () => {
      //fetching username from session storage
      let names = JSON.parse(sessionStorage.getItem("name"));
      
      return names != null ? names[names.length - 1] : null;
    };
  
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <label>Enter Name:
            <input
              type="text"
              value={username}
              onChange={({ target }) => {
                setUsername(target.value);
              }}
              placeholder="Enter name"
              className="text-input"
            /></label>
  
            <button onClick={saveData} className="btn">
              {isSaved ? 'Saved!' : 'SUBMIT'}
            </button>
  
            <div className="inrow">
            {getSessionData() &&
                <h1>
                Hello {getSessionData()}!!!
              </h1>}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default View1;