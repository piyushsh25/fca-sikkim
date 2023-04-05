import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreatePost() {
  return (
    <div className='create-post-form'>
    <h1>
      Creating new post
    </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content 1</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 1" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo 1</Form.Label>
          <Form.Control type="file" placeholder="photo 1" />
        </Form.Group>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content 2</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 2" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo 2</Form.Label>
          <Form.Control type="file" placeholder="photo 2" />
        </Form.Group>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content 3</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 3" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo 3</Form.Label>
          <Form.Control type="file" placeholder="photo 3" />
        </Form.Group>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content 4</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 4" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo 4</Form.Label>
          <Form.Control type="file" placeholder="photo 4" />
        </Form.Group>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content 5</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 5" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo 5</Form.Label>
          <Form.Control type="file" placeholder="photo 5" />
        </Form.Group>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content 6</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 6" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo 6</Form.Label>
          <Form.Control type="file" placeholder="photo 6" />
        </Form.Group>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content 7</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 7" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo 7</Form.Label>
          <Form.Control type="file" placeholder="photo 7" />
        </Form.Group>
      <hr/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreatePost;