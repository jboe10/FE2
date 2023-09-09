import { createContext, useState } from 'react';
import './App.css';
import EnhancedTable from './components/table/EnhancedTable';
import EnhancedTableDropDownFilter from './components/DropDown';
import EnhancedTableSearch from './components/table/TableSearch';
import { createTheme, ThemeProvider } from '@mui/material';

export const CreateOrderContext = createContext(null);
function App() {
	const [currentOrderContext, setCurrentOrderContext] = useState();
	const theme = createTheme({
		direction: 'rtl',
	});
	return (
		<>
			{/* <ThemeProvider theme={theme}> */}
			<CreateOrderContext.Provider
				value={{ currentOrderContext, setCurrentOrderContext }}
			>
				<EnhancedTable />
			</CreateOrderContext.Provider>
			{/* </ThemeProvider> */}
		</>
	);
}

export default App;
