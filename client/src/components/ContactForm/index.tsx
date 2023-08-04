import { useForm, SubmitHandler } from "react-hook-form";
import "./style.css";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  telephone: string;
  message: string;
};

const phoneRegExp = /[0-9-()]*[1-9][0-9-()]*/;

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email format is invalid"),
    telephone: yup
      .string()
      .required("Telephone is required")
      .matches(phoneRegExp, "Telephone format is invalid"),
    message: yup.string().required("Message is required"),
  })
  .required();

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMessageSent, setIsisMessageSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      message: "",
    },
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true);
    setIsSubmitted(false);
    setIsisMessageSent(false);

    axios.post("http://localhost:4000/api", data).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        setIsSubmitted(true);
        setIsisMessageSent(true);
      } else {
        setIsSubmitted(true);
        setIsisMessageSent(false);
      }
    });
  };

  return (
    <div className="contact-form-block">
      <div className="contact-form-block__overlay"></div>
      <div className="contact-form-block__form-wrap">
        {isSubmitted && (
          <div
            className={`contact-form-block__validation-message contact-form-block__validation-message--${
              isMessageSent ? "success" : "error"
            }`}
          >
            {isMessageSent && <>Message successfully sent!</>}
            {!isMessageSent && <>Something went wrong!</>}
          </div>
        )}
        <h2 className="contact-form-block__heading">
          Are you ready to experience a<br />
          <span>better way to trade digital assets?</span>
        </h2>
        <div className="contact-form-block__instruction">
          Fill out our form and a representative will be in touch.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-form-block__field-wrap">
            <div className="contact-form-block__field">
              <input type="text" placeholder="Name" {...register("name")} />
              {errors.name && (
                <div className="contact-form-block__field-error-message">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className="contact-form-block__field">
              <input type="text" placeholder="Email" {...register("email")} />
              {errors.email && (
                <div className="contact-form-block__field-error-message">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="contact-form-block__field">
              <input
                type="text"
                placeholder="Telephone"
                {...register("telephone")}
              />
              {errors.telephone && (
                <div className="contact-form-block__field-error-message">
                  {errors.telephone.message}
                </div>
              )}
            </div>
            <div className="contact-form-block__field">
              <textarea placeholder="Message" {...register("message")} />
              {errors.message && (
                <div className="contact-form-block__field-error-message">
                  {errors.message.message}
                </div>
              )}
            </div>
          </div>
          <div className="contact-form-block__submit-wrap">
            <Button
              type="submit"
              className="contact-form-block__submit"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
