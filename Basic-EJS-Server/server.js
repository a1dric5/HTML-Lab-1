//Create an Express.js server that listens on a specific port (e.g., 3000).
const express = require('express');
const app = express();
const port = 3000;

//Configure your server to use the EJS view engine and set the views directory.
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', __dirname + '/views');

// Data for dynamic content
const pages = [
    { route: '/', title: 'Home', content: 'Welcome to the homepage!' },
    { route: '/about', title: 'About', content: 'Learn more about us.' },
    { route: '/contact', title: 'Contact', content: 'Get in touch with us.' }
];

// Route handlers
app.get('/', (req, res) => {
    res.render('home', { page: pages[0] });
});

app.get('/about', (req, res) => {
    res.render('about', { page: pages[1] });
});

app.get('/contact', (req, res) => {
    res.render('contact', { page: pages[2] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
