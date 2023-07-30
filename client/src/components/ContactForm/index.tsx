import { useForm } from "react-hook-form";
import "./style.css";
import Button from "../Button";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="contact-form-block">
      <div className="contact-form-block__overlay"></div>
      <div className="contact-form-block__form-wrap">
        <h2 className="contact-form-block__heading">
          Are you ready to experience a<br />
          <span>better way to trade digital assets?</span>
        </h2>
        <div className="contact-form-block__instruction">
          Fill out our form and a representative will be in touch.
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="contact-form-block__field-wrap">
            <div className="contact-form-block__field">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <div className="contact-form-block__field-error-message">
                  Name is required.
                </div>
              )}
            </div>
            <div className="contact-form-block__field">
              <input
                type="text"
                placeholder="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <div className="contact-form-block__field-error-message">
                  Email is required.
                </div>
              )}
            </div>
            <div className="contact-form-block__field">
              <input
                type="text"
                placeholder="Telephone"
                {...register("telephone", { pattern: /\d+/, required: true })}
              />
              {errors.telephone && (
                <div className="contact-form-block__field-error-message">
                  Telephone is required.
                </div>
              )}
            </div>
            <div className="contact-form-block__field">
              <textarea placeholder="Message" {...register("message")} />
            </div>
          </div>
          <div className="contact-form-block__submit-wrap">
            <Button type="submit" className="contact-form-block__submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
