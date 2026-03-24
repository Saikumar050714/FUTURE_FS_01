/**
 * Professional Resume PDF Template
 * Generates a beautifully styled HTML string used by html2pdf.js
 */

export function getResumeHTML() {
    return `
    <div style="
        font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 0;
        color: #1a1a2e;
        background: #ffffff;
        line-height: 1.5;
    ">
        <!-- HEADER -->
        <div style="
            background: linear-gradient(135deg, #6c3baa 0%, #3a1078 40%, #1a1a2e 100%);
            color: #ffffff;
            padding: 40px 45px 35px;
            border-radius: 0;
        ">
            <h1 style="
                margin: 0 0 4px;
                font-size: 32px;
                font-weight: 700;
                letter-spacing: 1px;
            ">JOHN DOE</h1>
            <p style="
                margin: 0 0 18px;
                font-size: 15px;
                font-weight: 400;
                color: #c4b5fd;
                letter-spacing: 3px;
                text-transform: uppercase;
            ">Senior Full Stack Developer</p>
            <div style="
                display: flex;
                flex-wrap: wrap;
                gap: 8px 24px;
                font-size: 12.5px;
                color: #e2d9f3;
            ">
                <span>📧 john.doe@email.com</span>
                <span>📱 +91 98765 43210</span>
                <span>🌐 johndoe.dev</span>
                <span>📍 Bangalore, India</span>
                <span>🔗 linkedin.com/in/johndoe</span>
                <span>🐙 github.com/johndoe</span>
            </div>
        </div>

        <!-- BODY -->
        <div style="padding: 30px 45px 40px;">

            <!-- PROFESSIONAL SUMMARY -->
            <div style="margin-bottom: 26px;">
                <h2 style="
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    color: #6c3baa;
                    border-bottom: 2px solid #6c3baa;
                    padding-bottom: 6px;
                    margin: 0 0 12px;
                ">Professional Summary</h2>
                <p style="font-size: 13px; color: #333; margin: 0; line-height: 1.7;">
                    Results-driven Full Stack Developer with 4+ years of experience building high-performance 
                    web applications. Expert in React, Node.js, and cloud-native architecture. Led cross-functional 
                    teams to deliver scalable SaaS products serving 50K+ users. Passionate about clean code, 
                    performance optimization, and delivering exceptional user experiences. Open-source contributor 
                    with 1.2K+ GitHub stars.
                </p>
            </div>

            <!-- TECHNICAL SKILLS -->
            <div style="margin-bottom: 26px;">
                <h2 style="
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    color: #6c3baa;
                    border-bottom: 2px solid #6c3baa;
                    padding-bottom: 6px;
                    margin: 0 0 12px;
                ">Technical Skills</h2>
                <table style="width: 100%; font-size: 12.5px; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 5px 0; width: 130px; font-weight: 600; color: #1a1a2e; vertical-align: top;">Frontend</td>
                        <td style="padding: 5px 0; color: #444;">React.js, Next.js, TypeScript, Redux, Tailwind CSS, GSAP, Three.js, Framer Motion</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px 0; font-weight: 600; color: #1a1a2e; vertical-align: top;">Backend</td>
                        <td style="padding: 5px 0; color: #444;">Node.js, Express.js, Python (FastAPI, Django), GraphQL, REST APIs, WebSockets</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px 0; font-weight: 600; color: #1a1a2e; vertical-align: top;">Database</td>
                        <td style="padding: 5px 0; color: #444;">PostgreSQL, MongoDB, Redis, Firebase Firestore, Prisma ORM</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px 0; font-weight: 600; color: #1a1a2e; vertical-align: top;">DevOps & Cloud</td>
                        <td style="padding: 5px 0; color: #444;">AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD (GitHub Actions), Vercel, Nginx</td>
                    </tr>
                    <tr>
                        <td style="padding: 5px 0; font-weight: 600; color: #1a1a2e; vertical-align: top;">Tools</td>
                        <td style="padding: 5px 0; color: #444;">Git, Figma, Jira, Postman, VS Code, Linux, Webpack, Vite</td>
                    </tr>
                </table>
            </div>

            <!-- PROFESSIONAL EXPERIENCE -->
            <div style="margin-bottom: 26px;">
                <h2 style="
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    color: #6c3baa;
                    border-bottom: 2px solid #6c3baa;
                    padding-bottom: 6px;
                    margin: 0 0 14px;
                ">Professional Experience</h2>

                <!-- Job 1 -->
                <div style="margin-bottom: 18px;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                        <h3 style="margin: 0; font-size: 14px; font-weight: 700; color: #1a1a2e;">Senior Frontend Developer</h3>
                        <span style="font-size: 12px; color: #6c3baa; font-weight: 600;">Jan 2024 — Present</span>
                    </div>
                    <p style="margin: 0 0 6px; font-size: 13px; color: #6c3baa; font-weight: 500;">Tech Solutions Inc. · Bangalore, India</p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 12.5px; color: #333;">
                        <li style="margin-bottom: 4px;">Led a team of 6 frontend engineers to build a React-based SaaS analytics dashboard serving 50K+ monthly active users with 99.9% uptime</li>
                        <li style="margin-bottom: 4px;">Architected a micro-frontend infrastructure using Module Federation, reducing build times by 45% and enabling independent team deployments</li>
                        <li style="margin-bottom: 4px;">Implemented real-time data visualization with D3.js and WebSockets, processing 10K+ events per second</li>
                        <li style="margin-bottom: 4px;">Established CI/CD pipelines with GitHub Actions, reducing deployment time from 30 min to 4 min</li>
                        <li style="margin-bottom: 0;">Improved Lighthouse scores from 62 → 97 through code splitting, lazy loading, and image optimization</li>
                    </ul>
                </div>

                <!-- Job 2 -->
                <div style="margin-bottom: 18px;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                        <h3 style="margin: 0; font-size: 14px; font-weight: 700; color: #1a1a2e;">Full Stack Developer</h3>
                        <span style="font-size: 12px; color: #6c3baa; font-weight: 600;">Jun 2022 — Dec 2023</span>
                    </div>
                    <p style="margin: 0 0 6px; font-size: 13px; color: #6c3baa; font-weight: 500;">Digital Agency Co. · Hyderabad, India</p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 12.5px; color: #333;">
                        <li style="margin-bottom: 4px;">Developed 12+ client-facing web applications using React, Next.js, Node.js, and MongoDB, generating ₹2.5Cr+ in combined client revenue</li>
                        <li style="margin-bottom: 4px;">Built a custom headless CMS with role-based access control, reducing content update cycles by 70%</li>
                        <li style="margin-bottom: 4px;">Designed and implemented RESTful APIs handling 5K+ requests/min with Express.js and PostgreSQL</li>
                        <li style="margin-bottom: 0;">Collaborated with UI/UX designers to deliver pixel-perfect, WCAG 2.1 AA-compliant interfaces</li>
                    </ul>
                </div>

                <!-- Job 3 -->
                <div style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                        <h3 style="margin: 0; font-size: 14px; font-weight: 700; color: #1a1a2e;">Junior Web Developer</h3>
                        <span style="font-size: 12px; color: #6c3baa; font-weight: 600;">Jul 2021 — May 2022</span>
                    </div>
                    <p style="margin: 0 0 6px; font-size: 13px; color: #6c3baa; font-weight: 500;">StartUp Hub · Pune, India</p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 12.5px; color: #333;">
                        <li style="margin-bottom: 4px;">Built and maintained 8 responsive websites using React, achieving 95%+ client satisfaction scores</li>
                        <li style="margin-bottom: 4px;">Integrated third-party APIs (Stripe, Twilio, SendGrid) for payment processing and communications</li>
                        <li style="margin-bottom: 0;">Wrote unit and integration tests using Jest and React Testing Library, achieving 87% code coverage</li>
                    </ul>
                </div>
            </div>

            <!-- KEY PROJECTS -->
            <div style="margin-bottom: 26px;">
                <h2 style="
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    color: #6c3baa;
                    border-bottom: 2px solid #6c3baa;
                    padding-bottom: 6px;
                    margin: 0 0 14px;
                ">Key Projects</h2>

                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                        <h3 style="margin: 0; font-size: 13.5px; font-weight: 700; color: #1a1a2e;">CloudSync — Real-Time Collaboration Platform</h3>
                        <span style="font-size: 11.5px; color: #888;">React, Node.js, Socket.io, Redis</span>
                    </div>
                    <p style="margin: 3px 0 0; font-size: 12.5px; color: #444; line-height: 1.6;">
                        Built a Google Docs-like collaboration tool with real-time cursors, conflict resolution using CRDTs, 
                        and offline-first architecture. Supports 200+ concurrent editors with &lt;50ms latency. 
                        <strong>★ 480+ GitHub stars.</strong>
                    </p>
                </div>

                <div style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                        <h3 style="margin: 0; font-size: 13.5px; font-weight: 700; color: #1a1a2e;">DevMetrics — Developer Analytics Dashboard</h3>
                        <span style="font-size: 11.5px; color: #888;">Next.js, D3.js, PostgreSQL, Docker</span>
                    </div>
                    <p style="margin: 3px 0 0; font-size: 12.5px; color: #444; line-height: 1.6;">
                        Created an analytics platform tracking developer productivity metrics, PR velocity, and code quality scores 
                        across GitHub organizations. Used by 3 companies internally. <strong>★ 320+ GitHub stars.</strong>
                    </p>
                </div>
            </div>

            <!-- EDUCATION -->
            <div style="margin-bottom: 26px;">
                <h2 style="
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    color: #6c3baa;
                    border-bottom: 2px solid #6c3baa;
                    padding-bottom: 6px;
                    margin: 0 0 12px;
                ">Education</h2>

                <div style="margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                        <h3 style="margin: 0; font-size: 14px; font-weight: 700; color: #1a1a2e;">B.Tech in Computer Science & Engineering</h3>
                        <span style="font-size: 12px; color: #6c3baa; font-weight: 600;">2018 — 2022</span>
                    </div>
                    <p style="margin: 2px 0 0; font-size: 13px; color: #444;">
                        Indian Institute of Technology, Hyderabad · <strong>CGPA: 8.7/10</strong> · Dean's List (3 semesters)
                    </p>
                </div>

                <div>
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                        <h3 style="margin: 0; font-size: 14px; font-weight: 700; color: #1a1a2e;">Higher Secondary — Science (Computer Science)</h3>
                        <span style="font-size: 12px; color: #6c3baa; font-weight: 600;">2016 — 2018</span>
                    </div>
                    <p style="margin: 2px 0 0; font-size: 13px; color: #444;">
                        Delhi Public School, Hyderabad · <strong>95.2%</strong> · School Topper in Computer Science
                    </p>
                </div>
            </div>

            <!-- CERTIFICATIONS & ACHIEVEMENTS -->
            <div style="margin-bottom: 0;">
                <h2 style="
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    color: #6c3baa;
                    border-bottom: 2px solid #6c3baa;
                    padding-bottom: 6px;
                    margin: 0 0 12px;
                ">Certifications & Achievements</h2>
                <ul style="margin: 0; padding-left: 18px; font-size: 12.5px; color: #333; columns: 2; column-gap: 30px;">
                    <li style="margin-bottom: 5px;">AWS Certified Solutions Architect – Associate (2024)</li>
                    <li style="margin-bottom: 5px;">Meta Front-End Developer Professional Certificate (2023)</li>
                    <li style="margin-bottom: 5px;">Google Cloud Professional Cloud Developer (2023)</li>
                    <li style="margin-bottom: 5px;">Winner — Smart India Hackathon 2022 (National Level)</li>
                    <li style="margin-bottom: 5px;">1200+ DSA problems solved on LeetCode & CodeForces</li>
                    <li style="margin-bottom: 0;">Speaker at ReactConf India 2024 — "Scaling React at Enterprise"</li>
                </ul>
            </div>

        </div>
    </div>
    `;
}
