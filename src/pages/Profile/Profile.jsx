import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Orders from "../../components/Profile/Orders";
import Cookies from "universal-cookie";

const Profile = () => {

  const cookie= new Cookies()
  const token = cookie.get('token')
  if (!token) return window.history.back()
  return (
    <Box p={3}>
      <Tabs>
        <TabList>
          <Tab>User Info</Tab>
          <Tab>Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ProfileInfo />
          </TabPanel>
          <TabPanel>
            <Orders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Profile;
