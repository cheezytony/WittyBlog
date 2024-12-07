'use client';

import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button, VStack, Spinner } from "@chakra-ui/react";
import { Link } from "next/link";

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  description: string;
}

const BlogListPage: React.FC = () => {
  // State for blog posts and loading state
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate fetching blog posts from an API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Simulated API response
        const response = [
          {
            id: "1",
            title: "How to use Chakra UI",
            description: "Learn how to integrate Chakra UI with React.",
          },
          {
            id: "2",
            title: "React Router for Beginners",
            description: "A complete guide to using React Router in your app.",
          },
          {
            id: "3",
            title: "TypeScript with React",
            description: "Why you should use TypeScript in your React projects.",
          },
        ];

        setBlogPosts(response);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box maxW="3xl" mx="auto" p={4}>
      <Heading as="h1" size="2xl" mb={6}>
        Blog Posts
      </Heading>
      <VStack spacing={4} align="start">
        {blogPosts.map((post) => (
          <Box key={post.id} w="100%" borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
            <Heading as="h2" size="lg" mb={2}>
              {post.title}
            </Heading>
            <Text fontSize="md" mb={4}>
              {post.description}
            </Text>
            <Button as={Link} to={`/blog/${post.id}`} colorScheme="blue">
              Read More
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default BlogListPage;
