import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from '../assets/logo/logoName.png';
import support from '../assets/icon/support.png';
import call from '../assets/icon/call.png';
import splash_bg from '../assets/splash/splashBg.png';
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const RootLayout = () => {

  /* const { user } = useGlobalContext();
  if (user) return <Redirect href="/home" />; */

  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCallNow = () => {
    Linking.openURL('tel:+8801763628770');
  };

  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}> 
        <ImageBackground
          source={splash_bg}
          className="w-full h-full min-h-[100vh]"
          resizeMode="stretch"
        >
          <View className="h-full flex flex-col justify-end">

            <LinearGradient
              className="h-2/3 flex flex-col justify-end"
              colors={['#f8fdfe00', '#f8fdfe36', '#f8fdfee8', '#f8fdfe']}
              locations={[0, 0.27, 0.56, 1]}
            >
              <View className="px-4 pb-3">
                <View className="flex flex-row justify-between items-center mb-9">
                  <Image
                    source={logo}
                    className="w-[135px] h-[55px]"
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    activeOpacity={0.7}
                    disabled={isLoading}
                  >
                    <Image
                      source={support}
                      className="w-[46px] h-[46px]"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <View className="pb-4">
                  <Text className="text-[#00072D] text-2xl font-bold font-hregular pb-1">Create Your Dream Event</Text>
                  <Text className="text-[#393F5F] text-lg font-[400] font-hregular pb-1">Khulna Dhaka</Text>
                  <Text className="text-[#393F5F] text-base font-[300] font-hregular ">Served more than 1200 families in BD</Text>
                </View>
                <View className="flex flex-col">
                  <TouchableOpacity
                    onPress={() => { router.push('signin') }}
                    activeOpacity={0.7}
                    className={`bg-[#f65f34] rounded-lg flex flex-row justify-center items-center ${isLoading ? 'opacity-50' : ''}`}
                    disabled={isLoading}
                  >
                    <Text className={`text-[#fff] text-base font-hregular font-bold py-3`}>
                      Get Started
                    </Text>
                    {isLoading && (
                      <ActivityIndicator
                        animating={isLoading}
                        color="#fff"
                        size="small"
                        className="ml-2"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>
      </ScrollView>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center bg-[#0e246569] ">
          <View className="bg-[#F8FDFE] rounded-xl px-6 py-6 w-[85%] max-w-[350px]">
            <Text className="text-center text-[#00072D] text-lg font-[400] font-hregular mb-3">Paarty Support</Text>
            <Text className="text-center text-base mb-3 font-[300] text-[#393F5F] font-hregular">
              Our support center is available to assist you
              every day between
            </Text>
            <Text className="text-center text-base mb-2 font-[400] text-[black] font-hregular">
              9:00 am - 11:30 pm
            </Text>
            <View className="flex flex-row items-center justify-center mt-3 mb-2">
              <TouchableOpacity
                onPress={handleCallNow}
                className="flex flex-row items-center justify-center "
              >
                <Image
                  source={call}
                  className="w-[15px] h-[15px]"
                  resizeMode="contain"
                />
                <Text className="text-[#000] text-[400] text-center text-base ml-2">Call now</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className="absolute top-3 right-3"
            >
              <Text className="text-base">✕</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar
        backgroundColor="#fff" style="dark"
      />
    </SafeAreaView>
  );
}

export default RootLayout;
