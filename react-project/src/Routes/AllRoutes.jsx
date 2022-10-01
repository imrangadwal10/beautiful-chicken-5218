import {Route,Routes} from "react-router-dom"
import Health from "../Pages/HealthPage";
import Home from "../Pages/Home";
function AllRoutes(){
  return   <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/health" element={<Health/>}></Route>
    </Routes>
}
export default AllRoutes;