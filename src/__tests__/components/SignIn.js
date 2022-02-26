import SignIn from "../../components/SignIn";
import { fireEvent, render, waitFor } from "@testing-library/react-native";


describe('Sign In form tests', () => {
  it('Signs In with correct values and onSubmit gets called once', async () => {
    const initialValues = {
      username: '',
      password: ''
    };
    const onSubmit = jest.fn();
    const newUsername = 'The Weather Man';
    const newPassword = 'Easy does not enter into grown up life.';

    const { getByText, getByPlaceholderText } = render(<SignIn onSubmit={onSubmit} initialValues={initialValues}/>)
    
    fireEvent.changeText(getByPlaceholderText('Username'), newUsername);
    fireEvent.changeText(getByPlaceholderText('Password'), newPassword);
    fireEvent.press(getByText('Sign In'));

    await waitFor(() => {
      expect(onSubmit.mock.calls.length).toBe(1);
      const args = onSubmit.mock.calls[0][0];
      expect(args.username).toBeDefined();
      expect(args.username).toBe(newUsername);
      expect(args.password).toBeDefined();
      expect(args.password).toBe(newPassword);
    });
  });
});