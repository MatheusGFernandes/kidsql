import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Provider from "./src/context/AppContext";
import HomeScreen from "./src/screens/HomeScreen";
import Page1 from "./src/screens/Introduction/Page1";
import Page2 from "./src/screens/Introduction/Page2";
import Page3 from "./src/screens/Introduction/Page3";
import Page4 from "./src/screens/Introduction/Page4";
import Page5 from "./src/screens/Introduction/Page5";
import Page6 from "./src/screens/Introduction/Page6";
import Page7 from "./src/screens/Introduction/Page7";
import Page8 from "./src/screens/Introduction/Page8";
import Page9 from "./src/screens/Introduction/Page9";
import Page10 from "./src/screens/Introduction/Page10";
import Create1 from "./src/screens/CreateTable/Create1";
import Create2 from "./src/screens/CreateTable/Create2";
import Create3 from "./src/screens/CreateTable/Create3";
import Create4 from "./src/screens/CreateTable/Create4";
import Create5 from "./src/screens/CreateTable/Create5";
import Create6 from "./src/screens/CreateTable/Create6";
import Create7 from "./src/screens/CreateTable/Create7";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Create1,
    Create2,
    Create3,
    Create4,
    Create5,
    Create6,
    Create7,
  },
  {
    initialRouteName: "Home", //initialRouteName Mostra esse elemento primeiro
      defaultNavigationOptions: {
      title: "KIDSQL",
      headerTitleAlign: "center",
      detachPreviousScreen: false,
      gestureEnabled: false,
      headerLeft: () => null,
    },
  }
);

const App = createAppContainer(navigator);

export default () => {

  return (
    <Provider>
      <App />
    </Provider>
  );
};