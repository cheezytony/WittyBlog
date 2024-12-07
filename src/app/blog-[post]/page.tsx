'use client'

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "next/link";

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the blog post ID from the URL
  return (
    <Box maxW="3xl" mx="auto" p={4}>
      <Heading as="h1" size="2xl" mb={6}>
        Blog Post {id}
      </Heading>
      <Text fontSize="xl" mb={4}>
        Here will be the detailed content of blog post {id}.
      </Text>
      <Text>
        This page will contain the full blog post for the blog post with the ID of {id}.
      </Text>
    </Box>
  );
};

export default BlogPostPage;
