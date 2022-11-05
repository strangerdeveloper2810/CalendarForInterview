import React, { useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const { Option } = Select;
export default function FormCalendar(props) {
  const [valueEvent, setValueEvent] = useState({
    nameEvent: "",
    author: "",
    description: "",
  });

  const [typeEvent, setTypeEvent] = useState({
    type: "Processing"
  });

  const dispacth = useDispatch();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setValueEvent({
      ...valueEvent,
      [name]: value,
    });
    console.log(valueEvent);
  };

  const handleChangeTypeEvent = (value) => {
    setTypeEvent({...typeEvent, type:value});
    console.log(typeEvent);
  };

  // const handleChangTimeEvent = (value) => {
  //   const [Moment] = value;
  //   setTimeEvent({
  //     ...timeEvent,
  //     date: Moment._d.getDate(),
  //     month: Moment._d.getMonth(),
  //     fullYear: Moment._d.getFullYear(),
  //     hours: Moment._d.getHours(),
  //     minutes: Moment._d.getMinutes(),
  //     milliseconds: Moment._d.getMilliseconds(),
  //   });
  //   console.log(timeEvent);
  //   console.log(Moment._d);
  // };

  // const [timeEvent, setTimeEvent] = useState({
  //   fullYear: 2022,
  //   month: 1,
  //   date: 1,
  //   hours: 1,
  //   minutes: 1,
  //   milliseconds: 0,
  // });

  return (
    <Form layout="vertical" requiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Name Event"
            rules={[
              {
                required: true,
                message: "Please enter name event",
              },
            ]}
          >
            <Input
              placeholder="Please enter user name"
              name="nameEvent"
              value={valueEvent.nameEvent}
              onChange={handleChangeInput}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="author"
            rules={[
              {
                required: true,
                message: "Please enter author",
              },
            ]}
          >
            <Input
              placeholder="Please enter author"
              name="author"
              alue={valueEvent.author}
              onChange={handleChangeInput}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Type"
            rules={[
              {
                required: true,
                message: "Please choose the type",
              },
            ]}
          >
            <Select
              placeholder="Please choose the type"
              defaultValue="Processing"
              value={typeEvent.type}
              onChange={handleChangeTypeEvent}
            >
              <Option value="Processing">Processing</Option>
              <Option value="Success">Success</Option>
            </Select>
          </Form.Item>
        </Col>

        {/* <Col span={12}>
          <Form.Item
            label="DateTime"
            rules={[
              {
                required: true,
                message: "Please choose the dateTime",
              },
            ]}
          >
            <RangePicker
              name="dateTime"
              showTime
              value={valueEvent.dateTime}
              onChange={handleChangTimeEvent}
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Description"
            rules={[
              {
                required: true,
                message: "please enter description",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="please enter  description"
              name="description"
              value={valueEvent.description}
              onChange={handleChangeInput}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
