import React from "react";
import { Outlet } from "react-router-dom";
import { Calendar, Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { openFormEditEventAction } from "../redux/actions/CalendarActions";
export default function HomeTemplate(props) {
  let listData = useSelector((state) => state.Calendar.listData);
  const dispatch = useDispatch();
  const getListData = (value) => {
    let listEvent;
    switch (value.date()) {
      case 8:
        listEvent = listData;
        break;
      case 10:
        listEvent = listData;
        break;
      default:
    }
    return listEvent || [];
  };

  const dateCellRender = (value) => {
    const listEvent = getListData(value);
    return (
      <ul className="events">
        {listEvent.map((item) => (
          <li key={item.content} style={{ listStyleType: "none" }}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
      <Calendar dateCellRender={dateCellRender} onSelect={()=>{
        dispatch(openFormEditEventAction());
      }}/>
      <Outlet />
    </div>
  );
}
