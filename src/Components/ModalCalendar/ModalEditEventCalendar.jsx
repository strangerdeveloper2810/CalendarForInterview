import React from "react";
import { Button, Drawer, Space } from "antd";
import { HIDE_MODAL } from "../../redux/constants/ModalCalendarConstants";
import { useDispatch, useSelector } from "react-redux";
export default function ModalEditEventCalendar(props) {
  const { visible, ComponentModalEdit, callBackSubmit } = useSelector(
    (state) => state.FormCalenDar
  );

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({
      type: HIDE_MODAL,
    });
  };
  return (
    <>
      <Drawer
        title="Edit Event"
        width={720}
        onClose={onClose}
        open={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={callBackSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        {ComponentModalEdit}
      </Drawer>
    </>
  );
}
