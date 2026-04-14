import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, image, navigation, description, originalPrice, cart, setCart }) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={()=>
                navigation.navigate("ProductDetail", {
                    name: name,
                    price: price,
                    image: image,
                    description: description
                })
            }
        >

            <Image 
            source={{ uri: image }}
             style={styles.image} 
            />
            
            <View style={styles.infoContainer}>
                <Text style={styles.Productname}>{name}</Text>
                {originalPrice ? (
                    <View style={styles.priceContainer}>
                        <Text style={styles.originalPrice}>${originalPrice}</Text>
                        <Text style={styles.discountPrice}>${price}</Text>
                    </View>
                ) : (
                    <Text style={styles.Productprice}>${price}</Text>
                )}
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

        

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
    },
    image: {
        width: "100%",
        height: 180,
    },
    infoContainer: {
        padding: 14,
    },
    Productname: {
        fontSize: 17,
        fontWeight: "700",
        color: "#111",
    },
    Productprice: {
        fontSize: 15,
        color: "#666",
        marginTop: 4,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    originalPrice: {
        fontSize: 13,
        color: "#999",
        textDecorationLine: "line-through",
        marginRight: 8,
    },
    discountPrice: {
        fontSize: 15,
        color: "#e74c3c", // Red for discount
        fontWeight: "bold",
    },
    button:{
        marginTop:10,
        backgroundColor:"#2ecc71",
        padding:8,
        borderRadius:5
    },
    buttonText:{
        color:"#fff",
        fontSize:14,
        fontWeight:"bold",
        textAlign:"center"
    }
});