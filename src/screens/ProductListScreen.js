import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({navigation, cart, setCart}) {
    const products = [
        {
            id: "1",
            name: "Yeezus Hoodie",
            price: 39.99,
            image: "https://i.pinimg.com/736x/57/95/4b/57954bdef49acdd360e1aafafe5c2a7c.jpg",
            description: "Hoodie con materiales reciclados que hacen de esta prenda una pieza unica"
        },
        {
            id: "2",
            name: "Yeezus T-Shirt",
            price: 39.99,
            image: "https://i.pinimg.com/736x/86/3a/55/863a5513461af933a8d6c25cb48f03bd.jpg",
            description: "Increible t-shirt alternativa al estilo Yeezy"
        },
        {
            id: "3",
            name: "Concept Hoodie",
            price: 69.99,
            image: "https://i.pinimg.com/736x/bd/9a/5a/bd9a5a5588a04a4578dcdd9246fe0497.jpg",
            description: "Hoodie con materiales reciclados que hacen de esta prenda una pieza unica"
        },
        {
            id: "4",
            name: "Nike Re-imagined Hoodie",
            price: 89.99,
            image: "https://i.pinimg.com/736x/d6/eb/82/d6eb8265239a856461ce008350189139.jpg",
            description: "Hoodie hecha de otras hoodies con estilo unico de la marca Nike, Just do it"
        },

    ];


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Catalogo de productos</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard 
                    name={item.name} 
                    price={item.price} 
                    image={item.image}
                    description={item.description}
                    navigation={navigation}
                    cart={cart}
                    setCart={setCart}
                    />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#111",
        marginBottom: 18,
    },
    list: {
        paddingBottom: 20,
    },
});