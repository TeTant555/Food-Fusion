import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec" type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec" type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec" type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec" type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea className="!border-none !shadow-md !bg-ter text-muted-foreground !ring-sec" placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full bg-sec text-ter shadow-lg hover:bg-sec/80">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactBlog };
