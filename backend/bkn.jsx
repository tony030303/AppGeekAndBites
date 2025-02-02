import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Obtener todas las tareas
  const fetchTasks = async () => {
    try {
      const response = await fetch("https://tublackend.com/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error obteniendo tareas:", error);
    }
  };

  // Crear una nueva tarea
  const handleCreateTask = async () => {
    try {
      const response = await fetch("https://tublackend.com/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTask }),
      });
      const result = await response.json();
      console.log("Tarea creada:", result);
      fetchTasks(); // Actualizar la lista de tareas
    } catch (error) {
      console.error("Error creando la tarea:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View>
      <Text>Lista de Tareas:</Text>
      {tasks.map((task) => (
        <Text key={task.id}>{task.title}</Text>
      ))}
      <TextInput
        placeholder="Nueva tarea"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Crear Tarea" onPress={handleCreateTask} />
    </View>
  );
};

export default TaskApp;
