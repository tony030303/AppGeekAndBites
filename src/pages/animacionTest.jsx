import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

export default function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated to ${count}`);

    return () => {
      console.log("Cleaning up...");
    };
  }, [count]); // Se ejecuta cuando `count` cambia

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me" />
    </View>
  );
}
