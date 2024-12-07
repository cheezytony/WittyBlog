import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const EditBlogPostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Updated Title:', title);
    console.log('Updated Content:', content);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Edit the title of the blog post"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel htmlFor="content">Content</FormLabel>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Edit the content of the blog post"
        />
      </FormControl>

      <Button mt={4} colorScheme="blue" onClick={handleSubmit}>
        Update
      </Button>
    </Box>
  );
};

export default EditBlogPostPage;
