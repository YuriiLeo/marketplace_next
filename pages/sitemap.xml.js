import fs from 'fs';

function generateSiteMap(products) {
	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${`http://localhost:3000`}</loc>
      </url>
      ${products
				.map(({ id }) => {
					return `
        <url>
            <loc>${`/product/${id}`}</loc>
        </url>
      `;
				})
				.join('')}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
	const productsData = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));
	const sitemap = generateSiteMap(productsData);

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default function Sitemap() {
	return null;
}
