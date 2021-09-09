import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import DataTable from 'components/DataTable';
import BarChart from 'components/BarChart';


function App() {
  return (
    <>
    <Navbar/>
    
    <div className="container">
    <h1 className="text-primary py-3">Painel de vendas</h1>

    <div className="row px-3">

      <BarChart/>


    </div>


    <DataTable/>

    </div>  

    <Footer/>
    </>
    );
}

export default App;
