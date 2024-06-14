import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Link from 'next/link';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function ProductCard({
	id,
	name,
	price,
	description,
	image = '/default_photo.jpg',
}) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader title={name} subheader={`$ ${price}`} />
			<CardMedia
				component="img"
				height="194"
				image={`https://picsum.photos/300/150?random=${id}`}
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
				<Rating sx={{ mt: '8px' }} name="size-small" defaultValue={4} size="small" readOnly />
			</CardContent>
			<CardActions disableSpacing>
				<Link href={`/product/${id}`} passHref>
					<Button size="small" color="primary">
						Details
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
