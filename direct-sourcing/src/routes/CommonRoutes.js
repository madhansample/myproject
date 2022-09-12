import { Route, Routes } from 'react-router-dom';
import RouteList from './ComponentList'

const CommonRoutes = () => (
    <div>
        {console.log(RouteList)}
        <Routes>
            {
                RouteList.map((route, index) => (
                    <Route key={index} exact={route.isExact} path={route.path} element={route.name} />
                ))
            }
        </Routes>
    </div>
)

export default CommonRoutes;