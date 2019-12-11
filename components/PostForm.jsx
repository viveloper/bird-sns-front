import { Form, Input, Button } from 'antd';

const dummy = {
  imagePaths: [],
}

const PostForm = () => {
  return (
    <Form encType="multipart/form-data" style={{ margin: '10px 0 20px' }}>
      <Input.TextArea maxLength={140} placeholder="What's funny?" />
      <div>
        <input type="file" multiple hidden />
        <Button>Upload Image</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">Twitter</Button>
      </div>
      <div>
        {dummy.imagePaths.map((imgPath, index) => {
          return (
            <div key={imgPath} style={{ display: 'inline-block' }}>
              <img src={'http://localhost:3065/' + imgPath} alt={imgPath} style={{ width: '200px' }} />
              <div>
                <Button>Remove</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
}

export default PostForm;