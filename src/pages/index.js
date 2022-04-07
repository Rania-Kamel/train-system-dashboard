import { Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../components/mainlayout";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from "./Home";
import Employee from "./Employee/Employee";
import AddEmployee from "./Employee/AddEmployee";
import OneEmployee from "./Employee/OneEmployee";
import EditEmployee from "./Employee/EditEmployee";


const PagesRoutes = () => {
  return (
    <StyledEngineProvider injectFirst>
      <PersistentDrawerRight>
        <Switch>
          <Route exact path="/" component={Home} />
     
          <Route exact path="/employee" component={Employee} />
          <Route path="/employee/add-employee" component={AddEmployee} />
          <Route path="/employee/edit/:id" component={EditEmployee} />
          <Route exact path="/employee/:id" component={OneEmployee} />

          
        </Switch>
      </PersistentDrawerRight>
    </StyledEngineProvider>
  );
};

export default PagesRoutes;
