import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, cantFind }) {
  const { id } = useParams();

  let victual = items.find(victual => victual.id === id);
  if (!victual) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {victual.name}
          </CardTitle>
          <CardText className="font-italic">{victual.description}</CardText>
          <p>
            <b>Recipe:</b> {victual.recipe}
          </p>
          <p>
            <b>Serve:</b> {victual.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;