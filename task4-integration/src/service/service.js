import { toast } from "react-hot-toast";
import axios from "axios";

export const createUsers = async (title) => {
  console.log(title)
  const toastId = toast.loading("Loading...");
  try {
    const user = await axios.post(process.env.REACT_APP_BASE_URL, title);
    console.log(user);
    toast.success("User created successfully");
    return user;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
};

export const getAllUsers = async () => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await axios.get(process.env.REACT_APP_BASE_URL+'/api/users');
    toast.success("User fetched successfully");
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    toast.error(
      "Failed to fetch users: " +
        (error.response?.data?.message || error.message)
    );
    return null; // or return an empty array: return [];
  } finally {
    toast.dismiss(toastId);
  }
};

export const updateExistingUser = async (id, title) => {
  const toastId = toast.loading("Loading...");
  try {
    const user = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/${id}`,
      title
    );
    console.log(user);
    toast.success("User updated successfully");
    return user;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
};

export const deleteUser = async (id) => {
  const toastId = toast.loading("Loading...");
  try {
    const user = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`);
    console.log(user);
    toast.success("User deleted successfully");
    return user;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
};

export const getTasks = async (id) => {
  const toastId = toast.loading("Loading...");
  try {
    const tasks = await axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`);
    console.log(tasks);
    toast.success("Task fetched successfully");
    return tasks;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
};

export const createTask = async (id, task) => {
  const toastId = toast.loading("Loading...");
  try {
    const tasks = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/${id}`,
      task
    );
    console.log(tasks);
    toast.success("Task created successfully");
    return tasks;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
};

export const updateTask = async (id, task) => {
  const toastId = toast.loading("Loading...");
  try {
    const tasks = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/${id}`,
      task
    );
    console.log(tasks);
    toast.success("Task updated successfully");
    return tasks;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
};

export const deleteTask = async (id, taskId) => {
  const toastId = toast.loading("Loading...");
  try {
    const tasks = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/${id}/${taskId}`
    );
    console.log(tasks);
    toast.success("Task deleted successfully");
    return tasks;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
};
