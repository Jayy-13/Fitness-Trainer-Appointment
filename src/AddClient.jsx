export default function AddClient({clients}){
    const handleClick = () => {
        console.log("Hello Add Client")
    }
    return(
        <div>
            <button onClick={handleClick}>Add Client</button>
        </div>
    )
}