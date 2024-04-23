
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Route for login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Sign in user with email and password
    await firebase.auth().signInWithEmailAndPassword(email, password);

    // Redirect to dashboard or send success response
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Route for signup
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create user with email and password
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    // Redirect to login page or send success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
