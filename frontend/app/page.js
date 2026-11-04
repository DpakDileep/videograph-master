import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import HeroHome from "@/components/home/HeroHome"
import ServiceHome from "@/components/home/ServiceHome"
import WorkSection from "@/components/home/WorkSection"
import CounterSection from "@/components/home/CounterSection"
import TeamSection from "@/components/home/TeamSection"
import LatestBlog from "@/components/home/LatestBlog"
import CallToAction from "@/components/home/CallToAction"

export default function page() {
  return (
    <>
    <Navbar />
    <HeroHome />
    <ServiceHome />
    <WorkSection />
    <CounterSection />
    <TeamSection />
    <LatestBlog />
    <CallToAction />
    <Footer />
    </>
  )
}
