import React from "react";
import "./Content.css";
import moment from "moment/moment";

export default function Content(props) {
  return (
    <div className="content d-flex">
      <div className="card card__calendar">
        <div className="card-header">
          <h1 className="text-success fw-bold fs-5">
            {moment().format("MMMM Do YYYY")}
          </h1>
        </div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            style={{ cursor: "pointer" }}
          >
            <p>
              Each issue has a single reporter but can have multiple assignees
            </p>
            <div className="block d-flex">
              <div className="block-left">
                <i className="fa fa-bookmark" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{ display: "flex" }}>
                  <div className="avatar">
                    <img src="../assets/img/download (1).jfif" alt="demo" />
                  </div>
                  <div className="avatar">
                    <img src="../assets/img/download (2).jfif" alt="demo" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <p>
              Each issue has a single reporter but can have multiple assignees
            </p>
            <div className="block" style={{ display: "flex" }}>
              <div className="block-left">
                <i className="fa fa-check-square" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="block-right">
                <div className="avatar-group d-flex">
                  <div className="avatar">
                    <img src="../assets/img/download (1).jfif" alt="demo" />
                  </div>
                  <div className="avatar">
                    <img src="../assets/img/download (2).jfif" alt="demo" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="d-flex justify-content-end me-2 btn__add mt-3">
          <i
            className="fa-solid fa-circle-plus fs-4"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
