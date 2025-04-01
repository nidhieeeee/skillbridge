import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Menu, X, GraduationCap, PlayCircle, BookOpen, Layers, Eye, Users, Briefcase, Code } from "lucide-react";

export default function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const words = ["AI-Powered Learning", "Immersive AR/VR", "Real-World Challenges", "Get Hired by TopCompanies"];
    const [wordIndex, setWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingSpeed = isDeleting ? 50 : 100;
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentWord.length) {
                setDisplayedText(currentWord.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayedText(currentWord.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                setIsDeleting(!isDeleting);
                if (!isDeleting) {
                    setTimeout(() => setIsDeleting(true), 1000);
                } else {
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, typingSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <div className="bg-gray-900 text-white">
            {/* Navbar */}
            <nav className="bg-black text-white py-4 px-6 w-full flex justify-between items-center fixed top-0 left-0 z-50 border-b border-gray-700">
                <div className="text-2xl font-bold flex items-center gap-2">
                    <GraduationCap className="text-green-400" /> SkillBridge
                </div>
                <div className="hidden md:flex gap-6 text-gray-300 text-xl">
                    <a href="#features" className="hover:text-green-400">Features</a>
                    <a href="#careers" className="hover:text-green-400">Careers</a>
                    <a href="#about" className="hover:text-green-400">About</a>
                </div>
                <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X /> : <Menu />}
                </div>
                {menuOpen && (
                    <div className="md:hidden bg-black text-white absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-4 border-t border-gray-700">
                        <a href="#features" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Features</a>
                        <a href="#careers" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Careers</a>
                        <a href="#courses" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Courses</a>
                        <a href="#about" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>About</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-white"
                style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/06/60/97/97/360_F_660979768_iaCZlR9EISLm3PWUoHrNTwzjoxHPYWT5.jpg')" }}>
                <div className="text-center max-w-4xl p-10 rounded-lg" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                    <h1 className="text-5xl font-bold mb-6">
                        <span className="text-gray-400">Master </span>
                        <span className="text-green-400">{displayedText}</span>
                        <span className="text-green-400">|</span>
                    </h1>
                    <p className="text-lg text-gray-300">
                        AI-driven personalized learning, immersive AR/VR experiences, and skill exchange—all in one platform.
                    </p>
                    <div className="mt-8 flex gap-4 justify-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
                            <BookOpen /> Start Learning
                        </button>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
                            <PlayCircle /> Watch Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="bg-gray-900 text-white py-20 px-6 text-center border-t border-gray-700">
                <h2 className="text-4xl font-bold mb-10">Why Choose SkillBridge?</h2>
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <FeatureCard icon={Layers} title="AI-Powered Learning" description="Personalized skill recommendations tailored to you." />
                    <FeatureCard icon={Eye} title="AR/VR Immersive Learning" description="Real-world simulations & virtual industry tours." />
                    <FeatureCard icon={Users} title="Skill Exchange & Hiring" description="Earn credits by teaching and get hired through challenges." />
                </div>
            </div>

            {/* Career Opportunities Section */}
            <div
                id="careers"
                className="bg-gray-800 text-white py-16 px-6 text-center"
                ref={ref}
            >
                <h2 className="text-4xl font-bold mb-6 text-green-400">Career Opportunities</h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    Get real-world projects, participate in hiring challenges, and showcase your skills to top employers.
                </p>

                {/* Job Listings */}
                <div className="mt-10 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-green-400 mb-4">Latest Job Openings</h3>
                    <div className="space-y-4">
                        {[
                            { title: "Frontend Developer", company: "Remote | Competitive Salary" },
                            { title: "AI/ML Researcher", company: "Google | Mountain View, CA" },
                            { title: "AR/VR Developer", company: "Meta | Hybrid" },
                            { title: "UX/UI Designer", company: "OpenAI | San Francisco, CA" }
                        ].map((job, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-700 p-4 rounded-lg shadow-lg text-left cursor-pointer transition-all duration-300 hover:bg-gray-600 hover:shadow-xl"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                                <p className="text-gray-300 text-sm">{job.company}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            {/* About Section */}
            <div id="about" className="bg-gray-900 text-white py-16 px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">About SkillBridge</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    SkillBridge is revolutionizing education by combining AI, AR/VR, and real-world challenges to make learning interactive, effective, and career-focused.
                </p>
            </div>



            <div id="get-started" className="bg-gray-800 text-white py-16 px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-green-400">
                    Ready to Elevate Your Skills?
                </h2>

                <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-6">
                    Join thousands of learners and professionals in our AI-powered immersive learning platform. Start your journey today!
                </p>

                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300">
                    Get Started Now
                </button>
            </div>

            {/* Footer */}
            <footer className="bg-black text-gray-300 py-10 text-center border-t border-gray-700">
                <p>&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
            </footer>
        </div>


    );
}

function FeatureCard({ icon: Icon, title, description }) {
    return (
        <motion.div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center" whileHover={{ scale: 1.05 }}>
            <Icon className="text-green-400 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    );
}
