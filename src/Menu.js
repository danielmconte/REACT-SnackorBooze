import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ victuals, title }) {
    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
            {`Menu of ${title}`}
            </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <ListGroup>
              {victuals.map(victual => (
                <Link to={`/${title}/${victual.id}`} key={victual.id}>
                  <ListGroupItem>{victual.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardBody>
          <form action={`/${title}/new`}>
          <button className="btn btn-light">{`Add to ${title}`}</button>
          </form>
        </Card>
      
      </section>
    );
  }
  
  export default Menu;
  