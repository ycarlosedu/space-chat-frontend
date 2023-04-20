import { useState } from "react";
import axios from "axios";
import * as Tabs from '@radix-ui/react-tabs';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export type LoginValues = {
  username: string;
  secret: string;
}

export type SignUpValues = {
  username: string;
  secret: string;
  email: string;
  first_name: string;
  last_name: string;
}

const AuthPage = (props: any) => {

  const onLogin = (e: any) => {
    e.preventDefault();

    const secret = e.target.elements.secret.value
    const username = e.target.elements.username.value

    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e: any) => {
    e.preventDefault();
    console.log(e)

    const secret = e.target.elements.secret.value
    const username = e.target.elements.username.value
    const email = e.target.elements.email.value
    const first_name = e.target.elements.first_name.value
    const last_name = e.target.elements.last_name.value

    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <section className="w-screen h-screen grid place-items-center bg-gradient-to-tl from-violet-600 to-blue-400">

      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            SignUp
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="TabsContent" value="tab1">
          <p className="TabsTitle">Hi RealChater! Type your data to enter your account.</p>
          
          <LoginForm onSubmit={onLogin} />
        </Tabs.Content>

        <Tabs.Content className="TabsContent" value="tab2">
          <p className="TabsTitle">Welcome to RealChat! Type your data to create your account.</p>
          
          <SignUpForm onSubmit={onSignup} />
        </Tabs.Content>
      </Tabs.Root>

    </section>
  );
};

export default AuthPage;