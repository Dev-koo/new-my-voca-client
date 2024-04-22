import Header from './Header';
import Navbar from './Navbar';
import AppLayout from '../layouts/AppLayout';
import Main from '../layouts/Main';
import CardList from './CardList';
import data from '../data/cards.json';
import { CardType } from '../types';

export default function Cards() {
	return (
		<AppLayout>
			<Header />
			<Main>
				<CardList cards={data as CardType[]} />
			</Main>
			<Navbar />
		</AppLayout>
	);
}
