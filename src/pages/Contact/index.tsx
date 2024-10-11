import Button from "~/components/Button";
import "./contact.scss";
import { useForm } from "react-hook-form";
import AbsoluteShape from "~/components/AbsoluteShape";
import { ReactComponent as Linkedin } from "~/assets/images/icons/linkedin.svg";
import { ReactComponent as Github } from "~/assets/images/icons/github.svg";
import { ReactComponent as StackOverFlow } from "~/assets/images/icons/stackoverflow.svg";
import { ReactComponent as Telegram } from "~/assets/images/icons/telegram.svg";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmiteHandler = handleSubmit((data) => {
    const aTag = document.createElement("a");
    aTag.href =
      `mailto:amirgoodarzi.web@gmail.com?subject=This is a message from ${data.email} - ${data.name} on your CV.&body=${data.message}`;
    aTag.click();
  });
  return (
    <div className="container" data-aos="fade-up">
      <AbsoluteShape
        position="top_right"
        colors="from-orangeGradStart to-orangeGradEnd"
      />
      <div className="contact_wrapper relative overflow-hidden">
        <div className="page_title">
          <h1 className="text_simple_grad">Contact Me</h1>
          <p className="description">You can find me on social media</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/amir-hossein-goodarzi/"
                target="_blank"
              >
                <Linkedin className="w-7 h-auto" />
              </a>
            </li>
            <li>
              <a href="https://github.com/AmirHosseinGoodarzi" target="_blank">
                <Github className="w-7 h-auto" />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/13922873/sektowr"
                target="_blank"
              >
                <StackOverFlow className="w-7 h-auto" />
              </a>
            </li>
            <li>
              <a href="https://t.me/sektowr" target="_blank">
                <Telegram className="w-7 h-auto" />
              </a>
            </li>
          </ul>
          <p className="description">Or Send me a message.</p>
        </div>
        <div className="form_wrapper">
          <div>
            <input
              className={`form_input ${errors.name ? "invalid" : ""}`}
              placeholder=" "
              {...register("name", { required: true })}
            />
            <label htmlFor="first-name" className="form_label">
              Your Name
            </label>
            {errors.name && <p className="error_message">Name is required</p>}
          </div>
          <div>
            <input
              className={`form_input ${errors.email ? "invalid" : ""}`}
              placeholder=" "
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
              })}
            />
            <label htmlFor="email" className="form_label">
              Email
            </label>
            {errors.email ? (
              <p className="error_message">
                {errors.email.type === "required"
                  ? "Email address is required"
                  : "Enter a valid email address please."}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="sm:col-span-2">
            <textarea
              className={`form_input ${errors.message ? "invalid" : ""}`}
              placeholder=" "
              rows={4}
              {...register("message", { required: true })}
            />
            <label htmlFor="message" className="form_label">
              Message
            </label>
            {errors.message && (
              <p className="error_message">Message is required</p>
            )}
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
