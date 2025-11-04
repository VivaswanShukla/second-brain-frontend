export function Input( {onChange, placeholder} : {onChange?: () => void; placeholder:string}) {
    return <div>
        <input placeholder={placeholder}  type="text" className="px-4 py-2 rounded-lg cursor-text border-slate-300 border-2 focus:outline-none focus:ring-1 focus:ring-purple-550" onChange={onChange}></input>
    </div>
}