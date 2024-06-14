import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp(props) {
	const { Component, pageProps } = props;

	return (
		<AppRouterCacheProvider {...props}>
			<Head>
				<title>Create Market App. Created to perform a test task from Anyhr.io</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}

export default MyApp;
