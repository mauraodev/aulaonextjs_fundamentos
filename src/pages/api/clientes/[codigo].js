export default function handler(req, res) {
  const codigo =  req.query.codigo;

  res.status(200).json({
    id: codigo,
    name: `Maria ${codigo}`,
    email: `maria${codigo}@teste.com`,
  });
}
