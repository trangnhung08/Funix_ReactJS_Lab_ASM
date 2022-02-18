import React from "react";
import { Card, CardText, CardTitle, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderStaff({ staff }) {
    if (staff != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3 mt-2 mb-2">
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                </div>
                <div className="col-12 col-md-8 col-lg-3 mt-2 mb-2">
                    <Card className="mt-4 cardDetail">
                        <CardTitle >Họ và tên: {staff.name}</CardTitle>
                        <CardText >Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText >Phòng ban: {staff.department.name}</CardText>
                        <CardText >Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText >Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </Card>
                </div>
            </div>

        );
    }
    else {
        return (
            <div></div>
        );
    }
}
const StaffDetail = (props) => {
    if (props.staff != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="ml-3">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/staff"></Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <hr/>
                    </div>
                </div>
                <RenderStaff staff={props.staff} />
            </div>
        );

    }
    else {
        return (
            <div></div>
        );
    }
}
export default StaffDetail;