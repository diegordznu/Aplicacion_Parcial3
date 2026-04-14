import { View, Text, Button, Image,
    ScrollView, TouchableOpacity,StyleSheet
 } from "react-native";

export default function HomeScreen({ navigation }) {
return (
    <ScrollView style={styles.container}>
        <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        />
        <Image
        source={{ uri: "https://i.pinimg.com/736x/9a/2d/fe/9a2dfe93844a1c59776515618eba6281.jpg" }}
        style={styles.banner}
        />
        <Text style={styles.sectionTitle}>
            Productos destacados
        </Text>
        <Image
            source={{ uri: "https://i.pinimg.com/1200x/3d/80/bd/3d80bd1a25960f725287f3898822bfa7.jpg" }}
            style={styles.banner}
        />
        <View style={styles.productPreview}>
            <View style={styles.productCard}>
                <Text>Welcome</Text>
            </View>
            <View style={styles.productCard}>
                <Text>Home</Text>
            </View>
        
        </View>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("ProductList")}
        >
            <Text style={styles.buttonText}>Ver catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cart")}
        >
            <Text style={styles.buttonText}>Ver carrito</Text>
        </TouchableOpacity>

    </ScrollView>

);

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: "center",
        marginTop: 20,
        resizeMode: "contain",
    },
    banner: {
        width: "90%",
        height: 180,
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 30,
        alignSelf: "flex-start",
        alignItems: "center",
    },
    productCard: {
        width: 120,
        height: 120,
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },
    productPreview: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    }
})
