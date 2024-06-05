import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const LogWorkout = () => {
  const [workout, setWorkout] = useState({
    date: "",
    type: "",
    duration: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Workout logged:", workout);
    // Here you would typically send the workout data to a backend server or save it in local storage
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Log Workout</Heading>
        <FormControl id="date" isRequired>
          <FormLabel>Date</FormLabel>
          <Input type="date" name="date" value={workout.date} onChange={handleChange} />
        </FormControl>
        <FormControl id="type" isRequired>
          <FormLabel>Type of Exercise</FormLabel>
          <Input type="text" name="type" value={workout.type} onChange={handleChange} />
        </FormControl>
        <FormControl id="duration" isRequired>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" name="duration" value={workout.duration} onChange={handleChange} />
        </FormControl>
        <FormControl id="notes">
          <FormLabel>Additional Notes</FormLabel>
          <Textarea name="notes" value={workout.notes} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit">Log Workout</Button>
      </VStack>
    </Container>
  );
};

export default LogWorkout;