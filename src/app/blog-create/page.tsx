import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading } from '@chakra-ui/react';

const CreateBlogPostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle blog post creation logic
    console.log('Blog post created:', { title, content });
  };

  return (
    <Box p={4} maxWidth="800px" margin="0 auto">
      <Heading as="h1" size="xl" mb={4}>
        Create a New Blog Post
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of your post"
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your content here..."
            required
          />
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Create Post
        </Button>
      </form>
    </Box>
  );
};

export default CreateBlogPostPage;
