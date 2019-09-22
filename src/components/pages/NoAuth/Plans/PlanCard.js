import React from "react";
import PropTypes from "prop-types";
import {
  CardWrapper,
  PlanTitle,
  PlanImage,
  ImageWrapper,
  Price,
  Divider,
  Inclusions,
  Item,
  DollarSign,
  Month
} from "./styles";
import MasterClass from "img/mc.svg";
import Chef from "img/chefPlan.svg";

const ChefItems = () => (
  <Inclusions>
    <Item>10 recipes</Item>
    <Item>2 people per family</Item>
    <Item off>Meal Plans</Item>
    <Item off>Shopping Lists</Item>
    <Item off>Import recipes from other sites</Item>
  </Inclusions>
);

const MasterClassItems = () => (
  <Inclusions>
    <Item>Unlimited recipes</Item>
    <Item>Unlimited family members</Item>
    <Item>Meal Plans</Item>
    <Item>Shopping Lists</Item>
    <Item>Import recipes from other sites</Item>
  </Inclusions>
);

const PlanCard = ({ title }) => {
  const renderPrice = () => {
    if (title === "Chef") return "Free";
    return (
      <>
        <DollarSign>$</DollarSign>
        9.99
        <Month>month</Month>
      </>
    );
  };
  return (
    <CardWrapper>
      <ImageWrapper>
        <PlanImage src={title === "Chef" ? Chef : MasterClass} />
      </ImageWrapper>
      <PlanTitle>{title}</PlanTitle>
      <Divider />
      {title === "Chef" ? <ChefItems /> : <MasterClassItems />}
      <Divider />
      <Price>{renderPrice()}</Price>
    </CardWrapper>
  );
};

PlanCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default PlanCard;
