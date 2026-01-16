import Image from "next/image"

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/android-chrome-192x192.png"
      alt="Wall Street Playbook"
      width={40}
      height={40}
      className={className}
      priority
    />
  )
}

export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <Image
      src="/favicon-32x32.png"
      alt="Wall Street Playbook"
      width={24}
      height={24}
      className={className}
    />
  )
}
