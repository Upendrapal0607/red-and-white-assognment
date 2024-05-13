import React, { useContext } from "react";

import {
  Heading,
  Stack,
  Text,
  Button,
  Card,
  CardBody,
  Image,
  CardFooter,
  ButtonGroup,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { CartContext } from "../ContextApi/ProductContext";

export const ProductCard = ({ item }) => {
  const toast = useToast();
  const { cartProduct, setCartProduct } = useContext(CartContext);
  console.log(item._id);
  const handleClickAddCart = () => {
    if (cartProduct.find((cartItem) => cartItem._id === item._id)) {
      toast({
        title: "Product Added Alert",
        description: "Product already added in cart",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    } else {
      setCartProduct((prev) => [...prev, item]);
      toast({
        title: "Product Added Alert",
        description: "Product Added successfully into cart",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Card maxW="100%" textAlign="left">
      <CardBody>
        <Image
          maxW="100%"
          src={item.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.title}</Heading>
          <Text>{item.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={handleClickAddCart}
          >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
