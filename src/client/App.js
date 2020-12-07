import React from "react";
import './app.css';
import { Input, Button, Form, FormGroup, Label, Alert } from 'reactstrap';
import useSubmitHook from './useSubmitHook';
import blocks from './components';

const capitalizeFirstLetter = (name) => {
  const firstLetter = name.charAt(0).toUpperCase();
  return `${firstLetter}${name.substring(1)}`;
};

export default function App() {
  const { handleSubmit, onChange, error, blockData, input } = useSubmitHook();
  return (
    <div className="wrapper">
      <div className="container">
        <Form>
          <FormGroup>
            <Label for="exampleText">Enter your JSON</Label>
            <Input
              value={input}
              type="textarea"
              name="text"
              id="exampleText"
              onChange={onChange}
            />
          </FormGroup>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
        {error && (
          <Alert color="danger" className="error">
            {error}
          </Alert>
        )}
      </div>
      <div className="container">
        <div className='header'>Your landing page</div>
        <div className="landingContainer">
          {blockData.slice(0, 4).map((item, i) => {
            const blockName = capitalizeFirstLetter(item.type);
            const Block = item.type && blocks[blockName];
            return Block && <Block {...item} key={`${item.type}${item.title}${i}`} />;
          })}
        </div>
      </div>
    </div>
  );
}
