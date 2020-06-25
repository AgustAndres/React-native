import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";
import UserLogged from "../screens/Account/UserLogged";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Mi cuenta" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "iniciar sesion" }}
      />

      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registro" }}
      />
      <Stack.Screen
        name="UserLogged"
        component={UserLogged}
        options={{ title: "Usuario logeado" }}
      />
    </Stack.Navigator>
  );
}
