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
  DollarSign
} from "./styles";
import MasterClass from "img/mc.svg";
import Chef from "img/chefPlan.svg";

const ChefItems = () => (
  <Inclusions>
    <Item>10 recipes</Item>
    <Item>2 people per family</Item>
    <Item off>Meal Plans</Item>
    <Item off>Grocery and Shopping Lists</Item>
    <Item off>Search for Recipes By Ingredient</Item>
    <Item off>Import Recipes from Other Sites</Item>
    <Item off>Automatic Nutrition Facts (also searchable!)</Item>
  </Inclusions>
);

const MasterClassItems = () => (
  <Inclusions>
    <Item>Unlimited Recipes</Item>
    <Item>Unlimited Family Members</Item>
    <Item>Meal Plans</Item>
    <Item>Grocery and Shopping Lists</Item>
    <Item>Search for Recipes By Ingredient</Item>
    <Item>Import Recipes from Other Sites</Item>
    <Item>Automatic Nutrition Facts (also searchable!)</Item>
  </Inclusions>
);

const PlanCard = ({ title }) => {
  const renderPrice = () => {
    if (title === "Chef") return "Free";
    return (
      <>
        <DollarSign>$</DollarSign>
        39.99
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
