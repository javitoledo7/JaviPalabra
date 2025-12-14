function Login({onLogin}){
    return (
        <>
            <h2>Challenge your friends</h2>

            <button onClick={() => onLogin("Moderator")}>
                Log in as a moderator
            </button>

            <button onClick={() => onLogin("Player")}>
                Log in as a player
            </button>
        
        </>



    )
}
export default Login