import express from 'express';

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '1337';

app.get('/', (req, res) => res.end('Hell, no Kitty!'));

app.listen(port, host, (err) => {
	if (err) console.log('Shit gaat slecht bruh!');
	console.log('Server started %s:%d', host, port);
});