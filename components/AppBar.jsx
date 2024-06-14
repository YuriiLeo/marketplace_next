import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function ButtonAppBar() {
	return (
		<AppBar sx={{ borderRadius: '0 0 16px 16px' }} position="sticky">
			<Toolbar>
				<Link href="/" passHref>
					<Button size="small" sx={{ color: '#FFFFFF' }}>
						Home
					</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
}
