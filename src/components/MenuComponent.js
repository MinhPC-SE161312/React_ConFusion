import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// class Menu extends Component {

//     constructor(props) {
//         super(props);

//     }

//     render(){
//         const menu = this.props.dishes.map((dish) =>{
//             return(
//                 <div className="col-12 col-md-5 m-1">
//                     <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });

//         return(
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//             </div>
//         );
//     }
// }

function RenderMenuItem({ dish, onClick }) {
    return (
        // <Card onClick={() => onClick(dish.id)}>
        // <CardImg width="100%" src={dish.image} alt={dish.name} />
        // <CardImgOverlay>
        //     <CardTitle>{dish.name}</CardTitle>
        // </CardImgOverlay>
        // </Card>  
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

// const Menu = (props) => {
//     const menu = props.dishes.map((dish) => {
//         return (
//             <div className="col-12 col-md-5 m-1" key={dish.id}>
//                 <RenderMenuItem dish={dish} onClick={props.onClick} />
//             </div>
//         );
//     });

//     return (
//         <div className="container">
//             <div className="row">
//                 {menu}
//             </div>
//         </div>
//     )
// }

class Menu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <div key={dish.id}>
                        <RenderMenuItem dish={dish} />
                    </div>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );

    }    
    
}

export default Menu;

