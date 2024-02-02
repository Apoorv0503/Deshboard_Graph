import React from "react";
import { useParams } from "react-router-dom";
import customer from '../assets/customer.png';
import CommonPage from "../components/CommonPage";

const CustomerCurrent = () => {
  const { customerType } = useParams();
  return (
    <CommonPage title={`${customerType} Customer`.toUpperCase()} profile={customer}/>
  );
};

export default CustomerCurrent;
