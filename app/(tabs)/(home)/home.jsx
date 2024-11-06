import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import userPhoto from "../../../assets/icon/users.png";
import s1 from "../../../assets/home/s1.png";
import s2 from "../../../assets/home/s2.png";
import s3 from "../../../assets/home/s3.png";
import s4 from "../../../assets/home/s4.png";
import s5 from "../../../assets/home/s5.png";
import s6 from "../../../assets/home/s6.png";
import s7 from "../../../assets/home/s7.png";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

const Home = () => {
  const user = { email: 'shahj@mail.com' }
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserDetails = () => {
    setIsLoading(true);
    fetch(`https://laundry-server.vercel.app/user-list/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setUserDetails(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserDetails();
    }, [user.email])
  );

  return (
    <SafeAreaView className="bg-[] h-full">

      <LinearGradient
        className="h-full"
        colors={['#f65f34', '#5D81EE']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <ScrollView>
          <View className="w-full h-full min-h-[80vh]">
            <View className="px-4 pt-8 pb-10 flex flex-row items-center justify-between">
              <View>
                <Text className="text-sm text-[#fff]">Wellcome</Text>
                <Text className="text-xl font-bold tracking-[0.3px] mt-1 text-[#fff]">{user.email}</Text>
              </View>
              <View className="">
                <TouchableOpacity
                  onPress={() => { router.push('profile') }}
                  activeOpacity={0.7}
                  className={`flex justify-center items-center flex-row rounded-full`}

                >
                  <Image
                    source={userPhoto}
                    resizeMode="contain"
                    className="w-10 h-10 rounded-full"
                  />
                </TouchableOpacity>

              </View>
            </View>
            <View className="h-full bg-[#fff] rounded-t-[26px]">
              <View className="px-4 py-6 bg-[#F4F7FF] rounded-t-[26px]">
                <Text className="text-lg font-bold text-[#1A003C]">Chooses Your Program</Text>
                <View className=" flex flex-row gap-3 pt-4">
                  <TouchableOpacity
                    onPress={() => { router.push({ pathname: 'product', params: { plan: 'Marriage ceremony' } }) }}
                    activeOpacity={0.7}
                    className={`flex-1 h-[136px]`}

                  >
                    <ImageBackground
                      source={s3}
                      resizeMode="cover"
                      className="flex-1 justify-end items-center rounded-2xl pb-2"
                      imageStyle={{ borderRadius: 20 }}
                    >
                      <Text className="text-sm font-bold font-hregular px-8 rounded-full text-center bg-[#11111160] text-[#fff] pt-1">
                        Marriage ceremony
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { router.push({ pathname: 'product', params: { plan: 'Marriage Anniversary' } }) }}
                    activeOpacity={0.7}
                    className={`flex-1 h-[136px]`}

                  >
                    <ImageBackground
                      source={s4}
                      resizeMode="cover"
                      className="flex-1 justify-end items-center rounded-2xl pb-2"
                      imageStyle={{ borderRadius: 20 }}
                    >
                      <Text className="text-sm font-bold font-hregular px-8 rounded-full text-center bg-[#11111160] text-[#fff] pt-1">
                        Marriage Anniversary
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View className=" flex flex-row gap-3 pt-4">
                  <TouchableOpacity
                    onPress={() => { router.push({ pathname: 'product', params: { plan: 'Reception' } }) }}
                    activeOpacity={0.7}
                    className={`flex-1 h-[136px]`}

                  >
                    <ImageBackground
                      source={s5}
                      resizeMode="cover"
                      className="flex-1 justify-end items-center rounded-2xl pb-2"
                      imageStyle={{ borderRadius: 20 }}
                    >
                      <Text className="text-sm font-bold font-hregular px-8 rounded-full text-center bg-[#11111160] text-[#fff] pt-1">
                        Reception
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { router.push({ pathname: 'product', params: { plan: 'Holud ceremony' } }) }}
                    activeOpacity={0.7}
                    className={`flex-1 h-[136px]`}

                  >
                    <ImageBackground
                      source={s6}
                      resizeMode="cover"
                      className="flex-1 justify-end items-center rounded-2xl pb-2"
                      imageStyle={{ borderRadius: 20 }}
                    >
                      <Text className="text-sm font-bold font-hregular px-8 rounded-full text-center bg-[#11111160] text-[#fff] pt-1">
                        Holud ceremony
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View className=" flex flex-row gap-3 pt-4">
                  <TouchableOpacity
                    onPress={() => { router.push({ pathname: 'product', params: { plan: 'Beauty Salon' } }) }}
                    activeOpacity={0.7}
                    className={`flex-1 h-[136px]`}

                  >
                    <ImageBackground
                      source={s1}
                      resizeMode="cover"
                      className="flex-1 justify-end items-center rounded-2xl pb-2"
                      imageStyle={{ borderRadius: 20 }}
                    >
                      <Text className="text-sm font-bold font-hregular px-8 rounded-full text-center bg-[#11111160] text-[#fff] pt-1">
                        Beauty Salon
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { router.push({ pathname: 'product', params: { plan: 'Bridal Salon' } }) }}
                    activeOpacity={0.7}
                    className={`flex-1 h-[136px]`}

                  >
                    <ImageBackground
                      source={s2}
                      resizeMode="cover"
                      className="flex-1 justify-end items-center rounded-2xl pb-2"
                      imageStyle={{ borderRadius: 20 }}
                    >
                      <Text className="text-sm font-bold font-hregular px-8 rounded-full text-center bg-[#11111160] text-[#fff] pt-1">
                        Bridal Salons
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </ScrollView>
      </LinearGradient>
      <StatusBar
        backgroundColor="#1a43bf" color="#030319" style="light"
      />
    </SafeAreaView>
  )
}

export default Home