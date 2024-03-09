import React, { useState, useEffect } from "react";

const Alert = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const handleResize = () => {
            setShowAlert(window.innerWidth <= 768); // Adjust the width as per your requirement
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let timeoutId;

        if (showAlert) {
            timeoutId = setTimeout(() => {
                setShowAlert(false);
                setCountdown(10); // Reset countdown when alert is dismissed
            }, countdown * 1000); // Convert seconds to milliseconds for setTimeout

            const intervalId = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000); // Update countdown every second

            // Clear interval when alert is dismissed or component unmounts
            return () => {
                clearInterval(intervalId);
                clearTimeout(timeoutId);
            };
        }
    }, [showAlert, countdown]);

    const dismissAlert = () => {
        setShowAlert(false);
        setCountdown(10);
    };

    return (
        <div>
            {showAlert && (
                <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-md">
                    <div className="bg-white p-6 rounded-lg shadow-lg ">
                        <p className="mb-4">
                            gunakan gawai yang lebih besar untuk pengalaman yang
                            baik.
                        </p>
                        <p className="mb-4">
                            Peringatan ini akan otomatis tertutup {countdown}{" "}
                            detik.
                        </p>
                        <button
                            onClick={dismissAlert}
                            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Alert;
