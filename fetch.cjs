const https = require('https');
const urls = [
  'https://ibb.co/d0DH2rMN'
];

async function fetchLinks() {
  for (const url of urls) {
    await new Promise((resolve) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const match = data.match(/<meta property="og:image" content="(.*?)"/);
          console.log(match ? match[1] : 'Not found');
          resolve();
        });
      });
    });
  }
}
fetchLinks();


