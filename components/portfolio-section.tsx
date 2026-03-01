import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "AVO- Decentralized File Storage ",
      description:
        " Avo is a hybrid decentralized application (dapp) designed to provide secure file storage and streamlined communication using Web3 technologies. The platform integrates blockchain-based authentication, off-chain distributed file storage, and modern React-based UI to deliver a fast, privacy-focused user experience.",
      tag: "Web3 Development, Solidity, React, JavaScript, IPFS",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#6366F1]",
      // To change the image for this item, place your image in public/images/ and update the path below
      illustration: "/images/Screenshot (18).png", // Updated to use the new demo image
      href: "https://avo101.netlify.app", // Update this link to your desired page
    },
    {
      title: "Hauser-Real Estate",
      description:
        "Hauser is a full real-estate listing platform designed to allow agents and landlords to publish properties, manage listings, and track user interactions. I built Hauser as a full-stack web application with a strong focus on automation, clean UI, and scalable property-management features. The platform includes a dynamic agent and landlord dashboard, authenticated through a custom Email and Password login system instead of traditional user accounts. User roles (agent, landlord, visitor) are auto-detected and routed to different dashboards for a seamless experience. The platform also includes a dynamic agent and landlord dashboard, authenticated through a custom Email and Password login system instead of traditional user accounts. User roles (agent, landlord, visitor) are auto-detected and routed to different dashboards for a seamless experience. authentication and storage  are handled by googles firebase.",
      tag: " Web Development, JavaScript, Firebase",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      // Make sure each item has a unique image path here to show different images per item
      illustration: "/images/Screenshot (13).png",
      href: "https://hauser.netlify.app", // Update this link to your desired page
    },
    {
      title: "PixelAi",
      description:
        "PixelAi is a  that allows users to plug in their OpenRouter API key and get direct access to the Claude 3.5 model—all from a simple, clean interface, no backend setup or local environment needed. Key features:• Secure API key input & management• Ability to switch/update keys anytime• Smooth, responsive UI for chatting with Claude• Built with modern Next.js routing, API handling & environment logicMy goal was to create a lightweight, developer-friendly way to test and use advanced AI models without complex setup. This was a great opportunity to deepen my skills with Next.js, API integrations, environment management, and modern AI workflows",
      tag: "Full-Stack Web Development, Next.Js, OpenRouter, React, TypeScript",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      // Make sure each item has a unique image path here to show different images per item
      illustration: "/images/Screenshot (10).png",
      href: "https://pixelcodeai.netlify.app", // Update this link to your desired page
    },
    {
      title: "DSPACE-Hybrid(Web3-Web2) Social Platform Built on Sui",
      description:
        "DSpace is a hybrid Web2/Web3 chat and social platform designed to combine the speed and usability of traditional apps with the trust and security of blockchain technology. It allows users to create, join, and interact in pods (groups), with in-pod payments and role-based access, while maintaining blockchain-verified identity and permissions.",
      tag: "Full-Stack Web Development, React, TypeScript, SuiMove, Firebase",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      // Make sure each item has a unique image path here to show different images per item
      illustration: "/images/Screenshot (46).png",
      href: "https://dspace1.netlify.app",
    },
     {
      title: "Asguard — AI-Powered Fraud Detection",
      description:
        "Asguard is a real-time fraud detection engine combining rule-based scoring with AI-enhanced analysis. It provides an API for transaction analysis and a configurable risk engine with AI integration. Key features include:• Real-time transaction scoring with customizable rules• AI-enhanced analysis for complex fraud patterns• API for seamless integration with existing systems• Configurable risk engine for tailored fraud preventionMy goal was to create a powerful yet flexible fraud detection solution that leverages both traditional rule-based methods and modern AI techniques to provide comprehensive protection against fraudulent activities.",
      tag: "Backend API Development, Go/Golang, AI Integration, Groq cloud OpenSource",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      // Make sure each item has a unique image path here to show different images per item
      illustration: "/images/asguard.png",
      href: "https://github.com/org-cyber/asguard",
    },
      {
      title: "Azeru - Enterprise Brain",
      description:
        "Azeru is a cutting-edge, AI-driven document intelligence platform designed to transform your PDFs into actionable knowledge. By leveraging advanced Retrieval-Augmented Generation (RAG) techniques, Azeru provides precise answers based on your private documents, making it an indispensable tool for enterprises and professionals. Key features include:• AI-Powered Document Understanding: Azeru uses state-of-the-art AI models to comprehend and analyze the content of your PDFs, extracting key information and insights.• Retrieval-Augmented Generation (RAG): By combining retrieval techniques with generative AI, Azeru delivers accurate and contextually relevant answers to your queries based on the information contained in your documents.• User-Friendly Interface: With a sleek and intuitive interface, Azeru allows users to easily upload their PDFs and interact with the platform to get the information they need quickly and efficiently.My goal was to create a powerful yet flexible document intelligence solution that leverages both traditional rule-based methods and modern AI techniques to provide comprehensive insights from your private documents.",
      tag: "RAG Pipeline, RAG chatbot Go/Golang, AI Integration, SQLlite, ChromaDB Groq cloud OpenSource",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      // Make sure each item has a unique image path here to show different images per item
      illustration: "/images/azeru.png",
      href: "https://github.com/org-cyber/azeru",
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">Project Portfolio</span>
          </h2>
        </div>




        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={project.logo || "/placeholder.svg"}
                    alt={`${project.title} logo`}
                    width={120}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                  />
                </div>

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <a
                  href={project.href}
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px] flex items-center justify-center p-8`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover rounded-xl shadow-lg transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {/*  <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Browse all portfolio
          </button>*/}
        </div>
      </div>
    </section>
  )
}
