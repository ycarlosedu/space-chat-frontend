import * as Form from '@radix-ui/react-form';
import Button from '../../../components/Button';

export type LoginFormProps = {
  onSubmit: (value: any) => void;
  isLoading: boolean;
}

export default function LoginForm({onSubmit, isLoading}: LoginFormProps) {
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
        <Button isLoading={isLoading}>
          Enter Account
        </Button>
      </Form.Submit>
    </Form.Root>
  )
}
