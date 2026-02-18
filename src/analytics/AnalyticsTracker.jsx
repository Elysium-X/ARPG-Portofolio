import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initGA } from "./initGA";

const GA_ID = import.meta.env.VITE_GA_ID;

export default function AnalyticsTracker() {
    const location = useLocation();
    const gaInitialized = useRef(false);

    // Initialize GA once on first mount
    useEffect(() => {
        if (!gaInitialized.current) {
            initGA();
            gaInitialized.current = true;
        }
    }, []);

    // Track page views (production only)
    useEffect(() => {
        if (import.meta.env.DEV) return;

        if (GA_ID && window.gtag) {
            window.gtag("config", GA_ID, {
                page_path: location.pathname,
            });
        }
    }, [location]);

    return null;
}
