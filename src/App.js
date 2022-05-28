import "./App.css";
import { FilteringTable } from "./components/FilteringTable";
import { BasicTable } from "./components/BasicTable";
import { PaginationTable } from "./components/PaginationTable";
import { PaginationFilteringTable } from "./components/PaginationFilteringTable";

function App() {
    return (
        <div className="App">
            {/* <BasicTable /> */}
            {/* <PaginationTable /> */}
            {/* <FilteringTable /> */}
            <PaginationFilteringTable />
        </div>
    );
}

export default App;
