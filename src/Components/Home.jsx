import React from "react";
import "./Home.css";
import Content from "./Content/Content";
import Modal from "./Modal/Modal";
export default function Home(props) {
  return (
    <div className="calendar">
      <div className="main">
        <Content />
      </div>
      <Modal />
    </div>
  );
}
