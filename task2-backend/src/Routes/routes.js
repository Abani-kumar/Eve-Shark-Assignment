// src/routes/users.js
import express from "express";

const router = express.Router();

let users = [];

// Get all users
router.get("/users", (req, res) => {
  try {
    if (users.length === 0) {
      return res
        .status(402)
        .json({ success: false, message: "Users not found" });
    }
    return res.status(201).json({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// Add a new user
router.post("/users", (req, res) => {
  try {
    const user = req.body;
    if (!user.name) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });
    }
    user.id = users.length + 1;
    users.push(user);
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Update an existing user
router.put("/users/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    return res
      .status(201)
      .json({ success: true, message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Delete a user
router.delete("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex === -1) {
      return res
        .status(402)
        .json({ success: false, message: "User not found" });
    }
    users.splice(userIndex, 1);
    res
      .status(202)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//get task for specific user

router.get("/users/:id/tasks", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }
    let tasks = user.tasks;
    if (!tasks) {
      return res.status(401).json({
        success: false,
        message: "There is no tasks",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// Add a new task for a specific user
router.post("/users/:id/tasks", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    const { title } = req.body;
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Task is required" });
    }
    user.tasks = user.tasks || [];
    let task = {};
    task.title = title;
    task.taskId = user.tasks.length + 1;
    task.completed = false;
    user.tasks.push(task);
    return res
      .status(201)
      .json({ success: true, message: "Task added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


// Update an existing task for a specific user
router.put("/users/:id/tasks/:taskId", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const taskId = parseInt(req.params.taskId);
    const user = users.find((user) => user.id === id);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }
    const taskIndex = user.tasks.findIndex((task) => task.taskId === taskId);
    if (taskIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }
    user.tasks[taskIndex] = { ...user.tasks[taskIndex], ...req.body };
    return res.json({ success: true, message: "task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete a task for a specific user
router.delete("/users/:id/tasks/:taskId", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const taskId = parseInt(req.params.taskId);
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const taskIndex = user.tasks.findIndex((task) => task.taskId === taskId);
    if (taskIndex === -1) {
      res.status(404).json({ success: false, message: "Task not found" });
    }
    user.tasks.splice(taskIndex, 1);
    return res
      .status(203)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
