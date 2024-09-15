import React from 'react';
import { Form } from 'semantic-ui-react';

const QuestionForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Question Title</label>
        <input placeholder='Enter your question title' />
      </Form.Field>
      <Form.Field>
        <label>Question Details</label>
        <textarea placeholder='Enter your question details'></textarea>
      </Form.Field>
    </Form>
  );
};

export default QuestionForm;
