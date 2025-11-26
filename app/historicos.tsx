import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { corridas } from "../data/corridas";
import CorridaItem from "./screens/components/CorridaItem";

export default function HistoricoCorridas() {
  return (
    <View className="flex-1 bg-white px-4 pt-12">
      {/* Cabeçalho */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-xl font-semibold text-gray-900">Histórico de Corridas</Text>
        <Ionicons name="search-outline" size={22} color="#4B5563" />
      </View>

      {/* Filtros */}
      <View className="flex-row space-x-3 mb-4">
        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-full">
          <Text className="text-white font-medium">Tudo</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
          <Text className="text-gray-700">Últimos 7 dias</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
          <Text className="text-gray-700">Este Mês</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={corridas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CorridaItem corrida={item} />}
      />
    </View>
  );
}
