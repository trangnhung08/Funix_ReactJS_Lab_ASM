import React from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderSalary({salary}){
    return(
        <Card className="mt-2 mb-2">
            <CardTitle>{salary.name}</CardTitle>
            <CardText className="ml-2">Mã nhân viên: {salary.id}</CardText>
            <CardText className="ml-2">Hệ số lương: {salary.salaryScale}</CardText>
            <CardText className="ml-2">Số giờ làm thêm: {salary.overTime}</CardText>
            <CardText className="ml-4 mr-4 cardSalary">Lương: {parseInt((salary.salaryScale * 3000000) + ((salary.overTime/8) * 200000))}</CardText>
        </Card>
    );
}

const Salary = (props) => {
    const salary = props.staffs.map((salary) => {
        return(
            <div className="col-12 col-md-6 col-lg-4" key={salary.id}>
                <RenderSalary salary={salary} onClick={props.onClick}/>
            </div>
        )
    });

    return(
        <div className="container">
            <div className="row">
                {salary}
            </div>
        </div>
    );
}
export default Salary;