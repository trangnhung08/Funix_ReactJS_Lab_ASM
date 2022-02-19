import React from "react";
import { Card, CardText, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderListStaff({ staff, onClick }) {
    return (
        <Card className="mt-1 mb-4">
            <Link to={`/staff/${staff.id}`}>
                <CardImg className="img-thumbnail" src={staff.image} alt={staff.name} />
                <CardText className="text-center nameStaff">{staff.name}</CardText>
            </Link>

        </Card>
    );
}

const Staffs = (props) => {
    const list = props.staffs.map((staff) => {
        return (
            <div className="col-6 col-md-4 col-lg-2" key={staff.id}>
                <RenderListStaff staff={staff} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="ml-3">
                    <Breadcrumb>
                        <BreadcrumbItem>Nhân Viên</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div>
            <div className="row">
                {list}
                <div className="col-12">
                    <hr  className="mt-1"/>
                </div>
            </div>
        </div>
    );
}

export default Staffs;