import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<div className='flex items-center justify-center h-screen text-5xl font-medium'>
				Hello World
			</div>
		</div>
	);
};

export default Home;
