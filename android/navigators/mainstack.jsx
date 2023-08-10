import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import HomeScreen from "../screens/Home.jsx";
import StudentScreen from "../screens/Student.jsx";
import AddStudent from "../screens/addStudent.jsx";
import EditStudent from "../components/formEditStudent.jsx";
import CourseScreen from "../screens/Course.jsx";
import AddCourse from "../screens/addCourse.jsx";
import EditCourse from "../components/formEditCourse.jsx";
import DetailCourse from "../screens/detailCourse.jsx";
import AddGetCourse from "../components/AddGetCourse.jsx";

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
      <Stack.Screen name="CoursePage" component={CourseScreen} />
      <Stack.Screen name="AddCourse" component={AddCourse} />
      <Stack.Screen name="EditCourse" component={EditCourse} />
      <Stack.Screen name="DetailCourse" component={DetailCourse} />
      <Stack.Screen name="AddGetCourse" component={AddGetCourse} />
    </Stack.Navigator>
  );
}
