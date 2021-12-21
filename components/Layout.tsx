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
        <main className="h-screen flex">
          <Sidebar active={active} />
          <section className="flex-1 overflow-y-scroll">
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