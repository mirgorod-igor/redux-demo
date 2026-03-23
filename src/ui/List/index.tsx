type Props<T extends { title }> = {
    items: T[]
}

export default <T extends { title }>(p: Props<T>) =>
    <ul>
        {
            p.items.map((it, i) =>
                <li key={i}>{it.title}</li>
            )
        }
    </ul>
