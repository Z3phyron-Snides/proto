import { Card, Container, Form, FormCtrl, Input, InputField } from "./styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/auth/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdOutlineError } from "react-icons/md";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
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
});

const Index = () => {
  const { token, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [view, setView] = useState({
    showPassword: false,
  });
  const [errors, setErrors] = useState({});

  const { email, password } = formData;
  const { showPassword } = view;

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
    if (isError) {
      toast.error(message);
    }
    if (token) {
      navigate("/");
    }
  }, [isError, isSuccess, token, navigate, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // if validation passes, dispatch action to submit form
        dispatch(signIn({ email, password }));
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
        <h3>Sign In</h3>
        <Form onSubmit={handleSubmit}>
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
          </FormCtrl>

          <button type="submit">Sign In</button>
        </Form>
        <div className="links">
          <p>
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </p>
          <p>
            don't have an account? <Link to="/auth/register">Sign up</Link>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Index;
