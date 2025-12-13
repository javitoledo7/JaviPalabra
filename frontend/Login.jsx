function Login({onLogin}){
    return (
        <>
            <h2>Acceso</h2>

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