import React from 'react';
import { Form } from 'semantic-ui-react';

const ArticleForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Article Title</label>
        <input placeholder='Enter your article title' />
      </Form.Field>
      <Form.Field>
        <label>Article Content</label>
        <textarea placeholder='Enter your article content'></textarea>
      </Form.Field>
    </Form>
  );
};

export default ArticleForm;
