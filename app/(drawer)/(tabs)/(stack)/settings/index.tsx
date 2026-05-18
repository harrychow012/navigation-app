import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const SettingScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white px-6">
      <Text className="font-work-black text-2xl my-6">Ajustes</Text>

      {/* Opción 1 */}
      <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
        <Ionicons name="person-outline" size={24} color="black" />
        <Text className="ml-4 text-lg font-work-medium">Cuenta</Text>
      </TouchableOpacity>

      {/* Opción 2 */}
      <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text className="ml-4 text-lg font-work-medium">Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
        <Ionicons name="shield-checkmark-outline" size={24} color="black" />
        <Text className="ml-4 text-lg font-work-medium">Privacidad</Text>
      </TouchableOpacity>

      {/* Opción 3 */}
      <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
        <Ionicons name="color-palette-outline" size={24} color="black" />
        <Text className="ml-4 text-lg font-work-medium">Apariencia</Text>
      </TouchableOpacity>

      {/* Pie de página simple */}
      <View className="mt-10 items-center">
        <Text className="text-gray-400 font-work-light">Versión 1.0.0</Text>
        <Text className="text-gray-400 font-work-light">
          © 2026 Running on Debian Linux Environment
        </Text>
      </View>
    </ScrollView>
  );
};
export default SettingScreen;
