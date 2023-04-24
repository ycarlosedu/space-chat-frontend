import * as Form from '@radix-ui/react-form';
import Button from '../../../components/Button';

export type SignUpFormProps = {
  onSubmit: (value: any) => void;
  isLoading: boolean;
}

export default function SignUpForm({onSubmit, isLoading}: SignUpFormProps) {
  return (
    <Form.Root className="FormRoot" onSubmit={onSubmit}>
      <Form.Field className="FormField" name="username">
        <div className="FormLabelMessage">
          <Form.Label className="FormLabel">UserName</Form.Label>
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

      <Form.Field className="FormField" name="email">
        <div className="FormLabelMessage">
          <Form.Label className="FormLabel">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="email" required />
        </Form.Control>
      </Form.Field>
      
      <Form.Field className="FormField" name="first_name">
        <div className="FormLabelMessage">
          <Form.Label className="FormLabel">First Name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your first name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="last_name">
        <div className="FormLabelMessage">
          <Form.Label className="FormLabel">Last Name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your last name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button isLoading={isLoading}>
          Create Account
        </Button>
      </Form.Submit>
    </Form.Root>
  )
}
