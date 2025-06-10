import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BusinessList from "../components/BusinessList";
import App from "../App";
import BusinessDetails from "../components/BusinessDetails";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    {/* <Route path="error/*" element={<ErrorsPage />} /> */}
                    <Route path="/" element={<BusinessList />} />
                    <Route path="/business-details" element={<BusinessDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes };