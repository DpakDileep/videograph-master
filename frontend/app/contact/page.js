import Navbar from "@/components/common/Navbar"
import ContactCrumb from "@/components/contact/contactcrumbs";
import ContactDetails from "@/components/contact/contactdetails";
import ContactForm from "@/components/contact/contactform";


export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactCrumb />
      <ContactDetails />
      <ContactForm />
    </>
  );
}
