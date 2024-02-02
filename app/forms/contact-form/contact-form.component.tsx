'use client'
// library
import { useState } from "react";

// components
import Button from "@/app/components/button/button.component";
import FormInput from "@/app/components/form-input/form-input.component";
import FormTextArea from "@/app/components/form-text-area/form-text-area.component";

// types
import { SubmitResponse } from "@/app/types";

const ContactForm = () => {
    // state
    const [ loading, setLoading ] = useState(false);
    const [ submitResponse, setSubmitResponse ] = useState<SubmitResponse>({
      message: 'Please leave a message'
    });

    // handler
    const handleSubmit = async (formData: FormData) => {
      setLoading(true);
      try {
      const response = await fetch('/api/cms/contact', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        setSubmitResponse({
          message: 'Success! Someone will respond shortly.',
          success: true
        });
        setLoading(false);
      } else {
        setSubmitResponse({
          message: 'Message failed to send. Please try again later.',
          success: false
        })
        setLoading(false);
        throw new Error(`${ response.status } response during contact form submission`)
      }
      } catch (error) {
        console.error('An error occured while submitting the contact form', error);
      }
    };
  
    if (loading) return <p>Sending message...</p>;

  return (
    <form 
      className="contact-form" 
      action={ formData => handleSubmit(formData)}
    >
      {
        submitResponse && 
          <div className="contact-form__submit-response">
            <p>{ submitResponse.message }</p>
          </div>
      }
      <div className="contact-form__input-group">
        <FormInput 
          id='contact-form__first-name'
          label='First Name'
          name='first_name'
        />

        <FormInput 
          id='contact-form__last-name'
          label='Last Name'
          name='last_name'
        />

        <FormInput 
          id='contact-form__company'
          label='Company'
          name='company'
        />

        <FormInput 
          id='contact-form__phone'
          label='Phone'
          name='phone'
        />

        <FormInput 
          id='contact-form__email'
          label='Email'
          name='email'
        />
        
        <FormTextArea 
          id="contact-form__message"
          label="Message"
          name='message'
        />

        <Button text='send' type='submit' />
      </div>
    </form>
  )
};

export default ContactForm;