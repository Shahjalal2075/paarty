import { View, Text, ScrollView, Image, ActivityIndicator, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import logo from '../../assets/logo/logo-black.png';
import user from '../../assets/icon/user.png';
import email from '../../assets/icon/email.png';
import lock from '../../assets/icon/lock.png';
import eye from '../../assets/icon/eye.png';
import eyeHide from '../../assets/icon/eye-hide.png';
import flag from '../../assets/icon/flag.png';
import { Link, router } from 'expo-router';

const Verification = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        digit1: "3",
        digit2: "3",
        digit3: "3",
        digit4: "3",
        digit5: "3",
    })

    const createAccount = () => {
        const code = form.digit1 + form.digit2 + form.digit3 + form.digit4 + form.digit5;
        console.log(code);
        router.push('success');
    }
    const resendCode = () => {
        ToastAndroid.show("Verification code resent successfully!", ToastAndroid.SHORT);
    };

    return (
        <SafeAreaView className="bg-[#F8FDFE] h-full">
            <ScrollView>
                <View className="w-full h-full min-h-[100vh] px-4 flex flex-col justify-center">
                    <View>
                        <Text className="text-2xl font-[500] font-hregular text-[#081E32]">Enter verification code</Text>
                        <Text className="text-base text-[#797DA2] font-hregular font-[400] mr-8 leading-[26px]">We have send you a 5 digit verification code on <Text className="text-[#081E32] font-[500]">+8801763628770</Text></Text>
                    </View>
                    <View className="">
                        <Text className="text-[#2E2E3E] text-2xl font-hregular font-[500] text-center mt-16 mb-6 ">Enter 5 digit code</Text>
                        <View>
                            <View className="flex flex-row justify-between">
                                <View className={`w-1/6 h-12 rounded-lg border-2 focus:border-[#081E32] flex flex-row items-center ${form.digit1 == "" ? "border-[#D2D5EC]" : "border-[#081E32]"}`}>
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg text-center"
                                        value={form.digit1}
                                        placeholder=""
                                        maxLength={1}
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, digit1: e })}
                                    />
                                </View>
                                <View className={`w-1/6 h-12 px-4 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center ${form.digit2 == "" ? "border-[#D2D5EC]" : "border-[#081E32]"}`}>
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg text-center "
                                        value={form.digit2}
                                        placeholder=""
                                        maxLength={1}
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, digit2: e })}
                                    />
                                </View>
                                <View className={`w-1/6 h-12 px-4 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center ${form.digit3 == "" ? "border-[#D2D5EC]" : "border-[#081E32]"}`}>
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg text-center "
                                        value={form.digit3}
                                        placeholder=""
                                        maxLength={1}
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, digit3: e })}
                                    />
                                </View>
                                <View className={`w-1/6 h-12 px-4 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center ${form.digit4 == "" ? "border-[#D2D5EC]" : "border-[#081E32]"}`}>
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg text-center "
                                        value={form.digit4}
                                        placeholder=""
                                        maxLength={1}
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, digit4: e })}
                                    />
                                </View>
                                <View className={`w-1/6 h-12 px-4 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center ${form.digit5 == "" ? "border-[#D2D5EC]" : "border-[#081E32]"}`}>
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg text-center "
                                        value={form.digit5}
                                        placeholder=""
                                        maxLength={1}
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, digit5: e })}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={createAccount}
                                activeOpacity={0.7}
                                className={`bg-[#f65f34] w-full rounded-lg min-h-[48px] flex flex-row justify-center items-center mt-8 ${isLoading ? 'opacity-50' : ''} ${(form.digit1 === '' || form.digit2 === '' || form.digit3 === '' || form.digit4 === '' || form.digit5 === '') && 'bg-[#D2D5EC]'}`}
                                disabled={isLoading || form.digit1 === '' || form.digit2 === '' || form.digit3 === '' || form.digit4 === '' || form.digit5 === ''}
                            >
                                <Text className={`text-[#fff] font-hregular font-[500] text-center text-lg`}>
                                    Next
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
                    <View className="mt-6">
                        <Text className="text-lg font-hregular font-[400] text-center text-[#797DA2]">
                            Didn’t get the code?  <Text onPress={resendCode} className='text-[#f65f34] font-hregular font-[600] underline'>Resend code</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor="#F8FDFE" style="dark"
            />
        </SafeAreaView>
    )
}

export default Verification