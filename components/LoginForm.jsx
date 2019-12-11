import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = useCallback(e => {
    e.preventDefault();
    console.log({ userId, password })
  }, [userId, password]);

  const onChangeInput = useCallback(e => {
    if (e.target.name === 'user-id') {
      setUserId(e.target.value);
    }
    else if (e.target.name === 'user-password') {
      setPassword(e.target.value);
    }
    else {

    }
  }, []);

  return (
    <Form onSubmit={onSubmit} style={{padding: '10px'}}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={userId} onChange={onChangeInput} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangeInput} required />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        <Link href="/signup"><a><Button>SignUp</Button></a></Link>
      </div>
    </Form>
  );
}

export default LoginForm;