import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        // Intersection Observer for scroll reveal animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        // Observe all existing reveal elements
        const observeRevealElements = () => {
            document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
                observer.observe(el);
            });
        };

        observeRevealElements();

        // MutationObserver to watch for dynamically added .reveal elements
        // This handles tab/filter switching in Projects & Resume sections
        const mutationObserver = new MutationObserver((mutations) => {
            let hasNewRevealElements = false;
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        if (node.classList?.contains('reveal') && !node.classList?.contains('active')) {
                            observer.observe(node);
                            hasNewRevealElements = true;
                        }
                        node.querySelectorAll?.('.reveal:not(.active)')?.forEach((el) => {
                            observer.observe(el);
                            hasNewRevealElements = true;
                        });
                    }
                });
            });
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
