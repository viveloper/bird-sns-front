import { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout'
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id,
      nick,
      password,
      passwordConfirm,
      term
    });
  }

  const onChangeInput = e => {
    if (e.target.name === 'user-id') {
      setId(e.target.value);
    }
    else if (e.target.name === 'user-nick') {
      setNick(e.target.value);
    }
    else if (e.target.name === 'user-password') {
      setPassword(e.target.value);
    }
    else if (e.target.name === 'user-pass-confirm') {
      setPasswordError(e.target.value !== password);
      setPasswordConfirm(e.target.value);
    }
    else if (e.target.name === 'user-term') {
      setTermError(false);
      setTerm(e.target.checked);
    }
    else {

    }
  }

  return (
    <>
      <Head>
        <title>Bird SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">ID</label>
            <br />
            <Input name="user-id" required value={id} onChange={onChangeInput} />
          </div>
          <div>
            <label htmlFor="user-nick">Nickname</label>
            <br />
            <Input name="user-nick" required value={nick} onChange={onChangeInput} />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <br />
            <Input name="user-password" type="password" required value={password} onChange={onChangeInput} />
          </div>
          <div>
            <label htmlFor="user-pass-confirm">Password Confirm</label>
            <br />
            <Input name="user-pass-confirm" type="password" required value={passwordConfirm} onChange={onChangeInput} />
            {passwordError && <div style={{ color: 'red' }}>Passwords do not match.</div>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeInput}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, praesentium.</Checkbox>
            {termError && <div style={{ color: 'red' }}>You must agree to the terms.</div>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
}

export default Signup;