interface inputProps{
    placeholder: string,
    ref?: any
}

export function Input( {ref, placeholder} : inputProps) {
    return <div>
        <input ref={ref} placeholder={placeholder}  type="text" className="px-4 py-2 rounded-lg cursor-text border-slate-300 border focus:outline-none focus:ring-1 focus:ring-purple-550"></input>
    </div>
}