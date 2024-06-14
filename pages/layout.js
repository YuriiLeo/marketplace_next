import Container from '@mui/material/Container';
import ButtonAppBar from '../components/AppBar';

const Layout = ({ children }) => {
	return (
		<Container>
			<ButtonAppBar />
			<main>{children}</main>
		</Container>
	);
};

export default Layout;
