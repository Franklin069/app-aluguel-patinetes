import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CorridaDetalhe() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-semibold">Detalhes da Corrida {id}</Text>
    </View>
  );
}
