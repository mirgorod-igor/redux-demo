import { useState, type MouseEventHandler, type ReactNode } from 'react'

import sty from './index.module.sass'




function cn(key, selected) {
    return selected == key ? sty.selected : undefined
}

type Props = {
    items: { key: keyof Pokemon, name: string}[]
    children(activeTab): ReactNode
}

export default(p: Props) => {
    const [activeTab, setActiveTab] = useState<keyof Pokemon>('abilities')

    const clickHandler: MouseEventHandler<HTMLElement> = e => {
        const activeTab = e.currentTarget.dataset.key
        // @ts-ignore
        setActiveTab(activeTab)
    }

    return <>
        <ul className={sty.tabs}>
            {
                p.items.map((it, i) =>
                    <li key={i} data-key={it.key} className={cn(it.key, activeTab)} onClick={clickHandler}>
                        {it.name}
                    </li>
                )
            }
        </ul>
        {p.children(activeTab)}
    </>
}
