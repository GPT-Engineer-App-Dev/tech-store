import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding="1.5rem" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <InputGroup width="300px" marginRight="24px">
          <Input
            placeholder="Search for products"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <InputRightElement children={<SearchIcon color="gray.300" />} />
        </InputGroup>
        <HStack spacing="24px">
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" padding="3rem" textAlign="center">
        <Heading size="2xl" mb="4">Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb="4">Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Container maxW="container.xl" py="4rem">
        <Heading size="lg" mb="6" textAlign="center">Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 1" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" fontSize="xl">Product 1</Text>
                </Box>
                <Text mt="2">$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 2" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" fontSize="xl">Product 2</Text>
                </Box>
                <Text mt="2">$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 3" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" fontSize="xl">Product 3</Text>
                </Box>
                <Text mt="2">$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 4" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" fontSize="xl">Product 4</Text>
                </Box>
                <Text mt="2">$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py="3rem">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing="24px">
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
          <Flex justify="center" mt="4">
            <Link href="#" mx="2">Privacy Policy</Link>
            <Link href="#" mx="2">Terms of Service</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;