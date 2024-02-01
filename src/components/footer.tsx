
const Footer = () => {
    return (
        <footer className="text-gray-800 bg-lavender-blush">
            <div className="container mx-auto px-4 py-10 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} Vault. All Rights Reserved.
                </p>
                <div className="flex gap-4">
                    <a href="/terms" className="text-sm text-gray-600 hover:text-gray-800">Terms of Use</a>
                    <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a>
                    <a href="/disclaimer" className="text-sm text-gray-600 hover:text-gray-800">Legal Disclaimer</a>
                    <a href="/faq" className="text-sm text-gray-600 hover:text-gray-800">FAQ</a>
                </div>

                <a href="/" className="text-sm text-gray-600 hover:text-gray-800">Notifications Search</a>
            </div>
        </footer >
    );
}

export default Footer;
