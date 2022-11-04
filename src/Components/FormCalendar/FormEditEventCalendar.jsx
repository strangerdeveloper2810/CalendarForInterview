import React from "react";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
const { RangePicker } = DatePicker;
const { Option } = Select;
export default function FormEditEventCalendar(props) {
  return (
    <Form layout="vertical" requiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="nameEvent"
            label="Name Event"
            rules={[
              {
                required: true,
                message: "Please enter name event",
              },
            ]}
          >
            <Input placeholder="Please enter user name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="author"
            label="author"
            rules={[
              {
                required: true,
                message: "Please enter author",
              },
            ]}
          >
            <Input placeholder="Please enter author" disabled={true} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="type"
            label="Type"
            rules={[
              {
                required: true,
                message: "Please choose the type",
              },
            ]}
          >
            <Select placeholder="Please choose the type">
              <Option value="Processing">Processing</Option>
              <Option value="Success">Success</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="dateTime"
            label="DateTime"
            rules={[
              {
                required: true,
                message: "Please choose the dateTime",
              },
            ]}
          >
            <RangePicker showTime />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "please enter description",
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="please enter  description" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
