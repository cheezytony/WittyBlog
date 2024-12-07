import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const LandingPage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Text fontSize="md" fontWeight="bold" mb={4}>
        WittyBlog
      </Text>
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Welcome to Our Platform
      </Text>
      <Text fontSize="lg" mb={6}>
        Explore our services and get started with your project today!
      </Text>
      <Button colorScheme="teal" size="lg" mb={4}>
        Get Started
      </Button>
    </Box>
  );
};

export default LandingPage;
