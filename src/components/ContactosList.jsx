import React, { useState } from "react";
import { View} from "react-native";
import contactos from "../jsons/contactos.json";

import styles from '../styles/style-contactos.jsx';
import { ContactCard } from "./ContactosCard.jsx";


const ContactosList = () => {
    // Estado para controlar el volteo de cada tarjeta
    //tarjetasVolteadas es un objeto donde cada clave es un índice de tarjeta, con un valor (true/false).
    //o sea, si está volteada o no
    //setTarjetasVolteadas actualiza el estado
    //empieza vacio, por default ninguna tarjeta está volteada
    const [tarjetasVolteadas, setTarjetasVolteadas] = useState({});

    //voltearTarjeta: lo que hace es invertir el estado de volteo de una tarjeta específica.
    const voltearTarjeta = (index) => {
        //por una función que toma el estado anterior 
        setTarjetasVolteadas((prevState) => ({
            ...prevState, //copia el estado actual
            [index]: !prevState[index], // Si está volteada, desvoltearla y viceversa, lo actualiza (true a false o viceversa)
        }));
    };

    return (
        //contenedor de las tarjetas de contactos. 
        <View style={styles.container}>
            {contactos.map((contacto, index) => (
               <ContactCard  //Renderiza este componente para cada tarjeta
                    key={index}
                    contacto={contacto}
                    index={index}
                    tarjetasVolteadas={tarjetasVolteadas}
                    voltearTarjeta={voltearTarjeta} 
               />
            ))}
        </View>
    );
};

export default ContactosList; //Exportación
