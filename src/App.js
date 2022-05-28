import "./App.css";
import { FilteringTable } from "./components/FilteringTable";
// import { BasicTable } from "./components/BasicTable";
// import { PaginationTable } from "./components/PaginationTable";

function App() {
    return (
        <div className="App">
            {/* <BasicTable /> */}
            {/* <PaginationTable /> */}
            <FilteringTable />
        </div>
    );
}

export default App;
