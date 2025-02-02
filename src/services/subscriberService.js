const subscribersUrl = "http://192.168.1.136:3001/subscriptores";

// Obtiene la lista de suscriptores desde el backend
export const getSubscribers = async () => {
  try {
    const response = await fetch(subscribersUrl); // Realiza la solicitud GET
    if (!response.ok) {
      throw new Error("Error al obtener los suscriptores");
    }
    const data = await response.json(); // Convierte la respuesta a JSON
    return data; // Devuelve la lista de suscriptores
  } catch (error) {
    console.error("Error en getSubscribers:", error);
    throw error; // Relanza el error para que pueda ser manejado por el llamador
  }
};

// Añade un nuevo suscriptor a la lista existente
export const addSubscriber = async (newSubscriber) => {
  try {
    const response = await fetch(subscribersUrl, {
      method: "POST", // Método HTTP para crear un nuevo recurso
      headers: {
        "Content-Type": "application/json", // Indica que el cuerpo es JSON
      },
      body: JSON.stringify(newSubscriber), // Convierte el objeto a JSON
    });

    if (!response.ok) {
      throw new Error("Error al añadir el suscriptor");
    }

    const data = await response.json(); // Convierte la respuesta a JSON
    return data; // Devuelve la lista actualizada desde el backend
  } catch (error) {
    console.error("Error en addSubscriber:", error);
    throw error; // Relanza el error para que pueda ser manejado por el llamador
  }
};
