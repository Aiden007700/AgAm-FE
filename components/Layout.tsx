import Head from "next/head"
import { ReactChild } from "react"
import Headder from "./Headder"
import Sidebar from "./Sidebar"

const Layout = ({children, title, active}) => {
    return (
        <div>
        <Head>
          <title>{title}</title>
        </Head>
        <main className="min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar active={active} />
          <section className="flex-grow max-w-2xl sm:ml-[13px] xl:ml-[370px]">
            <Headder title={title} />
            {children}
          </section>
        </main>
      </div>
    )
}

export interface ILayout {
    children: ReactChild
    title: string
    active: string
}

export default Layout