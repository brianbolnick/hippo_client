import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import GET_FAMILY_QUERY from "./getFamilyQuery";
import get from "lodash/get";
import Layout from "components/common/Layout/Layout";
import Loader from "img/burger.gif";
import { media } from "styles/css-variables";

const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  ${media.tablet`
		width: 100%;
		flex-flow: column;
	align-items: center;
	`};
`;

const Group = styled.div`
  font-size: 3rem;
  margin: 24px auto;
  font-weight: 600;
`;

const MetaDetails = styled.div`
  font-size: 1.8rem;
  margin-bottom: 8px;
`;

const UsersContainer = styled.div``;

const Family = () => {
  const { data, networkStatus, loading } = useQuery(GET_FAMILY_QUERY);

  const family = get(data, "familyQuery", {});
  const users = get(family, "users", []);

  const renderUsers = () => {
    return users.map(user => {
      return (
        <div>
          - {user.name} ({user.email})
        </div>
      );
    });
  };

  return networkStatus !== 7 || loading ? (
    <LoadContainer>
      <img alt="" src={Loader} style={{ height: "300px", width: "300px" }} />
    </LoadContainer>
  ) : (
    <Layout>
      <Container>
        <div>
          <Group>Family</Group>
          <MetaDetails>Name: {family.displayName}</MetaDetails>
          <MetaDetails>Family Code: {family.joinCode}</MetaDetails>
          <MetaDetails>
            Membership: {family.isPremium ? "Master Class" : "Free (Upgrade)"}
          </MetaDetails>

          <div>
            <MetaDetails>FAMILY MEMBERS:</MetaDetails>
            <UsersContainer>{renderUsers()}</UsersContainer>
          </div>
        </div>

        <div>
          <Group>User</Group>
          <MetaDetails> TODO: change password </MetaDetails>
        </div>
      </Container>
    </Layout>
  );
};

export default Family;
