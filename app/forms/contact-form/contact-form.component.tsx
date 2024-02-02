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
  
    if (loading) return <p className="center-wrapper">Sending message...</p>;

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
          className="form-input__input"
          label='First Name*'
          labelId='contact-form__first-name'
          name='first_name'
          required
          type='text'
        />

        <FormInput 
          id='contact-form__last-name'
          className="form-input__input"
          label='Last Name*'
          labelId='contact-form__last-name'
          name='last_name'
          required
          type='text'
        />

        <FormInput 
          id='contact-form__company'
          className="form-input__input"
          label='Company'
          labelId="contact-form__company"
          name='company'
          type='text'
        />

        <FormInput 
          id='contact-form__phone'
          className="form-input__input"
          label='Phone'
          labelId="contact-form__phone"
          name='phone'
          type="phone"
        />

        <FormInput 
          id='contact-form__email'
          className="form-input__input"
          label='Email*'
          labelId="contact-form__email"
          name='email'
          required
          type="email"
        />
        
        <FormTextArea 
          id="contact-form__message"
          className="form-text-area__text-area"
          label="Message*"
          labelId="contact-form__message"
          name='message'
          required
          rows={ 6 }
        />

        <Button text='send' type='submit' />
      </div>
    </form>
  )
};

export default ContactForm;