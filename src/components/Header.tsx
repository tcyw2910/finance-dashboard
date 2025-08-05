export const Header = () => {
    return (
        <header className="flex justify-between align-center">
            <button type="button" className="text-2xl border">Menu</button>
            <h1 className="text-2xl">My Finance Dashboard</h1>
            <button type="button" className="text-2xl border">Light/Dark Toggle</button>
        </header>
    )
}