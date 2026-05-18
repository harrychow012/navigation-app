import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";

//Recivimos las props que nos envia el router por defecto
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    //Envolvemos todo en el scroll view nativo del drawer
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex-1 justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="font-work-black text-3xl text-primary">HC</Text>
        </View>
      </View>
      {/*  Ahora las opciones de navegacion por defecto del drawer */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
