import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import HomeScreen from "../screens/Home.jsx";
import StudentScreen from "../screens/Student.jsx";
import AddStudent from "../screens/addStudent.jsx";
import EditStudent from "../components/formEditStudent.jsx";

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Landing Page" component={HomeScreen} />
      <Stack.Screen name="StudentPage" component={StudentScreen} />
      <Stack.Screen name="AddStudent" component={AddStudent} />
      <Stack.Screen name="EditStudent" component={EditStudent} />
    </Stack.Navigator>
  );
}
