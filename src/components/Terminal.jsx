import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'system', content: 'INITIALIZING ENIGMA SECURE SHELL...' },
        { type: 'system', content: 'CONNECTING TO 127.0.0.1... ESTABLISHED.' },
        { type: 'info', content: 'Welcome to the Lab Terminal. Type "help" to view available commands.' },
    ])
    const [input, setInput] = useState('')
    const bottomRef = useRef(null)
    const inputRef = useRef(null)

    const commands = {
        help: () => (
            <>
                Available commands:<br />
                <span className="text-purple-400">about</span>    - View mission directive<br />
                <span className="text-purple-400">projects</span> - List active experiments<br />
                <span className="text-purple-400">contact</span>  - Initialize encrypted channel<br />
                <span className="text-purple-400">clear</span>    - Purge terminal buffer<br />
                <span className="text-purple-400">hack</span>     - [RESTRICTED ACCESS]
            </>
        ),
        about: "Enigma Labs is a creative engineering division focused on high-performance web systems and automation.",
        projects: "Active Projects: Enigma Foods, xFected Selfbot, Epic Gen V1, Academic Data Parser.",
        contact: "Opening communication channels... Reach out via email: access@enigmalabs.dev",
        clear: "clear",
        hack: "ACCESS DENIED. THIS ATTEMPT HAS BEEN LOGGED.",
        sudo: "NICE TRY. ADMIN PRIVILEGES REQUIRED."
    }

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase()
        let response = { type: 'output', content: `Command not found: ${cleanCmd}. Type "help".` }

        if (cleanCmd === '') return

        if (commands[cleanCmd]) {
            if (cleanCmd === 'clear') {
                setHistory([])
                return
            }
            response = { type: 'success', content: commands[cleanCmd] }
        }

        setHistory(prev => [...prev, { type: 'input', content: cmd }, response])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCommand(input)
        setInput('')
    }

    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history])

    // Focus input on click
    const handleTerminalClick = () => {
        inputRef.current?.focus()
    }

    return (
        <section id="terminal" className="relative bg-black border-t border-purple-500/20 py-24">
            {/* Background Matrix/Grid effect */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(18,18,18,0.9)_50%,rgba(0,0,0,0.9)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-12 text-center">
                        <span className="text-purple-400 font-mono text-xs tracking-widest uppercase">// System Interface</span>
                        <h2 className="text-4xl font-black mt-2 tracking-tight">
                            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                TERMINAL ACCESS
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <div
                        className="w-full max-w-4xl mx-auto bg-black/90 rounded-lg border border-green-500/30 shadow-[0_0_30px_rgba(0,255,0,0.1)] overflow-hidden font-mono text-sm md:text-base relative backdrop-blur-sm"
                        onClick={handleTerminalClick}
                    >
                        {/* Terminal Header */}
                        <div className="bg-gray-900/80 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                            </div>
                            <div className="flex-1 text-center text-[10px] text-gray-500 tracking-widest uppercase">
                                bash — 80x24
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 h-[400px] overflow-y-auto custom-scrollbar cursor-text relative">
                            {/* CRT Scanline Effect */}
                            <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-10"></div>

                            {/* Content */}
                            <div className="relative z-10 space-y-2">
                                {history.map((entry, i) => (
                                    <div key={i} className={`${entry.type === 'input' ? 'text-white' : entry.type === 'error' ? 'text-red-400' : 'text-green-400/90'}`}>
                                        {entry.type === 'input' && <span className="text-purple-400 mr-2">➜ ~</span>}
                                        {entry.content}
                                    </div>
                                ))}

                                <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
                                    <span className="text-purple-400">➜ ~</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1 bg-transparent border-none outline-none text-white caret-green-500 font-mono"
                                        autoFocus
                                        spellCheck="false"
                                        autoComplete="off"
                                    />
                                </form>
                                <div ref={bottomRef}></div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default Terminal
