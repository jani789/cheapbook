import React from 'react';
import styles from "./Auth.module.css";
import Head from "next/head";

const Layout = ({children}) => {
    return(
        <div className="d-flex min-height-100vh bg-white">
            <div className={`${styles["left-col"]} textured p-5 d-flex flex-column`}>
                <div className={`${styles["text-content"]} text-sm`}>
                    <h2 className="font-weight-700">Welcome to Cheapbook Deals </h2>
                    <p className="font-weight-400 h6 line-height-1-8">
                        Readers are the Leader. Almost everyone read books/Textbooks and spent a lot of money on books, and after reading, it sits on your shelf. We are here to help people to make books available for them at afordable price and helping people who wants to sell their books. We believe Knowledge and Education should not be expensive it should be sharable, So Sign up now for Free and start Trade in your Books.
                    </p>
                </div>
            </div>
            <div className={`${styles["right-col"]} flex-grow-1 d-flex flex-column justify-content-center`}>
                <div className={`${styles["auth-form"]} mb-4 flex-grow-1 d-flex flex-column justify-content-start`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;