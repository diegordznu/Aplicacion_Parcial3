import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

export default function OfertasScreen({ navigation, cart, setCart }) {
    const discountedProducts = [
        {
            id: "1",
            name: "Yeezy Pants en Oferta",
            price: 49.99, // Precio con descuento
            originalPrice: 79.99,
            image: "https://i.pinimg.com/1200x/35/a1/9d/35a19db3083ca8b9267b6ab482006f76.jpg", // Cambiar por nueva imagen
            description: "Pantalones Yeezy con diseño innovador - ¡Oferta especial del 40%!"
        },
        {
            id: "2",
            name: "Yeezy Cap en Oferta",
            price: 19.99,
            originalPrice: 29.99,
            image: "https://i.pinimg.com/1200x/77/b2/6b/77b26bed74dd87f4dedb7edbb58d6a2e.jpg", // Cambiar por nueva imagen
            description: "Gorra Yeezy con logo icónico - ¡Descuento imperdible!"
        },
        {
            id: "3",
            name: "Yeezy Jacket en Oferta",
            price: 89.99,
            originalPrice: 129.99,
            image: "https://i.pinimg.com/1200x/09/8c/5d/098c5d3b209ef7b335731cb500e0a6b9.jpg", // Cambiar por nueva imagen
            description: "Chaqueta Yeezy resistente al agua - ¡Aprovecha la oferta limitada!"
        },
        {
            id: "4",
            name: "Yeezy Sneakers en Oferta",
            price: 149.99,
            originalPrice: 199.99,
            image: "https://i.pinimg.com/1200x/a9/fc/33/a9fc33c6ed15c7fb9a0ef1dca5931a7f.jpg", // Cambiar por nueva imagen
            description: "Zapatillas Yeezy con amortiguación avanzada - ¡Oferta del 25%!"
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ofertas Especiales</Text>
            <FlatList
                data={discountedProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                        navigation={navigation}
                        originalPrice={item.originalPrice}
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
        textAlign: "center",
    },
    list: {
        paddingBottom: 20,
    },
});