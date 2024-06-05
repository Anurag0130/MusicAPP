import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    Switch,
} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CustomDrawer = ({navigation:name}) => {

    return (
        <View style={{ flex: 1, height: 852, padding:4 }}>
            <DrawerContentScrollView
                // {...props}
                // contentContainerStyle={{}}
                 >

                {/* First part of drawer  */}
                <View style={{ flexDirection: "row", padding: 16 , marginTop:16}}>
                    {/* <DrawerItemList {...props} /> */}
                    <View>
                        <Image source={require("../assets/mehu.png")} style={{ height: 88, width: 88 }} />
                    </View>
                    <View style={{ padding: 8, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ color: "#191919", fontSize: 16 }}>Ravi Verma</Text>
                        <Text style={{ color: "#191919", fontSize: 12 }}>LM-3284 · Admin</Text>
                    </View>
                </View>
                {/* second part of drawer  */}
                <View style={{ justifyContent: "space-between", height: 580 }}>

                    <View style={{ height: 192, padding: 12 }}>

                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}  onPress={() =>name.navigate('Profile')}>
                            <View style={{ justifyContent: "flex-end", flexDirection: "row",alignItems:"center" }}>
                                <Image source={require("../assets/profile.png")} />
                                <Text style={{ color: "#191919", marginStart: 9 }}>My Profile</Text>
                            </View>
                            <Image style={{ marginLeft: 0 }} source={require("../assets/arrow.png")} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }} onPress={() => props.navigation.navigate('Gallery')}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require("../assets/gallery.png")} />
                                <Text style={{ color: "#191919", marginStart: 9 }}>Gallery</Text>
                            </View>
                            <Image source={require("../assets/arrow.png")} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }} onPress={() => props.navigation.navigate('BatchMark')}>
                            <View style={{ flexDirection: "row" ,alignItems:"center"}}>
                                <Image source={require("../assets/benchmark.png")} />
                                <Text style={{ color: "#191919", marginStart: 9 }}>My Batchmates</Text>
                            </View>
                            <Image source={require("../assets/arrow.png")} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }} onPress={() => props.navigation.navigate('Services')}>
                            <View style={{ flexDirection: "row",alignItems:"center" }}>
                                <Image source={require("../assets/setting.png")} />
                                <Text style={{ color: "#191919", marginStart: 9 }}>Services & Settings</Text>
                            </View>
                            <Image source={require("../assets/arrow.png")} />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", justifyContent: "space-between",padding: 12, marginBottom: 24 }} onPress={() => navigation.navigate('Profile')}>
                            <View style={{ flexDirection: "row", alignItems:"center" }}>
                                <Image source={require("../assets/logout.png")} />
                                <Text style={{ color: "#191919", marginStart: 9, alignItems: "center" }}>Logout</Text>
                            </View>
                            <Image source={require("../assets/arrow.png")} />
                        </View>
                    </TouchableOpacity>


                </View>


            </DrawerContentScrollView>
            <View>
            </View>
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({

});
