import Button from "~/components/Button";
import "./contact.scss";
import { useForm } from "react-hook-form";
import AbsoluteShape from "~/components/AbsoluteShape";
import { ReactComponent as Linkedin } from "~/assets/images/icons/linkedin.svg";
import { ReactComponent as StackOverFlow } from "~/assets/images/icons/stackoverflow.svg";
import { ReactComponent as Telegram } from "~/assets/images/icons/telegram.svg";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmiteHandler = handleSubmit((data) => {
    console.log({ data });
  });
  return (
    <div className="container">
      <AbsoluteShape
        position="top_right"
        colors="from-blueGradStart via-orangeGradEnd to-blueGradEnd"
      />
      <div className="contact_wrapper">
        <div className="section_title">
          <h1 className="text_simple_grad">Contact Me</h1>
          <p className="description">You can find me on social media</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/amir-hossein-goodarzi/" target="_blank">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/13922873/sektowr" target="_blank">
                <StackOverFlow />
              </a>
            </li>
            <li>
              <a href="https://t.me/sektowr" target="_blank">
                <Telegram />
              </a>
            </li>
          </ul>
          <p className="description">Or you can send me a message.</p>
        </div>
        <div className="form_wrapper">
          <div>
            <label htmlFor="first-name" className="form_label">
              Your Name
            </label>
            <input
              className="form_input"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="email" className="form_label">
              Email
            </label>
            <input
              className="form_input"
              {...register("email", { required: true })}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label">
              Message
            </label>
            <textarea
              className="form_input"
              rows={4}
              {...register("message", { required: true })}
            />
          </div>
          <div className="sm:col-span-2 mt-2.5">
            <Button className="!w-full !py-2" onClick={formSubmiteHandler}>
              Let's talk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
