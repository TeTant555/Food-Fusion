import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { hideLoader, openLoader } from "@/store/features/loaderSlice";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_g04o1fn",
  TEMPLATE_ID: "template_y116wqn",
  API_KEY: "YInoOJskkqtNeJHN1"
};

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const ContactBlog = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "wheretocook@foodfusion.com",
  web = { label: "foodfusion.com", url: "http://localhost:5173/" },
}: Contact2Props) => {
  const dispatch = useDispatch();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    dispatch(openLoader());
    
    try {
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "FoodFusion Team"
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.API_KEY
      );

      if (response.status === 200) {
        toast.success("Message sent successfully! We'll get back to you soon.", {
          style: {
            background: 'var(--color-ter)',
            color: 'var(--color-sec)',
          },
        });
        form.reset();
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again later.", {
        style: {
          background: 'var(--color-red-500)',
          color: 'white',
        },
      });
    } finally {
      dispatch(hideLoader());
    }
  };

  return (
    <section className="py-25 inter bg-ter">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 text-sec lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground mt-3">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-sec text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li className="text-muted-foreground">
                  <span className="font-bold text-sec">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold text-sec">Email: </span>
                  <a href={`mailto:${email}`} className="underline text-muted-foreground">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-sec">Web: </span>
                  <a href={web.url} target="_blank" className="underline text-muted-foreground">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto bg-pri shadow-lg flex max-w-3xl flex-col gap-6 rounded-lg p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="grid w-full items-center gap-1.5">
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec"
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                          />
                        </FormControl>
                        {form.formState.errors.firstName && (
                          <p className="text-red-500 text-sm">{form.formState.errors.firstName.message}</p>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="grid w-full items-center gap-1.5">
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec"
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                          />
                        </FormControl>
                        {form.formState.errors.lastName && (
                          <p className="text-red-500 text-sm">{form.formState.errors.lastName.message}</p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid w-full items-center gap-1.5">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec"
                          type="email"
                          id="email"
                          placeholder="Email"
                        />
                      </FormControl>
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="grid w-full items-center gap-1.5">
                      <FormLabel htmlFor="subject">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec"
                          type="text"
                          id="subject"
                          placeholder="Subject"
                        />
                      </FormControl>
                      {form.formState.errors.subject && (
                        <p className="text-red-500 text-sm">{form.formState.errors.subject.message}</p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid w-full gap-1.5">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec min-h-[120px]"
                          placeholder="Type your message here."
                          id="message"
                        />
                      </FormControl>
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                      )}
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-sec text-ter shadow-lg hover:bg-sec/80"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactBlog };
