import axios from "axios";
import * as Tabs from '@radix-ui/react-tabs';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import DecorativeItem from "../../components/DecorativeItem";
import Background from "../../components/Background";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { ERROR_GENERIC } from "../../constants";
import { onAuthResponse } from "../../App";
import request from "../../utils/request";

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

type AuthPageProps = {
  onAuth: (authData: onAuthResponse) => void;
}

const AuthPage = (props: AuthPageProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const onLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)

    const secret = e.target.elements.secret.value
    const username = e.target.elements.username.value

    try {
      const { data } = await request.post("login", { username, secret })
      props.onAuth({ user: { ...data.user, secret }, projectID: data.projectID }) // NOTE: over-ride secret
    } catch (e: any) {
      toast.error(e?.response?.data?.detail || e?.response?.data?.message || ERROR_GENERIC)
    } finally {
      setIsLoading(false)
    }
  };

  const onSignup = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)

    const secret = e.target.elements.secret.value
    const username = e.target.elements.username.value
    const email = e.target.elements.email.value
    const first_name = e.target.elements.first_name.value
    const last_name = e.target.elements.last_name.value

    try {
      const { data } = await request.post("signup", {
          username,
          secret,
          email,
          first_name,
          last_name,
        })
      props.onAuth({ user: { ...data.user, secret }, projectID: data.projectID }) // NOTE: over-ride secret

    } catch (e: any) {
      toast.error(e?.response?.data?.detail || e?.response?.data?.message || ERROR_GENERIC)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Background>

      <Toaster/>
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
          <div className="TabsDivisor">
            <div className="TabsMainContent toLeft">
              <h2 className="TabsTitle">Hi SpaceChatter!</h2>
              <p className="TabsText">Type your data to enter your account</p>
              <LoginForm onSubmit={onLogin} isLoading={isLoading} />
            </div>

            <DecorativeItem className="toRight" />
          </div>
        </Tabs.Content>

        <Tabs.Content className="TabsContent" value="tab2">
          <div className="TabsDivisor">
            <DecorativeItem className="toLeft" />

            <div className="TabsMainContent toRight">
              <h2 className="TabsTitle">Welcome to SpaceChat!</h2>
              <p className="TabsText">Type your data to create your account.</p>
              <SignUpForm onSubmit={onSignup} isLoading={isLoading} />
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>

    </Background>
  );
};

export default AuthPage;