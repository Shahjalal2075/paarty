import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import home from '../../assets/icon/home.png'
import profile from '../../assets/icon/user.png'
import customize from '../../assets/icon/custom.png'


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className={`flex flex-row items-center justify-center ${focused && "bg-[#F1F3FF] rounded-2xl px-3 py-2"}`}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className={`${focused ? "w-5 h-5" : "w-5 h-5"}`}
            />
            {
                focused &&
                <Text
                    className={`${focused ? "font-pregular" : "font-pregular"} text-sm pl-2`}
                    style={{ color: color }}
                >
                    {name}
                </Text>
            }
        </View>

    )
}

const TabLayout = () => {

    /* const { user } = useGlobalContext();
    if (!user) return <Redirect href="/signin" />; */

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#081E32',
                    tabBarInactiveTintColor: '#797da2',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopWidth: 1,
                        borderTopColor: "#fff",
                        height: 60,
                        paddingLeft: 15,
                        paddingRight: 15
                    }
                }}
            >
                <Tabs.Screen
                    name='(home)'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                name="Home"
                                color={color}
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="(message)"
                    options={{
                        title: "Customize",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={customize}
                                color={color}
                                name="Customize"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="(profile)"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />

            </Tabs>
        </>
    )
}

export default TabLayout