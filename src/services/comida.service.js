import API_URL from "../config"; //CAMBIAR IP LOCAL SEGUN QUIEN UTILICE

//conexión a API

//AGREGAR COMIDA

export const agregarComida = async (nombre, descri, cover) => {
  const formData = new FormData();
  formData.append("accion", "comidas"); //se pasa en el formato para la busqueda de la carpeta en la que se guardara la imagen
  formData.append("title", nombre);
  formData.append("year", descri);
  formData.append("cover", {
    uri: cover,
    type: "image/jpeg", // Ajusta el tipo según el formato
    name: "comida_cover.jpg",
  });

  try {
    const response = await fetch(`${API_URL}/comidas`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: "Comida agregada correctamente!" };
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

//ELIMINAR COMIDA
export const eliminarComida = async (nombre) => {
  try {
    const response = await fetch(`${API_URL}/comidas/${nombre}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: "Comida eliminada correctamente!" };
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

//MODIFICAR COMIDA

export const modificarComida = async (nombre, descri) => {
  try {
    const response = await fetch(`${API_URL}/comidas/${nombre}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ descri }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: "Comida actualizada correctamente!" };
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
