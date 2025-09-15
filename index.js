const exprees = require('express');
const app = exprees();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});     
app.listen(PORT, () => {
    console.log('Server is running on port 4000');
})