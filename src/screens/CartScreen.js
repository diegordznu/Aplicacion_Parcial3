import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CartScreen({cart, setCart}) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrito de Compras</Text>
            <FlatList
                data={cart}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Text>${item.price.toFixed(2)}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Tu carrito está vacío</Text>
                }
                contentContainerStyle={styles.listContainer}
            />
            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCart([])}>
                <Text style={styles.buttonText}>Vaciar Carrito</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111",
        marginBottom: 1,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: "row",
        elevation: 3,
        overflow: "hidden",
    },
    image: {
        width: 90,
        height: 90,
    },
    info: {
        padding: 12,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111",
    },
    price: {
        fontSize: 14,
        color: "#666",
        marginTop: 6,
        fontWeight: "600",
    },
    item: {
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        padding: 12,
        elevation: 2,
    },
    total: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 16,
        color: "#111",
    },
    emptyText: {
        fontSize: 16,
        color: "#999",
        textAlign: "center",
        marginTop: 32,
    },
    listContainer: {
        paddingBottom: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: "#e74c3c",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },

});
