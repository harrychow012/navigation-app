import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftPress = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back(); //Regresa a la pantalla anterior
      return;
    }
    //Sino puede ir atras abre el menu lateral
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
        //Renderizado dinamico del icono izquierdo

        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "grid-outline"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftPress(canGoBack ?? false)}
          />
        ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
    </Stack>
  );
};

export default StackLayout;
