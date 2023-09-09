import { createContext, useState } from 'react';
import './App.css';
import EnhancedTable from './components/table/EnhancedTable';

// export const CreateOrderContext = createContext(null);
function App() {
	// const [currentOrderContext, setCurrentOrderContext] = useState();

	return (
		<>
			{/* <CreateOrderContext.Provider
				value={{ currentOrderContext, setCurrentOrderContext }}
			> */}
			<EnhancedTable />
			{/* </CreateOrderContext.Provider> */}
		</>
	);
}

export default App;
