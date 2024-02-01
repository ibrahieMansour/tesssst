
import Navbar1 from './Navbar1.jsx';

import PageFooter from './PageFooter.jsx';
import WorkBanner from './WorkPage/WorkBanner.jsx';
import "../Componants/css/work.css"
import OurWork from './WorkPage/OurWork.jsx';
import FeatureWork from './WorkPage/FeatureWork.jsx';
function WorkPage(){

    return (
        <>
     <Navbar1/>
    
     <WorkBanner/>
     <OurWork/>
     <FeatureWork/>
     <PageFooter/>
     </>
    )
}
export default WorkPage;