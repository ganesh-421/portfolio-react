import { useEffect, useState, useReducer, useContext, useRef } from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Label from "../Label";
import Form from "../Form";
import AuthContext from "../../contexts/auth-context";

const re =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.match(re) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.match(re) };
  }
  return {
    value: "",
    isValid: null,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 7 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 7 };
  }
  return {
    value: "",
    isValid: null,
  };
};

export default function LoginForm() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const context = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const timeoutIdentifier = setTimeout(() => {
      setIsFormValid(emailIsValid && passwordIsValid);
    }, 500);
    // cleanup
    return () => {
      clearTimeout(timeoutIdentifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
      context.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Form>
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
        Sign in
      </h5>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
          value={emailState.value}
        />
      </div>
      <div>
        <Label htmlFor="password">password</Label>
        <Input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
          value={passwordState.value}
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <Checkbox id="remember" label="Remember me" />
          </div>
        </div>
        <a
          href="#"
          className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Lost Password?
        </a>
      </div>
      <div className="flex justify-center">
        <Button onClick={submitHandler}>Login</Button>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Create account
        </a>
      </div>
    </Form>
  );
}
