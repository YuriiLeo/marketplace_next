import products from '../../products.json';

export default function handler(req, res) {
	const { page = 1, limit = 12 } = req.query;
	const start = (page - 1) * limit;
	const end = start + parseInt(limit);

	res.status(200).json({
		data: products.slice(start, end),
		total: products.length,
		page: parseInt(page),
		limit: parseInt(limit),
	});
}
