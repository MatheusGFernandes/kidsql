import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Provider from "./src/context/AppContext";
import WelcomeScreen from "./src/screens/WelcomeScreen";
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
import Create1 from "./src/screens/CreateTable/Create1";
import Create2 from "./src/screens/CreateTable/Create2";
import Create3 from "./src/screens/CreateTable/Create3";
import Create4 from "./src/screens/CreateTable/Create4";
import Create5 from "./src/screens/CreateTable/Create5";
import Create6 from "./src/screens/CreateTable/Create6";
import Create7 from "./src/screens/CreateTable/Create7";
import Insert1 from "./src/screens/Insert/Insert1";
import Insert2 from "./src/screens/Insert/Insert2";
import Insert3 from "./src/screens/Insert/Insert3";
import Insert4 from "./src/screens/Insert/Insert4";
import Insert5 from "./src/screens/Insert/Insert5";
import Select1 from "./src/screens/Select/Select1";
import Select2 from "./src/screens/Select/Select2";
import Select3 from "./src/screens/Select/Select3";
import Select4 from "./src/screens/Select/Select4";
import Select5 from "./src/screens/Select/Select5";
import Select6 from "./src/screens/Select/Select6";
import Select7 from "./src/screens/Select/Select7";

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
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
    Create1,
    Create2,
    Create3,
    Create4,
    Create5,
    Create6,
    Create7,
    Insert1,
    Insert2,
    Insert3,
    Insert4,
    Insert5,
    Select1,
    Select2,
    Select3,
    Select4,
    Select5,
    Select6,
    Select7,
  },
  {
    initialRouteName: "Welcome", //initialRouteName Mostra esse elemento primeiro
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