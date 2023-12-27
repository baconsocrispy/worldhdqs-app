// components
import Button from "@/app/components/button/button.component";
import FormInput from "@/app/components/form-input/form-input.component";
import FormTextArea from "@/app/components/form-text-area/form-text-area.component";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <FormInput 
        id='contact-form__first-name'
        label='First Name'
      />

      <FormInput 
        id='contact-form__last-name'
        label='Last Name'
      />

      <FormInput 
        id='contact-form__company'
        label='Company'
      />

      <FormInput 
        id='contact-form__phone'
        label='Phone'
      />

      <FormInput 
        id='contact-form__email'
        label='Email'
      />
      
      <FormTextArea 
        id="contact-form__message"
        label="Message"
      />

      <Button text='send' type='submit' />
    </form>
  )
};

export default ContactForm;