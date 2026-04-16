import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, image, url }) => {
    const { pathname } = useLocation();
    const siteUrl = "https://kabirofficial.github.io/KabirPortfolio";
    const defaultTitle = "Kabir — Portfolio";
    const defaultDescription = "AI/ML Engineer & Python Developer. Showcasing projects, skills, and experience in building intelligent, scalable solutions.";
    const defaultImage = `${siteUrl}/profile.jpg`;

    const finalTitle = title ? `${title} | Kabir` : defaultTitle;
    const finalDescription = description || defaultDescription;
    const finalImage = image || defaultImage;
    const finalUrl = url || `${siteUrl}${pathname}`;

    useEffect(() => {
        document.title = finalTitle;

        const metaTags = {
            description: finalDescription,
            "og:title": finalTitle,
            "og:description": finalDescription,
            "og:image": finalImage,
            "og:url": finalUrl,
            "twitter:title": finalTitle,
            "twitter:description": finalDescription,
            "twitter:image": finalImage,
            "twitter:url": finalUrl,
        };

        Object.entries(metaTags).forEach(([name, content]) => {
            
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                
                element = document.querySelector(`meta[property="${name}"]`);
            }

            if (element) {
                element.setAttribute("content", content);
            }
        });

        
        let canonical = document.querySelector("link[rel='canonical']");
        if (canonical) {
            canonical.setAttribute("href", finalUrl);
        }

    }, [finalTitle, finalDescription, finalImage, finalUrl]);

    return null;
};

export default SEO;
