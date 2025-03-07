const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

let userToken = ""; // Store token globally
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" , user});
    console.log(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    userToken = token;
    res.json({message: 'Login Successful', token });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

exports.getUsers = async (req, res) => {
    try {
      const users = await User.findAll();
  
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error: error.message });
    }
  };

  exports.getToken = () => userToken; // Function to retrieve token