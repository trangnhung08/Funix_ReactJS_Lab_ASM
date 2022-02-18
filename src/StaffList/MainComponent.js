import { STAFFS } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/staffs';
import { Component } from 'react';
import StaffDetail from "./StaffDetailComponent";
import Staffs from './StaffListComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            deparments: DEPARTMENTS,
        };
    }
    
    render() {
        const HomePage = () => {
            return(
                <Staffs staffs = {this.state.staffs} />
            );
        }

        const STAFFSID = ({match}) => {
            return(
                <StaffDetail staff = {this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
            );
        }
        const DEPARTMENT = () => {
            return(
                <Department departments = {this.state.deparments} />
            );
        }

        const SALARY = () => {
            return(
                <Salary staffs = {this.state.staffs}/>
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/staff' component={HomePage} />
                    <Route path="/staff/:staffId" component={STAFFSID} />
                    <Route exact path='/department' component={DEPARTMENT}/>
                    <Route exact path='/salary' component={SALARY}/>
                    <Redirect to="/staff" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;