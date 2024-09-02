
"use client"
import React from "react";
import { Github, Linkedin, Mail } from 'lucide-react';

const Media = () => {
    return (
        <div className="flex justify-end space-x-4">
                <a href="https://github.com/Chloe-SD" className="hover:text-pink-300 transition-colors"
                    target="_blank">
                    <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/chloe-nibali" className="hover:text-pink-300 transition-colors"
                    target="_blank">
                    <Linkedin size={24} />
                </a>
                <a href="mailto:chloe.nibali@edu.sait.ca" className="hover:text-pink-300 transition-colors">
                    <Mail size={24}/>
                </a>
            </div>
    );
};

export default Media;