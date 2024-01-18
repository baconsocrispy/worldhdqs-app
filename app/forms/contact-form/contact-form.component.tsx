'use client'
// library
import { useState } from "react";

// components
import Button from "@/app/components/button/button.component";
import FormInput from "@/app/components/form-input/form-input.component";
import FormTextArea from "@/app/components/form-text-area/form-text-area.component";

const ContactForm = () => {
    // state
    const [ loading, setLoading ] = useState(false);

    // handler
    const handleSubmit = async (formData: FormData) => {
      setLoading(true);

      console.log(formData);
      
      const response = await fetch('/api/cms/contact', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
  
    if (loading) return <p>Sending message...</p>;

  return (
    <form 
      className="contact-form" 
      action={ formData => handleSubmit(formData)}
    >
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