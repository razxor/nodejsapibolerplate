const exprees = require('express');
const app = exprees();

app.get('/', (req, res) => {
    res.send('Hello World!');
});     
app.listen(4000, () => {
    console.log('Server is running on port 4000');
})