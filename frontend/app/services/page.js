import Action from "@/components/services/Action";
import Breadcrumb from "@/components/services/Breadcrumb";
import Logo from "@/components/services/Logo";
import Servicesection from "@/components/services/Servicesection";
import Navbar from "@/components/common/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Servicesection />
      <Action />
      <Logo />
    </>
  );
}
