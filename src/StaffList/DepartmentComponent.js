import React from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderDepartment({ department }) {
    return (
        <Card className="mt-2 mb-3 bg-light">
            <CardTitle>{department.name}</CardTitle>
            <CardText className="ml-5 mt-2 mb-4">Số lượng nhân viên: {department.numberOfStaff}</CardText>
        </Card>
    );
}
const Department = (props) => {
    const depart = props.departments.map((departs) => {
        return (
            <div className="col-12 col-md-6 col-lg-4" key={departs.id}>
                <RenderDepartment department={departs} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="ml-3">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staff">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <hr  className="mt-1"/>
                </div>
            </div>
            <div className="row">
                {depart}
                <div className="col-12">
                    <hr  className="mt-1"/>
                </div>
            </div>
        </div>
    );
}

export default Department;

