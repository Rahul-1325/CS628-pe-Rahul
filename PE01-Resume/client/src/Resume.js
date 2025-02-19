import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Rahul Dondapati</h1>
                <p>16603 NE 39th Way,Redmond,WA,98052 | (425) 520-4677 | dondapatirahul@cityuniversity.edu</p>                
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                <h3>Master of Science in Computer Science</h3>
                <p>City University of Seattle, Seattle | June 2025</p>
                <p>GPA: 3.7/4.0</p>
                <h3>Bachelor of Technology in Electronics and Communication Engineering</h3>
                <p>City University of Seattle, Seattle | June 2025</p>
                <p>GPA: 3.7/4.0</p>
                </div>
            </section>
            <section className="section">
                <h2>Skills</h2>
                <div className="Skills">
                <p>Computer Languages Skill: C, C++, Java, Python, R, SQL</p>
                <p>AI: Machine Learning, Visual Recognition, TensorFlow, Keras, NumPy, Pandas, Scikit-learn</p>
                <p>App Development: React, JavaScript</p>
                <p>Databases & Cloud Services: VSCode, MySQL, AWS(S3, EC2, Lambda) </p>
                </div>
            </section>    
            <section className="section">
                <h2>Work Experience</h2>
                <div className="Work Experience">
                <h3>Junior Software Engineer</h3>    
                <p>SmartImpact Technologies Pvt Ltd| Hyderabad, India | Dec 2020 - Aug 2023</p>    
                <p>•Collaborated closely with senior developers to design, implement, and test scalable software solutions, improving feature delivery timelines by 15%.</p>
                <p>•Assisted in troubleshooting and resolving software defects, leading to a 20% reduction in bug reports.</p>
                <p>•Demonstrated proficiency in Java programming, with deep understanding of data structures, collections framework, exception handling, and multithreading, contributing to optimized and maintainable code.</p>

                </div>
            </section>
            
        </div>    
    )
};

export default Resume;