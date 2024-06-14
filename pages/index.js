'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import ProductCard from '../components/ProductCard';
import Layout from './layout';
import productsData from '../products.json';

const Catalog = ({ initialData }) => {
	const [products, setProducts] = useState(initialData.data);
	const [total, setTotal] = useState(initialData.total);
	const [page, setPage] = useState(initialData.page);
	const [limit, setLimit] = useState(initialData.limit);

	const router = useRouter();

	useEffect(() => {
		const { page: queryPage } = router.query;
		if (queryPage && queryPage !== page.toString()) {
			const start = (queryPage - 1) * limit;
			const end = start + parseInt(limit);
			setProducts(productsData.slice(start, end));
			setTotal(productsData.length);
			setPage(parseInt(queryPage));
		}
	}, [router.query, page, limit]);

	const handlePageChange = (event, value) => {
		setPage(value);
		router.push(`/?page=${value}`, undefined, { shallow: true });
	};

	return (
		<Layout>
			<Head>
				<title>Product Catalog</title>
				<meta name="description" content="Browse our catalog of amazing products." />
			</Head>
			<Typography sx={{ my: '2rem', textAlign: 'center' }} variant="h4" component="h1" gutterBottom>
				Products Catalog
			</Typography>
			<Grid container spacing={4}>
				{products.map((product, i) => (
					<Grid
						item
						sx={{ display: 'flex', justifyContent: 'center' }}
						key={`${product.id}-${i}`}
						xs={12}
						sm={6}
						md={4}
					>
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							description={product.description}
							price={product.price}
						/>
					</Grid>
				))}
			</Grid>
			<Pagination
				sx={{ my: '4rem', display: 'flex', justifyContent: 'center' }}
				count={Math.ceil(total / limit)}
				page={page}
				onChange={handlePageChange}
				color="primary"
			/>
		</Layout>
	);
};

export async function getServerSideProps(context) {
	const { page = 1 } = context.query;
	const limit = 12;
	const start = (page - 1) * limit;
	const end = start + limit;

	return {
		props: {
			initialData: {
				data: productsData.slice(start, end),
				total: productsData.length,
				page: parseInt(page),
				limit: limit,
			},
		},
	};
}

export default Catalog;
