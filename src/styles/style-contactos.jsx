import { StyleSheet } from "react-native";

const styleContactos = StyleSheet.create({
    heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
    alignItems: 'center', // Centra el contenido horizontalmente
    },
    
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    cardContainer: {
        width: 200,
        height: 200,
        marginBottom: 20,
        perspective: 1000, // Añade perspectiva para rotación 3D
    },
    cardFront: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        backfaceVisibility: "hidden", // Oculta la parte trasera al rotar
        transition: "transform 0.6s", // Añade transición suave
    },
    cardBack: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backfaceVisibility: "hidden",
        transition: "transform 0.6s", // Añade transición suave
    },
    cardBackBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Fondo semitransparente
        width: "100%",
        height: "100%",
    },
    imageContainer: {
        justifyContent: 'center', // Centra la imagen dentro del contenedor
        alignItems: 'center',     // Centra la imagen dentro del contenedor
        width: 100,               // Ajustar al tamaño deseado
        height: 100,              // Ajustar al tamaño deseado
        overflow: 'hidden',       // Para evitar que la imagen se desborde
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',    // La imagen se ajusta a la proporción    
    },
    contentText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        marginBottom: 10,
    },
    boldText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default styleContactos;