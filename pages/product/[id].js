import axios from 'axios';
import { Card, Box, CardMedia, CardContent, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@emotion/react';
import Head from 'next/head';
import Layout from '../layout';
import Link from 'next/link';
import productsData from '../../products.json';

const Product = ({ product }) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Layout>
			<Head>
				<title>{product.name}</title>
				<meta name="description" content={product.description} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org/',
							'@type': 'Product',
							name: product.name,
							description: product.description,
						}),
					}}
				/>
			</Head>
			<Box sx={{ p: '2rem' }}>
				<Link component="button" variant="body2" href="/">
					Go Home
				</Link>
			</Box>
			<Card
				sx={{
					display: 'flex',
					flexDirection: isSmallScreen ? 'column' : 'row',
					p: '1rem',
					borderRadius: '1rem',
				}}
			>
				<Box
					sx={{
						width: isSmallScreen ? '100%' : '50%',
					}}
				>
					<CardMedia
						component="img"
						sx={{ height: '100%' }}
						image={`https://picsum.photos/300/150?random=${product.id}`}
						alt="Product Image"
					/>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{product.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{product.description}
						</Typography>
						<Typography variant="h6" component="p">
							Price: ${product.price}
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</Layout>
	);
};

export async function getStaticPaths() {
	const paths = productsData.map((product) => ({
		params: { id: product.id.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const product = productsData.find((p) => p.id.toString() === params.id);

	return { props: { product } };
}

export default Product;
