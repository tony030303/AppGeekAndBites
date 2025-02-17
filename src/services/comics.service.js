// import { start } from "repl";
import API_URL from "../config";

//conexión a API

//agregar cómic
export const agregarComic = async (nombre, year, cover) => {
  const formData = new FormData();
  formData.append("accion", "comics");
  formData.append("title", nombre);
  formData.append("year", year);
  formData.append("cover", {
    uri: cover,
    type: "image/jpeg", // Ajusta el tipo según el formato
    name: "comic_cover.jpg",
  });

  try {
    const response = await fetch(`${API_URL}/comics`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: "Cómic agregado correctamente!" };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    return {
      success: false,
      message: "Hubo un problema al conectar con el servidor",
    };
  }
};

//eliminar cómic

export const eliminarComic = async (id) => {
  try {
    const response = await fetch(`${API_URL}/comics/${id}`, {
      //pongan su ip local, porque sino no funciona!!..
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: "Cómic eliminado correctamente!" };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    return {
      success: false,
      message: "Hubo un problema al conectar con el servidor",
    };
  }
};

//modificar cómic

export const modificarComic = async (id, year) => {
  try {
    const response = await fetch(`${API_URL}/comics/${id}`, {
      //pongan su ip local, porque sino no funciona!!..
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ year }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: "Cómic actualizado correctamente!" };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    return {
      success: false,
      message: "Hubo un problema al conectar con el servidor",
    };
  }
};

export const solicitarIntervaloComics = async (startIndex, endIndex) => {
  try {
    const response = await fetch(`${API_URL}/comics/${startIndex}/${endIndex}`);

    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Error al solicitar el intervalo de cómics:", error);
    return {
      success: false,
      message: "Hubo un problema al conectar con el servidor",
    };
  }
};
