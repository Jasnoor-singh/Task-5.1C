import React, { useState } from 'react';
import { Form, Segment, Radio, Header, Button, TextArea, Input } from 'semantic-ui-react';

const PostPage = () => {
  const [postType, setPostType] = useState('article');

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
  };

  return (
    <Segment>
      <Segment > 
        <Header as="h2" style={{ backgroundColor: '#d3d3d3', padding: '10px' }}>New Post</Header>
        <Form>
          <Form.Field style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Select Post Type:</label>
            <Radio
              label='Question'
              name='postType'
              value='question'
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
              style={{ marginRight: '20px' }}
            />
            <Radio
              label='Article'
              name='postType'
              value='article'
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
          </Form.Field>
        </Form>
      </Segment>

      {/* Conditional Rendering Based on Post Type */}
      {postType === 'question' && (
        <Segment> 
          <Header as="h3" style={{ backgroundColor: '#d3d3d3', padding: '10px' }}>What do you want to ask or share</Header>
          <p>This section is designed based on the type of the post.</p>
          <Form>
            <Form.Field>
              <label>Title</label>
              <Input placeholder='Start your question with how, what, why, etc.' />
            </Form.Field>

            <Form.Field>
              <label>Describe your problem</label>
              <TextArea placeholder='Describe your problem' />
            </Form.Field>

            <Form.Field>
              <label>Tags</label>
              <Input placeholder='Please add up to 3 tags to describe what your question is about e.g., Java' />
            </Form.Field>

            <Button primary type='submit'>Post</Button>
          </Form>
        </Segment>
      )}

      {postType === 'article' && (
        <Segment> {/* Background for What do you want to ask or share */}
          <Header as="h3" style={{ backgroundColor: '#d3d3d3', padding: '10px' }}>What do you want to ask or share</Header>
          <p>This section is designed based on the type of the post.</p>
          <Form>
            <Form.Field>
              <label>Title</label>
              <Input placeholder='Enter a descriptive title' />
            </Form.Field>

            <Form.Field>
              <label>Abstract</label>
              <TextArea placeholder='Enter a 1-paragraph abstract' />
            </Form.Field>

            <Form.Field>
              <label>Article Text</label>
              <TextArea placeholder='Enter a 1-paragraph abstract' />
            </Form.Field>

            <Form.Field>
              <label>Tags</label>
              <Input placeholder='Please add up to 3 tags to describe what your article is about e.g., Java' />
            </Form.Field>

            <Button primary type='submit'>Post</Button>
          </Form>
        </Segment>
      )}
    </Segment>
  );
};

export default PostPage;
