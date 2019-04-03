import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaVk, FaInstagram } from "react-icons/fa";
import { MdPhoneForwarded } from "react-icons/md";

import { capitalizeFirstLetter } from "./ShopInList";

const shop = props => {
  const {
    number,
    title,
    description,
    keywords,
    phone,
    vk,
    instagram,
    website,
    route
  } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <p>Павильон № {number}</p>
          <p>{capitalizeFirstLetter(title)}</p>
        </Card.Title>
        {description && description !== "-" ? (
          <Card.Text>{description}</Card.Text>
        ) : null}
        {keywords && keywords !== "-" ? (
          <Card.Text>Ключевые слова: {keywords}</Card.Text>
        ) : null}
        {phone && phone !== "-" ? (
          <>
            <p>Телефон: {phone}</p>
            <Button href={`tel:${phone}`} variant="success">
              <MdPhoneForwarded /> Позвонить
            </Button>
          </>
        ) : null}
        {vk && vk !== "-" ? (
          <Card.Text>
            <Button href={vk} variant="link">
              <FaVk /> Вконтакте
            </Button>
          </Card.Text>
        ) : null}
        {instagram && instagram !== "-" ? (
          <Card.Text>
            <Button variant="link" href={instagram}>
              <FaInstagram /> Instagram
            </Button>
          </Card.Text>
        ) : null}
        {website && website !== "-" ? (
          <Card.Text>
            <Button href={website} variant="link">
              Cайт
            </Button>
          </Card.Text>
        ) : null}
        {route && route !== "-" ? (
          <Card.Text>Как пройти: {route}</Card.Text>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default shop;
