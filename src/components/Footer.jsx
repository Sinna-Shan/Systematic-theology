function Footer() {
    return (
        <footer className="h-44 bg-slate-950 border-t-2 border-slate-600 text-gray-100 flex items-center justify-center text-center leading-8">
            Project for Systematic Theology Assignment.
            <br />
        2024 {new Date().getFullYear() > 2024 && `- ${new Date().getFullYear()}`} &copy;
        Developed by Noah Shan.
      </footer>
    );
}

export default Footer
