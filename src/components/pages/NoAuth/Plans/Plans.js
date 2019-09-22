import React from "react";
import { Link } from "react-router-dom";
import Button from "components/common/Button/Button";
import {
  PlanSection,
  SubTitle,
  PlanDescription,
  AboutLink,
  CardContainer
} from "./styles";
import PlanCard from "./PlanCard";

const Plans = () => {
  return (
    <PlanSection>
      <SubTitle>Plans and Pricing</SubTitle>
      <PlanDescription>
        Choose a plan and features that fit your needs today! All initial
        proceeds will go towards my student loans balance, as described{" "}
        <AboutLink to="/about">here.</AboutLink>
      </PlanDescription>
      <CardContainer>
        <PlanCard title="Chef" />
        <PlanCard title="Master Class" />
      </CardContainer>

      <Link to="/sign_up">
        <Button>Get Started!</Button>
      </Link>
    </PlanSection>
  );
};

export default Plans;
