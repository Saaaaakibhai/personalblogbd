export default function LoginPage() {
    return (
        <form className="login">
            <input type="text" placeholder='username' />
            <input type="password" placeholder="password" />
            <button>Log In</button>
        </form>
    );
}