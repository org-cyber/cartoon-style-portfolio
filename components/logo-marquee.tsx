export function LogoMarquee() {
  const items = [
    { logo: "/images/sui-sui-logo.png", alt: "Next.Js" },
    { logo: "/images/firebase1.png", alt: "React" },
    { logo: "/images/nextjs.webp", alt: "Solidity" },
    { logo: "/images/typescript.webp", alt: "TypeScript" },
    { logo: "/images/firebase1.png", alt: "Firebase" },
    { logo: "/images/react.webp", alt: "SuiMove" },
    { logo: "/images/javascript.webp", alt: "Javascript" },
    { logo: "/images/solidity1.png", alt: "Solidity" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <img key={index} src={item.logo || "/placeholder.svg"} alt={item.alt}

              className="h-30 w-auto" />
          ))}
        </div>
      </div>
    </div>
  )
}
