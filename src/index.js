/* eslint-disable quotes */
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: Home,
    About: Profile
  })
);

export default Routes;
