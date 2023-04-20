import * as Form from '@radix-ui/react-form';

export type LoginFormProps = {
  onSubmit: (value: any) => void;
}

export default function LoginForm({onSubmit}: LoginFormProps) {
  return (
    <Form.Root className="FormRoot" onSubmit={onSubmit}>
      <Form.Field className="FormField" name="username">
        <div className="FormLabelMessage">
          <Form.Label className="FormLabel">Username</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your username
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="secret">
        <div className="FormLabelMessage">
          <Form.Label className="FormLabel">Password</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your password
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="password" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button violet" style={{ marginTop: 10 }}>
          Enter Account
        </button>
      </Form.Submit>
    </Form.Root>
  )
}
