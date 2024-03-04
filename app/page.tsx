import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Image
        className="cursor-pointer max-h-[32px] w-auto h-auto"
        src={"/23_store-dark.png"}
        alt="logo"
        width={300}
        height={32}
        priority
      />
    </div>
  )
}
