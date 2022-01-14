import React, { Component } from "react";
import { Card, CardText, CardTitle} from "reactstrap";
import dateFormat from "dateformat";

class Staffs extends Component {

    constructor(props) {
        super(props);

        this.state = {
           selectedStaff: null,
        }
    }   
    onStaffSelect(staff){
        this.setState({selectedStaff: staff});
    }

    renderStaff(staff){
        if(staff != null) {
            return (
                <div className="col-12 col-md-5 col-lg-3 mt-2">
                    <CardTitle className="ml-2 text-primary">Thông Tin Nhân Viên </CardTitle>
                    <Card  color='info'>
                        <CardTitle className="ml-2 text-light">Họ và tên: {staff.name}</CardTitle>
                        <CardText className="ml-2 text-light">Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</CardText>
                        <CardText className="ml-2 text-light">Phòng ban: {staff.department.name}</CardText>
                        <CardText className="ml-2 text-light">Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText className="ml-2 text-light">Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </Card>
                </div>
                
            );
        }
        else {
            return (
                <di></di>
            );
        }
    }
    renderHeader() {
        if(this.state.selectedStaff === null) {
            return (
                <p className="col-12 col-md-6 col-lg-4 mt-2">Bấm vào tên nhân viên để xem thông tin.</p> 
            );
        }
        else {
            return (
                <di></di>
            );
        }

    }

    render() {
        const list = this.props.staffs.map((stff) => {
            return (
                <div key={stff.id} className="col-12 col-md-6 col-lg-3 mt-2">
                    <Card  onClick={() => this.onStaffSelect(stff)}>
                        <CardText className='text-primary'>{stff.name}</CardText>
                    </Card>
                   
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {list}
                    {this.renderHeader()}
                    
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}
export default Staffs;