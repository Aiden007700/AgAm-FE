import { SparklesIcon } from "@heroicons/react/outline";

const Headder = ({title}: IHeadder) => {
    return (
    <div className="flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
    </div>
    )
}

export interface IHeadder {
    title: string
}

export default Headder