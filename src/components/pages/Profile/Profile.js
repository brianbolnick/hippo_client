import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components/macro';
import GET_FAMILY_QUERY from './getFamilyQuery';
import get from 'lodash/get';
import Layout from 'components/common/Layout/Layout';
import PageLoader from 'components/common/PageLoader';
import { media, colors } from 'styles/css-variables';
import ProfilePhoto from 'img/chef-profile.png';
import { Tabs, Tab, TabPane } from 'components/common/Tabs';

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  ${media.tablet`
		width: 100%;
		flex-flow: column;
	align-items: center;
	`};
`;

const SettingsContainer = styled.div`
  min-height: 600px;
  flex: 3;
  margin-right: 40px;
  //border: solid 1px ${colors.darkGray};
	border: solid 1px ${colors.mutedGray};
  border-radius: 4px;
	padding: 32px;

  ${media.smallDesktop`
	margin-right: 0;
	margin-bottom: 40px;
	width: 88%;
    box-sizing: border-box;
	`};

`;

const UserCard = styled.div`
  height: 26rem;
  flex: 1;
  margin-right: 40px;
  border: solid 1px ${colors.mutedGray};
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  //box-shadow: 0 0.3125rem 1rem 0 rgba(0, 0, 0, 0.21);
  //
  ${media.smallDesktop`
	margin-right: 0;
	margin-bottom: 40px;
	width: 88%;
	`};
`;

const UserImageContainer = styled.div`
  position: relative;
  flex: 0.01;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserCardHeading = styled.div`
  flex: 2.5;
  background: white;
  //height: 115px;
`;

const ProfileImage = styled.div`
  position: absolute;
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 50%;
  box-shadow: 0 0.25rem 0.5rem 0 #e6e6e6;
  height: 8em;
  width: 8em;
  background-image: ${`url(${ProfilePhoto})`};
  background-size: cover;
`;

const UserBody = styled.div`
  flex: 8;
  background-color: #f6f7f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserName = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

const UserActions = styled.div`
  flex: 1.5;
  background-color: #fff;
  border-top: 0.0625rem solid #e8ebf1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  cursor: pointer;

  &:hover {
    background: ${colors.blue};
    color: white;
  }

  font-weight: 600;
`;

const StyledTab = styled.div`
  padding-bottom: 16px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 500;
`;

const Navigation = styled.div`
  display: flex;
  margin-bottom: 16px;
  border-bottom: solid 1px ${colors.mutedGray};
`;

const Family = () => {
  const { data, networkStatus, loading } = useQuery(GET_FAMILY_QUERY);

  const family = get(data, 'familyQuery', {});
  const users = get(family, 'users', []);

  console.log(users);
  //const renderUsers = () => {
  //return users.map(user => {
  //return (
  //<div>
  //- {user.name} ({user.email})
  //</div>
  //);
  //});
  //};

  return networkStatus !== 7 || loading ? (
    <PageLoader />
  ) : (
    <Layout hideFooter>
      <Container>
        <UserCard>
          <UserCardHeading />
          <UserImageContainer>
            <ProfileImage />
          </UserImageContainer>
          <UserBody>
            <UserName>Brian Bolnick</UserName>
          </UserBody>
          <UserActions>Edit Profile (Coming Soon)</UserActions>
        </UserCard>

        <SettingsContainer>
          <Tabs
            defaultActiveTab="family"
            onTabChange={() => console.log('click')}
          >
            <Navigation>
              <Tab name="family" profile>
                <StyledTab>Family</StyledTab>
              </Tab>
              <Tab name="billing" profile>
                <StyledTab>Billing</StyledTab>
              </Tab>
            </Navigation>
            <TabPane name="family">Family Settings</TabPane>
            <TabPane name="billing">Billing Settings</TabPane>
          </Tabs>
        </SettingsContainer>
      </Container>
    </Layout>
  );
};

//<Warning>PAGE UNDER CONSTRUCTION</Warning>
//<Card>
//<Group>{family.displayName} Family</Group>
//<MetaDetails>Join Code: {family.joinCode}</MetaDetails>
//<MetaDetails>
//Membership: {family.isPremium ? 'Master Class' : 'Free (Upgrade)'}
//</MetaDetails>

//<div>
//<MetaDetails>Family Members</MetaDetails>
//<UsersContainer>{renderUsers()}</UsersContainer>
//</div>
//</Card>

//<Card>
//<Group>User Settings</Group>
//<MetaDetails>Change Password (Coming Soon)</MetaDetails>
//</Card>

export default Family;
