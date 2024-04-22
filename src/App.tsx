import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cards from './components/Cards';
import Learn from './pages/Learn';
import MultipleChoice from './components/MultipleChoice';
import Setting from './pages/Setting';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Cards />,
	},
	{
		path: '/learn',
		element: <Learn />,
	},
	{
		path: '/learn/multiple-choice',
		element: <MultipleChoice />,
	},
	{
		path: '/learn/multiple-choice/settings',
		element: <Setting />,
	},
]);

function App() {
	return (
		<div className='w-full'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
