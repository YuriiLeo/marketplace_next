import products from '../../../products.json';

export default function handler(req, res) {
	const { id } = req.query;
	const product = products.find((p) => p.id === parseInt(id));

	if (!product) {
		res.status(404).json({ message: 'Product not found' });
		return;
	}

	res.status(200).json(product);
}
