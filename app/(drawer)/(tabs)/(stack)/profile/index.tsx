import { Link } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="h-32 bg-slate-800" />
      <View className="items-center -mt-16 px-6">
        <View className="border-4 border-white rounded-full shadow-xl">
          <Image
            source={{ uri: "https://github.com/harrychow012.png" }}
            className="w-32 h-32 rounded-full bg-gray-200"
          />
        </View>

        <Text className="text-3xl font-work-black mt-4 text-slate-900">
          Harry Chow
        </Text>

        <View className="flex-row mt-6 w-full justify-around border-y border-gray-100 py-4">
          <View className="items-center">
            <Text className="font-work-black text-slate-900">OS</Text>
            <Text className="text-gray-500">Debian</Text>
          </View>
          <View className="items-center">
            <Text className="font-work-black text-slate-900">Environment</Text>
            <Text className="text-gray-500">GNOME</Text>
          </View>
          <View className="items-center">
            <Text className="font-work-black text-slate-900">RAM</Text>
            <Text className="text-gray-500">16GB</Text>
          </View>
        </View>

        {/* Bio / Info */}
        <View className="w-full mt-6">
          <Text className="text-xl font-work-black text-slate-800 mb-2">
            Sobre mí
          </Text>
          <Text className="text-gray-600 leading-6 font-work-light">
            Estudiante de ingenieria en sistemas que esta aprendiendo sobre
            tecnologías de backend y microservicios y haciendo la asignacion de
            la aplicacion móvil con React Native y Expo.
          </Text>
        </View>

        {/* Botones de Redes/Acciones */}
        <View className="w-full mt-8 space-y-3">
          <TouchableOpacity className="bg-slate-900 py-4 rounded-xl items-center">
            <Text className="text-white font-work-medium">
              Perfil de GitHub
            </Text>
            <Link
              href="https://github.com/harrychow012"
              className="absolute inset-0"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="h-10" />
    </ScrollView>
  );
};

export default ProfileScreen;
