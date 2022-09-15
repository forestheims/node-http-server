export default async function parse(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (data) => (body += data));
    req.on('end', () => {
      resolve(body == '' ? undefined : JSON.parse(body));
    });
    req.on('error', reject);
  });
}
