import { StatusBar } from "expo-status-bar"
import { ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Message = () => {

  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <ScrollView>
        <View className="w-full h-full min-h-[85vh] px-4 pt-4">
          <Text>Message</Text>
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor="#fff" color="#030319" style="dark"
      />
    </SafeAreaView>
  )
}

export default Message