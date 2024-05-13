import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import {
  Box,
  Heading,
  Stack,
  Text,
  Button,
  Card,
  CardBody,
  Image,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
export const CartCard = ({ item }) => {
  const [ratingArr, setRatingArr] = useState(new Array(5).fill(0));

  console.log({ ratingArr });
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      p={"10px"}
    >
      <VStack>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={item.image}
          alt={item.title}
        />

        <Box display={"flex"} gap={"10px"}>
          <Button disabled>{"-"}</Button>
          <Button>1</Button>
          <Button>{"+"}</Button>
        </Box>
      </VStack>
      <Stack textAlign={"start"}>
        <CardBody>
          <Heading size="md">{item.title}</Heading>
          <Text py="2">{item.description}</Text>
          <Text py="2">${item.price}</Text>
          <Text py="2" className="flex items-center">
            {ratingArr.map((rated, index) =>
              index + 1 <= item.rating ? (
                <FaStar className="text-green-700" />
              ) : (
                <FaRegStar className="text-green-300" />
              )
            )}{" "}
            <span className="ml-2">{item.rating?.count} People</span>
          </Text>
        </CardBody>

        <CardFooter>
          <Button mr={"5px"} variant="solid" colorScheme="blue">
            SAVE FOR LATER
          </Button>
          <Button ml={"5px"} variant="solid" colorScheme="blue">
            REMOVE
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
