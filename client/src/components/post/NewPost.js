import React, { Fragment, useState } from 'react';
import {
  Container,
  Form,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    cover: ''
  });
  const [value, setValue] = useState('**Hello world!!!**');
  const [selectedTab, setSelectedTab] = useState('write');

  const { title, subtitle, cover } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <Container className="min-vh-100 py-5 mh-100" fluid={false}>
        <Form className="mt-4">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="title"
              value={title}
              onChange={e => onChange(e)}
              type="text"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Subtitle</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="subtitle"
              value={subtitle}
              onChange={e => onChange(e)}
              type="text"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Cover</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="cover"
              value={cover}
              onChange={e => onChange(e)}
              type="text"
            />
          </InputGroup>
          <ReactMde
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
          <div className="text-right">
            <Button className="mt-3" variant="primary" type="submit">
              Share
            </Button>
          </div>
        </Form>
      </Container>
    </Fragment>
  );
};

export default NewPost;
