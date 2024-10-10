import React from 'react';

function Footer() {
    return (
        <footer className="py-5 text-center bg-light">
            <p className="text-muted mb-0">
                &copy; {new Date().getFullYear()} Colin Douglas. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;