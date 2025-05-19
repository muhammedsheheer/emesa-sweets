"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  reason: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast.success(
        "Your message has been submitted successfully. We will get back to you soon",
      );
      form.reset();
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });

  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center bg-[#000]"
      id="contact"
    >
      <div className="flex h-full w-full max-w-[1300px] flex-col gap-[2.5rem] px-0 py-12 pl-0 md:px-2 md:py-24">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex w-full flex-col gap-8 bg-[#000] px-6 lg:w-1/2 lg:px-28">
            <div className="flex flex-col gap-8">
              <p className="font-bai text-lg leading-[4px] text-[#fff]">
                Contact Us
              </p>
              <h1 className="font-forum text-4xl font-medium uppercase leading-[50px] tracking-[5px] text-[#fff] lg:text-5xl">
                Get in
                <br /> Touch
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <MapPin className="text-[#fff]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href={"https://g.co/kgs/X21HVq3"} target="_blank">
                    <p className="text-[#fff]">
                      7 Walmer St E, Manchester <br /> M14 5SS, United Kingdom
                    </p>
                  </Link>
                  <Link href={"https://g.co/kgs/X21HVq3"} target="_blank">
                    <p className="flex items-center gap-2 text-sm text-[#fff]">
                      <span>Get Direction</span>
                      <ArrowRight className="text-[#fff]" />
                    </p>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Phone />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="tel:+441234567890" className="">+44 1234 567890</Link>
                </div>
              </div> */}
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Phone className="text-[#fff]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="tel:+01619641411" className="text-[#fff]">
                    0161 964 1411
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Mail className="text-[#fff]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="mailto:info@emesasweet.com"
                    className="text-[#fff]"
                  >
                    info@emesasweet.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <Link
                  href={"https://www.instagram.com/emesa.sweet"}
                  target="_blank"
                >
                  <Icons.instagram className="text-[#fff]" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/people/Emesa-Sweets/61573122279162/?mibextid=wwXIfr&rdid=T1dHQqn6S6uh7TUt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1556JVDiHd%2F%3Fmibextid%3DwwXIfr"
                  }
                  target="_blank"
                >
                  <Icons.facebook className="text-[#fff]" />
                </Link>
                <Link href={"https://g.co/kgs/X21HVq3"} target="_blank">
                  <Icons.google className="text-[#fff]" />
                </Link>
                {/* <Link href='https://www.facebook.com/Istanbulwoolton/'>
                  <Icons.facebook />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#000] lg:w-1/2 lg:items-center lg:justify-center">
            <div className="w-full px-3 lg:w-4/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-xl bg-[#D9D9D9] text-[#fff] placeholder:text-[#fff]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 rounded-xl bg-[#D9D9D9] text-[#fff] placeholder:text-[#fff]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email"
                                {...field}
                                className="h-12 rounded-xl bg-[#D9D9D9] text-[#fff] placeholder:text-[#fff]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-[#fff]">
                              Reason for contacting (optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-32 rounded-xl bg-[#D9D9D9] text-[#fff] placeholder:text-[#fff]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button
                      className="w-full rounded-2xl bg-[#fff] py-6 font-inter text-[#000] hover:bg-[#222] hover:text-white"
                      disabled={bookTableMutation.isPending}
                    >
                      Contact US
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.1837784093686!2d-2.2244004!3d53.45535769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3002a9a778d%3A0xf358caccb0f9cb98!2zRW1lc2Egc3dlZXQgTWFuY2hlc3RlciAoIFdpbG1zbG93IFJvYWQpIC0g2K3ZhNmI2YrYp9iqINil2YXZitiz2Kc!5e1!3m2!1sen!2sin!4v1744092319277!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[500px] w-full"
        ></iframe>
      </div>
      <div className="flex w-full overflow-hidden">
        <Image
          className="h-full w-full object-cover lg:h-[500px]"
          src="/images/about-us/5.jpg"
          alt="bottom"
          width={966}
          height={96}
        />
      </div>
    </section>
  );
};

export default Contact;
