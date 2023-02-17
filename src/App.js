import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from 'src/routers/routers';
import DefaultLayout from 'src/layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
//Page được coi là children của layout  đưa vào phần content
// <Fragment></Fragment> thẻ ni chỉ để chứa thôi và nó không sinh ra thẻ thật trong DOM
//  nếu page mới chỉ có header và upload thì có thể import trực tiếp header vào upload
