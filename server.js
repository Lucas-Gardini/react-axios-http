const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
	// Configuração do header CORS
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	if (req.method === 'OPTIONS') {
		res.writeHead(204); // Responde a requisições OPTIONS sem corpo
		res.end();
		return;
	}

	if (req.method === 'GET' && req.url === '/') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello, world!');
	} else if (req.method === 'POST' && req.url === '/data') {
		let body = '';

		// Coleta os dados enviados no corpo da requisição
		req.on('data', chunk => {
			body += chunk.toString(); // Concatena os pedaços recebidos
		});

		req.on('end', () => {
			try {
				const jsonData = JSON.parse(body); // Converte o body para JSON

				// Salva o JSON em um arquivo chamado "cache.json"
				fs.writeFile('cache.json', JSON.stringify(jsonData, null, 2), (err) => {
					if (err) {
						res.statusCode = 500;
						res.setHeader('Content-Type', 'application/json');
						res.end(JSON.stringify({ error: 'Erro ao salvar os dados' }));
						return;
					}
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.end(JSON.stringify({ message: 'Dados salvos com sucesso' }));
				});
			} catch (error) {
				res.statusCode = 400;
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify({ error: 'JSON inválido' }));
			}
		});
	} else if (req.method === 'GET' && req.url === '/saved') {
		if (!fs.existsSync('cache.json')) {
			res.statusCode = 404;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({ error: 'Nenhum dado salvo' }));
			return;
		}

		// Lê o arquivo "cache.json" e retorna o conteúdo
		fs.readFile('cache.json', 'utf8', (err, data) => {
			if (err) {
				res.statusCode = 500;
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify({ error: 'Erro ao ler os dados' }));
				return;
			}
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.end(data);
		});
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Not Found');
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
