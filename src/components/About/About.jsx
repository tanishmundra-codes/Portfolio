import React from 'react'

function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="space-y-8 text-left md:pl-53">
                <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-8">
                    About
                </h1>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                        I'm Miraya. Design engineer in Düsseldorf, born in Sweden.
                    </p>
                    
                    <p>
                        <span className="font-semibold text-gray-900">Here's what I actually do:</span> I take your broken interfaces and make them work. 
                        Not just "look pretty" - actually function at 60fps while being accessible to everyone.
                    </p>
                    
                    <p>
                        Most designers can't code. Most developers can't design. I do both. While 
                        others debate aesthetics, I'm shipping pixel-perfect interfaces that perform. 
                        ARIA compliance isn't optional, it's standard.
                    </p>
                    
                    <p>
                        I've built a 130K+ developer community on social media because I actually 
                        know what I'm talking about. My open-source projects prove it.
                    </p>
                    
                    <p>
                        The result? Interfaces that don't just impress your users - they convert them.
                    </p>
                    
                    <p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 underline transition-colors">
                            I also blog about design, development, and everything in between.
                        </a>
                    </p>
                    
                    <p>
                        When I'm not coding, I'm at the gym or watching anime. Hot chocolate over 
                        coffee, always.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About