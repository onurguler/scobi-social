import React, { Fragment, useState } from 'react';
import {
  Container,
  Form,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const NewPost = () => {
  const [formData, setFormData] = useState({
    cover: '',
    text: EditorState.createEmpty()
  });

  const { cover, text } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <Container className="min-vh-100" fluid={false}>
        <Form className="mt-4">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Subtitle</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" />
          </InputGroup>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Cover</span>
            </div>
            <div class="custom-file">
              <input
                name="cover"
                value={cover}
                onChange={e => onChange(e)}
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
              />

              <label class="custom-file-label" for="inputGroupFile01">
                {cover === '' ? 'Choose Image' : cover}
              </label>
            </div>
          </div>
          <Editor
            editorState={text}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={editorState =>
              setFormData({ ...formData, text: editorState })
            }
            toolbar={{
              image: { uploadEnabled: true }
            }}
          />
          <Button className="float-right mt-3" variant="primary" type="submit">
            Share
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default NewPost;
