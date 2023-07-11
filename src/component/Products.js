import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
function Products({ data }) {
  // console.log(data)s
  const dispatch = useDispatch();
  const data2 = useSelector((state) => state.cart);
  const handlechnage = (e) => {
    // console.log(e)
    dispatch(add(e));
  };

  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {data.map((e, i) => {
          return (
            <Col key={i}>
              <Card
                style={{
                  margin: 10,
                  height: 280,
                  //   width: 250,
                  marginTop: 20,
                  overflowX: "hidden",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <Card.Img
                  style={{
                    width: 100,
                    height: 100,
                    alignSelf: "center",
                    marginTop: 15,
                  }}
                  variant="top"
                  src={e.image}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15 }}>
                    {e.title.split(" ").slice(0, 4).join(" ")}
                  </Card.Title>
                  <Card.Text>{e.price}</Card.Text>
                  <Button
                    onClick={() => {
                      handlechnage(e);
                    }}
                    variant="outline-secondary"
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Products;
