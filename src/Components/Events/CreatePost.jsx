import { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createPostHandler, generateImg, imgReducerFunction, initialstate, poststate, reducerFunction } from './PostHelper';

import { useNavigate } from 'react-router-dom';
function CreatePost() {
  const [state, dispatch] = useReducer(reducerFunction, poststate)

  const [imgState, imgDispatch] = useReducer(imgReducerFunction, initialstate)
  const navigate=useNavigate()

  return (
    <div className='create-post-form'>
      <h1>
        Creating new post
      </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Header 1</Form.Label>
          <Form.Control type="text" placeholder="enter header for photo 1" value={state?.header1} onChange={(e) => dispatch({ type: "setHeader1", payload: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content 1</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 1" value={state?.description1} onChange={(e) => dispatch({ type: "setDescription1", payload: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo 1</Form.Label>
          <Form.Control type="file" placeholder="photo 1" data-img="img1" onChange={(e) => generateImg(e, dispatch, imgDispatch)} />
          <Form.Text className="text-muted">
            {imgState.img1 === "pending" ? "Uploading" : null}
            {imgState.img1 === "error" ? "Error uploading. Please retry" : null}
            {imgState.img1 === "success" ? "Upoad Success" : null}
          </Form.Text>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Header 2</Form.Label>
          <Form.Control type="text" placeholder="enter header for photo 1" value={state?.header2} onChange={(e) => dispatch({ type: "setHeader2", payload: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content 2</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 2" value={state?.description2} onChange={(e) => dispatch({ type: "setDescription2", payload: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo 2</Form.Label>
          <Form.Control type="file" placeholder="photo 2" data-img="img2" onChange={(e) => generateImg(e, dispatch, imgDispatch)} />
          <Form.Text className="text-muted">
            {imgState.img2 === "pending" ? "Uploading" : null}
            {imgState.img2 === "error" ? "Error uploading. Please retry" : null}
            {imgState.img2 === "success" ? "Upoad Success" : null}
          </Form.Text>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Header 3</Form.Label>
          <Form.Control type="text" placeholder="enter header for photo 3" value={state?.header3} onChange={(e) => dispatch({ type: "setHeader3", payload: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content 3</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 3" value={state?.description3} onChange={(e) => dispatch({ type: "setDescription3", payload: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo 3</Form.Label>
          <Form.Control type="file" placeholder="photo 3" data-img="img3" onChange={(e) => generateImg(e, dispatch, imgDispatch)} />
          <Form.Text className="text-muted">
            {imgState.img3 === "pending" ? "Uploading" : null}
            {imgState.img3 === "error" ? "Error uploading. Please retry" : null}
            {imgState.img3 === "success" ? "Upoad Success" : null}
          </Form.Text>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Header 4</Form.Label>
          <Form.Control type="text" placeholder="enter header for photo 4" value={state?.header4} onChange={(e) => dispatch({ type: "setHeader4", payload: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content 4</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 4" value={state?.description4} onChange={(e) => dispatch({ type: "setDescription4", payload: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo 4</Form.Label>
          <Form.Control type="file" placeholder="photo 4" data-img="img4" onChange={(e) => generateImg(e, dispatch, imgDispatch)} />
          <Form.Text className="text-muted">
            {imgState.img4 === "pending" ? "Uploading" : null}
            {imgState.img4 === "error" ? "Error uploading. Please retry" : null}
            {imgState.img4 === "success" ? "Upoad Success" : null}
          </Form.Text>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Header 5</Form.Label>
          <Form.Control type="text" placeholder="enter header for photo 5" value={state?.header5} onChange={(e) => dispatch({ type: "setHeader5", payload: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content 5</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 5" value={state?.description5} onChange={(e) => dispatch({ type: "setDescription5", payload: e.target.value })} />

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo 5</Form.Label>
          <Form.Control type="file" placeholder="photo 5" data-img="img5" onChange={(e) => generateImg(e, dispatch, imgDispatch)} />
          <Form.Text className="text-muted">
            {imgState.img5 === "pending" ? "Uploading" : null}
            {imgState.img5 === "error" ? "Error uploading. Please retry" : null}
            {imgState.img5 === "success" ? "Upoad Success" : null}
          </Form.Text>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Header 6</Form.Label>
          <Form.Control type="text" placeholder="enter header for photo 6" value={state?.header6} onChange={(e) => dispatch({ type: "setHeader6", payload: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content 6</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 6" value={state?.description6} onChange={(e) => dispatch({ type: "setDescription6", payload: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo 6</Form.Label>
          <Form.Control type="file" placeholder="photo 6" data-img="img6" onChange={(e) => generateImg(e, dispatch, imgDispatch)} />
          <Form.Text className="text-muted">
            {imgState.img6 === "pending" ? "Uploading" : null}
            {imgState.img6 === "error" ? "Error uploading. Please retry" : null}
            {imgState.img6 === "success" ? "Upoad Success" : null}
          </Form.Text>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Header 7</Form.Label>
          <Form.Control type="text" placeholder="enter header for photo 1" value={state?.header7} onChange={(e) => dispatch({ type: "setHeader7", payload: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content 7</Form.Label>
          <Form.Control type="text" placeholder="enter content for photo 7" value={state?.description7} onChange={(e) => dispatch({ type: "setDescription7", payload: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo 7</Form.Label>
          <Form.Control type="file" placeholder="photo 7" data-img="img7" onChange={(e) => generateImg(e, dispatch, imgDispatch)} />
          <Form.Text className="text-muted">
            {imgState.img7 === "pending" ? "Uploading" : null}
            {imgState.img7 === "error" ? "Error uploading. Please retry" : null}
            {imgState.img7 === "success" ? "Upoad Success" : null}
          </Form.Text>
        </Form.Group>
        <hr />
        <Button variant="primary" type="submit" onClick={(e) => createPostHandler(e, state,navigate)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreatePost;