import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {

    const data = [
        {name: 'John Smith', salary: 1300, increase: false},
        {name: 'Alex Adams', salary: 1500, increase: true},
        {name: 'Vasia Pupkin', salary: 800, increase: false},
        {name: 'Sarah Conor', salary: 1700, increase: true}
    ];

    return (
        <div className="app">
            <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

            <EmployersList data={data}/>

            <EmployersAddForm/>

        </div>
    );
}

export default App;