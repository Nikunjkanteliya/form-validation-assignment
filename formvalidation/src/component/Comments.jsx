import React from "react";
import { Link } from "react-router-dom";
import style from "../style/comment.module.css";
import { useState } from "react";

const Comments = () => {
  let [rate, userate] = useState("");
  let [username, setusername] = useState("");
  let [comments, setcomments] = useState("");
  let [flag, setflag] = useState(false);

  let ratingfun = (event) => {
    userate(event.target.value);
  };
  let namefun = (event) => {
    setusername(event.target.value);
  };
  let commentfun = (event) => {
    setcomments(event.target.value);
  };

  let cond = () => {
    if (username.length <= 2 || username.length > 15) {
      setflag(true);
    } else {
      setflag(false);
    }
  };
  let alerts = () => {
    setcomments("");
    setusername("");
    if (username.length === 0 || comments.length === 0) {
      return alert("value cant be empty");
    } else {
      alert(` userrating:${rate} 
      userName:${username}
      userComments: ${comments}`);
    }
  };
  return (
    <div className={`${style.mid}`}>
      <form action="">
        <div>
          <div>
            <label> rating</label>
          </div>
          <select onChange={ratingfun}>
            <option value="">select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <div>
            <label> name</label>
          </div>
          <input
            type="text"
            onChange={namefun}
            onBlur={cond}
            value={username}
          />
          {flag && (
            <p className={`${style.ptag}`}>
              {" "}
              minimum 3 character and maximum 15 character should be there
            </p>
          )}
        </div>
        <div>
          <div>
            <label> Comment</label>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={commentfun}
            value={comments}
          ></textarea>
        </div>
        <button onClick={alerts}>submit</button>
        <Link to={"/"}>
          {" "}
          <button>back</button>
        </Link>
      </form>
    </div>
  );
};

export default Comments;
