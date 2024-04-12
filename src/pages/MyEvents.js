import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, selectEvents } from "../features/Event/EventSlice";

const MyEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  const dataSource = [
    {
      key: "1",
      type: "Business",
      description: "Event 1 Description",
      title: "Event 1",
      date: "2021-09-01",
    },
    {
      key: "2",
      type: "Personal",
      description: "Event 2 Description",
      title: "Event 2",
      date: "2021-02-11",
    },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "age",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "address",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "address",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default MyEvents;
