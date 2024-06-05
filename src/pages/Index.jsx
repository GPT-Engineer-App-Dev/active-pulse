import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [steps, setSteps] = useState(0);

  const handleAddSteps = () => {
    setSteps(steps + 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Fitness Tracker</Heading>
        <Text fontSize="xl">Track your daily steps and stay healthy!</Text>
        <Box boxSize="200px">
          <Image src="/images/fitness-tracker.png" alt="Fitness Tracker" />
        </Box>
        <Text fontSize="2xl">Steps: {steps}</Text>
        <Button colorScheme="teal" size="lg" onClick={handleAddSteps}>Add 1000 Steps</Button>
        <Button as={Link} to="/log-workout" colorScheme="teal" size="lg">Log Workout</Button>
      </VStack>
    </Container>
  );
};

export default Index;