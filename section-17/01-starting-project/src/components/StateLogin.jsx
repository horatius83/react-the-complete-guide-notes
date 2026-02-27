import Input from './Input.jsx';
import { useInput } from '../hooks/useInput.js'
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation.js';

export default function Login() {
  const { 
    value: emailValue, 
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur 
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));  

  const { 
    value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur 
  } = useInput('', (value) => hasMinLength(value, 6));  

  function handleSubmit(event) {
    event.preventDefault();
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
            label="Email" 
            id="email" 
            type="email" 
            name="email"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
        ></Input>

        <Input
            label="Password"
            id="password" 
            type="password" 
            name="password" 
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
        >
        </Input>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
