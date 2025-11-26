import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Corrida } from "../../../data/corridas";

type Props = {
  corrida: Corrida;
};

export default function CorridaItem({ corrida }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/corrida/${corrida.id}`)}
      className="flex-row items-center justify-between py-4 border-b border-gray-200"
    >
      <View className="flex-row items-center space-x-3">
        <View
          className={`w-8 h-8 rounded-full items-center justify-center ${
            corrida.status === "Concluída" ? "bg-blue-100" : "bg-red-100"
          }`}
        >
          <Ionicons
            name="bicycle-outline"
            size={18}
            color={corrida.status === "Concluída" ? "#2563EB" : "#DC2626"}
          />
        </View>

        <View>
          <Text className="text-gray-900 font-medium">{corrida.data}</Text>
          {corrida.status === "Concluída" ? (
            <Text className="text-gray-500">
              {corrida.valor} • {corrida.distancia} • {corrida.status}
            </Text>
          ) : (
            <Text className="text-red-500">{corrida.status}</Text>
          )}
        </View>
      </View>

      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );
}
