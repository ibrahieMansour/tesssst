import MyCro from './HomePage/MyCro.jsx';
import Services from './HomePage/Services.jsx';
import Navbar1 from './Navbar1.jsx';
import RecentWork from './HomePage/RecentWork.jsx';
import PageFooter from './PageFooter.jsx';

function HomePage(){

    return (
        <>
     <Navbar1/>
     <MyCro />
     <Services/>
     <RecentWork />
     <PageFooter/>
     </>
    )
}
export default HomePage;