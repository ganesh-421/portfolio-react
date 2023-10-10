import { useEffect, useState, useReducer, useContext, useRef } from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Label from "../Label";
import Form from "../Form";
import AuthContext from "../../contexts/auth-context";

/**
 *
 * @param {string} input input value to be validated
 * @param {array} rules rules of validation
 * @param {object} field Field name (ex. Name field, Email field)
 * @param {string} reference reference value for which input must be euqal
 * @param {string} refField Field name of the reference
 * @returns {array || boolean} array if error exists, true if validated
 */
const validate = (
  input = "",
  rules = [],
  field,
  reference = null,
  refField = null
) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let status = [];
  let errors = [];
  rules.map((rule) => {
    if (rule === "email") {
      if (!input.match(re)) {
        status.push({
          message: "Valid email format: abc@def.com",
          rule: rule,
          validity: false,
        });
      } else {
        status.push({ rule: rule, validity: true });
      }
    } else if (rule === "required") {
      if (input.length === 0) {
        status.push({
          message: field + " field is required",
          rule: rule,
          validity: false,
        });
      } else {
        status.push({ rule: rule, validity: true });
      }
    } else if (rule.split(":")[0] === "min") {
      if (input.length < rule.split(":")[1]) {
        status.push({
          message:
            field +
            " field must be of length " +
            rule.split(":")[1] +
            " at least",
          rule: rule,
          validity: false,
        });
      } else {
        status.push({ rule: rule, validity: true });
      }
    } else if (rule.split(":")[0] === "max") {
      if (input.length > rule.split(":")[1]) {
        status.push({
          message:
            field +
            " field must be of length " +
            rule.split(":")[1] +
            " at most",
          rule: rule,
          validity: false,
        });
      } else {
        status.push({ rule: rule, validity: true });
      }
    } else if (rule === "confirmed") {
      if (input !== reference) {
        status.push({
          message: field + " field must be same as " + refField,
          rule: rule,
          validity: false,
        });
      } else {
        status.push({ rule: rule, validity: true });
      }
    }
  });
  errors = status
    .map((status) => {
      if (!status.validity) {
        return {
          message: status.message,
          rule: status.rule,
        };
      }
    })
    .filter((el) => el !== undefined);
  if (errors.length >= 1) {
    return errors;
  } else {
    return true;
  }
};

const nameReducer = (state, action) => {
  let validated = validate(
    action.val !== undefined ? action.val : state.value,
    ["required", "min:6", "max:50"],
    "Name"
  );
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  return {
    value: "",
    isValid: null,
    errorMessage: "",
  };
};

const emailReducer = (state, action) => {
  let validated = validate(
    action.val !== undefined ? action.val : state.value,
    ["required", "email"],
    "Email"
  );
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  return {
    value: "",
    isValid: null,
    errorMessage: "",
  };
};

const passwordReducer = (state, action) => {
  let validated = validate(
    action.val !== undefined ? action.val : state.value,
    ["required", "min:8"],
    "Password"
  );
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  return {
    value: "",
    isValid: null,
    errorMessage: "",
  };
};

const confirmPasswordReducer = (state, action) => {
  let validated = validate(
    action.val !== undefined ? action.val : state.value,
    ["min:8", "required"]
  );
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  if (action.type === "CONF_PASS_VALIDATION") {
    validated = validate(
      action.val !== undefined ? action.val : state.value,
      ["confirmed"],
      "Confirm Password",
      action.referenceValue,
      "Password"
    );
    return {
      value: state.value,
      isValid: validated === true ? true : false,
      errorMessage: validated !== true ? validated : "",
    };
  }
  return {
    value: "",
    isValid: null,
    errorMessage: "",
  };
};

export default function RegisterForm() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: undefined,
    errorMessage: "",
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
    errorMessage: "",
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
    errorMessage: "",
  });
  const [confirmPasswordState, dispatchConfirmPassword] = useReducer(
    confirmPasswordReducer,
    {
      value: "",
      isValid: undefined,
      errorMessage: "",
    }
  );
  //   object destructure (alias destructure)
  const {
    value: email,
    isValid: emailIsValid,
    errorMessage: emailError,
  } = emailState;
  const {
    value: password,
    isValid: passwordIsValid,
    errorMessage: passwordError,
  } = passwordState;
  const {
    value: name,
    isValid: nameIsValid,
    errorMessage: nameError,
  } = nameState;
  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    errorMessage: confirmPasswordError,
  } = confirmPasswordState;
  const context = useContext(AuthContext);
  //   reference self as dom object
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    const timeoutIdentifier = setTimeout(() => {
      setIsFormValid(
        emailIsValid && passwordIsValid && nameIsValid && confirmPasswordIsValid
      );
    }, 500);
    // cleanup
    return () => {
      clearTimeout(timeoutIdentifier);
    };
  }, [emailIsValid, passwordIsValid, nameIsValid, confirmPasswordIsValid]);

  // password and confirmPassword validation
  useEffect(() => {
    dispatchConfirmPassword({
      type: "CONF_PASS_VALIDATION",
      value: confirmPassword,
      referenceValue: password,
    });
  }, [password, confirmPassword]);

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const nameChangeHandler = (e) => {
    dispatchName({ type: "USER_INPUT", val: e.target.value });
  };

  const validateNameHandler = () => {
    dispatchName({ type: "INPUT_BLUR" });
  };

  const confirmPasswordChangeHandler = (e) => {
    dispatchConfirmPassword({
      type: "USER_INPUT",
      val: e.target.value,
    });
  };

  const validateConfirmPasswordHandler = () => {
    dispatchConfirmPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
      context.onRegister(name, email, password);
    } else if (!nameIsValid) {
      nameRef.current.focus(); //can be applied all dom functions
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else if (!passwordIsValid) {
      passwordRef.current.focus();
    } else {
      confirmPasswordRef.current.focus();
    }
  };
  // console.log(nameError[0].message)
  return (
    <Form>
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
        Register
      </h5>
      <div>
        <Input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          placeholder="Full Name..."
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
          isValid={nameIsValid}
          value={name}
          errorMessage={nameError.length > 0 ? nameError[0].message : ""}
        />
      </div>
      <div>
        <Input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailIsValid}
          value={email}
          errorMessage={emailError.length > 0 ? emailError[0].message : ""}
        />
      </div>
      <div>
        {/* <Label htmlFor="password">Password</Label> */}
        <Input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
          value={password}
          errorMessage={
            passwordError.length > 0 ? passwordError[0].message : ""
          }
        />
      </div>
      <div>
        {/* <Label htmlFor="password_confirmation">Confirm Password</Label> */}
        <Input
          ref={confirmPasswordRef}
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder="••••••••"
          onChange={confirmPasswordChangeHandler}
          onBlur={validateConfirmPasswordHandler}
          isValid={confirmPasswordIsValid}
          value={confirmPassword}
          errorMessage={
            confirmPasswordError.length > 0
              ? confirmPasswordError[0].message
              : ""
          }
        />
      </div>
      <div className="flex items-start">
        {/* <div className="flex items-start">
          <div className="flex items-center h-5">
            <Checkbox id="remember" label="Remember me" />
          </div>
        </div> */}
        <a
          href="#"
          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Lost Password?
        </a>
      </div>
      <div className="flex justify-center">
        <Button onClick={submitHandler}>Register</Button>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Already registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Login
        </a>
      </div>
    </Form>
  );
}
