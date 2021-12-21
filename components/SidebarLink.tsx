import { useRouter } from "next/router";

const SidebarLink = ({ Icon, text, active, push }: ISidebarLink) => {
    const router = useRouter()
    return (
        <div
          className={`flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
            active && "font-bold"
          }`}
          onClick={() => router.push(push)}
        >
          <Icon className="h-7" />
          <span className="hidden xl:inline">{text}</span>
        </div>
      );
}

interface ISidebarLink {
    Icon: any
    text: string
    active?: boolean
    push: string
}

export default SidebarLink