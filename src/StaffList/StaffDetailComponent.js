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
                    <Card className="mt-3 mb-2 cardDetail">
                        <CardTitle >Họ và tên: {staff.name}</CardTitle>
                        <CardText ><b>Ngày sinh:</b> {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText ><b>Ngày vào công ty:</b> {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText ><b>Phòng ban:</b> {staff.department.name}</CardText>
                        <CardText ><b>Số ngày nghỉ còn lại:</b> {staff.annualLeave}</CardText>
                        <CardText ><b>Số ngày đã làm thêm:</b> {staff.overTime}</CardText>
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
                            <BreadcrumbItem><Link to="/staff">Nhân Viên</Link></BreadcrumbItem>
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