import React, { type ChangeEvent, type ChangeEventHandler } from 'react'


type Props = {
    options: string[]
    value: string
    onChange: (value: string) => void
}
  

export default (p: Props) =>
  <span>
    <h1>{p.value}</h1>
    <select onChange={e => p.onChange(e.target.value)} value={p.value}>
      {
        p.options.map(it => 
          <option value={it} key={it}>{it}</option>
        )
      }
    </select>
  </span>

