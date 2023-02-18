import { Card, Container, Form, FormCtrl, Input, InputField } from "./styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/auth/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdOutlineError } from "react-icons/md";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()

    .required("Password is required"),
    // .test(
    //   "regex",
    //   "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
    //   (val) => {
    //     let regExp = new RegExp(
    //       "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
    //     );
    //     console.log(regExp.test(val), regExp, val);
    //     return regExp.test(val);
    //   }
    // ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Confirm password is required"),
});

const Index = () => {
  const { token, isSuccess, message } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [view, setView] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });
  const [errors, setErrors] = useState({});

  const { firstName, lastName, email, password, confirmPassword } = formData;
  const { showConfirmPassword, showPassword } = view;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    validationSchema
      .validateAt(name, formData)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.message }));
  };

  const handleViewToggle = (field) => {
    setView({
      ...view,
      [`show${field}`]: !view[`show${field}`],
    });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [isSuccess, token, navigate, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // if validation passes, dispatch action to submit form
        dispatch(signUp({ firstName, lastName, email, password }));
      })
      .catch((err) => {
        // if validation fails, set errors
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };
  return (
    <Container>
      <Card>
        <h3>Sign Up</h3>
        <Form onSubmit={handleSubmit}>
          <FormCtrl>
            <div className="input">
              <Input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && (
                <small>
                  <MdOutlineError /> {errors.firstName}
                </small>
              )}
            </div>

            <div className="input">
              <Input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && (
                <small>
                  {" "}
                  <MdOutlineError /> {errors.lastName}
                </small>
              )}
            </div>
          </FormCtrl>

          <FormCtrl>
            <div className="input">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <small>
                  <MdOutlineError /> {errors.email}
                </small>
              )}
            </div>
          </FormCtrl>
          <FormCtrl>
            <InputField>
              <div className="input">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <small>
                    <MdOutlineError /> {errors.password}
                  </small>
                )}
              </div>

              <span
                className="toggle"
                onClick={() => handleViewToggle("Password")}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </InputField>
            <InputField>
              <div className="input">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && (
                  <small>
                    <MdOutlineError /> {errors.confirmPassword}
                  </small>
                )}
              </div>

              <span
                className="toggle"
                onClick={() => handleViewToggle("ConfirmPassword")}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </InputField>
          </FormCtrl>

          <button type="submit">Register</button>
        </Form>
        <small>
          already have an account? <Link to="/auth/login">Sign In</Link>
        </small>
      </Card>
    </Container>
  );
};

export default Index;
