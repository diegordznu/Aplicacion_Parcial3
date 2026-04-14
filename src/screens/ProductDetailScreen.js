import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
export default function ProductDetailScreen({route,navigation, cart, setCart}) {
    const { name, price, image, description } = route.params;
    const imageSource = typeof image == "string" ? {uri: image}: image
    return (
        <ScrollView style = {styles.container}>
            <Image source = {{uri: image}}
            style = {styles.image}
        />

        <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.price}>${price}</Text>

            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    const newProduct = { name, price, image };
                    setCart([...cart, newProduct]);
                    alert("Producto agregado al carrito");
                }}
            >
                <Text style={styles.buttonText}>Agregar al Carrito</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#f5f5f5"
    },
    image:{
        width: "100%",
        height: 180,  
    },
    infoContainer: {
        padding:20
    },
    name:{
        fontSize:22,
        color:"#2ecc71",
        marginTop:10,
        fontWeight:"600"
    },
    price:{
        fontSize:24,
        fontWeight:"700",
        color:"#000",
        marginTop:10
    },
    description:{
        marginTop:20,
        fontSize:16,
        color:"#555",
        lineHeight:24
    },
    button:{
        marginTop:30,
        backgroundColor:"#2ecc71",
        padding:10,
        borderRadius:5
    },
    buttonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center"
    }

});