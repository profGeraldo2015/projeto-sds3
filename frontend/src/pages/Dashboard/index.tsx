

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import DataTable from 'components/DataTable';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';


function Dashboard() {
    return (
        <>
        <Navbar/>
        
        <div className="container">
        <h1 className="text-primary py-3">Painel de vendas</h1>

        <div className="row px-3">
        <div className="col-sm-6">
        <h5 className="text-center text-primary">Taxa de sucesso</h5>
        <BarChart/>  
        </div>
        <div className="col-sm-6">
        <h5 className="text-center text-primary">Por vendedor</h5>
        <DonutChart/>  
        </div>
        


        </div>


        <DataTable/>

        </div>  

        <Footer/>
        </>
        );        
}

export default Dashboard;


