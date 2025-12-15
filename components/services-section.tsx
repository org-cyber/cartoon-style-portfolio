"use client";
import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Web development",
      description: "Build dynamic websites and web apps using React.js, Node.js, Express, Firebase, and MySQL. Design responsive and intuitive interfaces with Tailwind CSS, HTML5, and CSS3. Develop hybrid Web2–Web3 applications combining real-time UX with blockchain trust.",
      image: "/images/web-design.svg",
    },
    {
      title: "Web3 development",
      description: "Build decentralized applications (dApps) using blockchain technologies like Ethereum, Solidity, SuiMove, and Web3.js. Implement smart contracts for secure, transparent, and trustless transactions. Create non-fungible tokens (NFTs) and other blockchain assets. Develop hybrid Web2–Web3 applications combining real-time UX with blockchain trust.",
      image: "/images/web3.webp",
    },
    {
      title: "Cross Platform Mobile app development",
      description: "Build cross-platform mobile apps using React Native. Implement real-time features with Firebase or other cloud services. ",
      image: "/images/crossplatform.webp",
    },
    {
      title: "AI & Automations",
      description: "Build AI-powered applications, Implement natural language processing (NLP) for chatbots, voice assistants, or content generation. ",
      image: "/images/ai.webp",
    },
    {
      title: "Cloud Storage & Integration",
      description: "Integrate off-chain file storage with Storj, IPFS, or cloud storage platforms.Connect Google Forms & Sheets to websites for live data updates.Build analytics dashboards with Chart.js / Recharts for user engagement and click tracking Implement real-time features with Firebase or other cloud services. ",
      image: "/images/cloud.webp",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of services</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Looking for another service? Get in touch with me, there is a high chance that I will be able to help!
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]" onClick={() => window.location.href = "https://wa.link/ml2qxo"}>
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
