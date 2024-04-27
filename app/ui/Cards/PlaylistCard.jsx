/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const cardData = [
    {
        key: 1,
        title: "Revive Image",
        techStack: [
            "NextJS", "React", "Tailwind CSS", "Prisma", "NextAuth", "Redis", "TypeScript"
        ]
    },
    {
        key: 2,
        title: "Google Docs Clone",
        techStack: [
            "React", "Tailwind CSS", "Socket.io", "TypeScript"
        ]
    },
    {
        key: 3,
        title: "GitHub Readme Creator",
        techStack: [
            "NextJS", "React", "Tailwind CSS", "JavaScript"
        ]
    },
]

const PlaylistCard = ({ title, techStack, url }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full ${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? (
                <>
                    <div className="mx-auto h-full p-4 bg-white border rounded-[4px] shadow-sm flex flex-col justify-between cursor-pointer animate-pulse">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="bg-gray-200 py-1 px-2 rounded-sm font-semibold text-xs leading-4"></span>
                                <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-lg leading-6 text-start font-semibold h-5 bg-gray-200 rounded animate-pulse"></h2>
                                <p className="mt-2 text-gray-200 leading-7 tracking-normal h-3 bg-gray-200 rounded animate-pulse"></p>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-10 h-10 mr-3 rounded-xl bg-gray-200 animate-pulse"></div>
                            <span className="font-medium leading-10 text-gray-200 cursor-pointer tracking-normal h-3 bg-gray-200 rounded animate-pulse"></span>
                        </div>
                    </div>
                </>
            ) : (
                // Render actual content
                <Link href={url} target="_blank">
                    <div className="mx-auto h-full p-4 bg-white border rounded-md shadow-sm flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="mt-2">
                                <h2 className="text-lg leading-6 text-start font-semibold text-gray-800 tracking-normal">
                                    {title}
                                </h2>
                                <p className="mt-2 text-[#0e0e0e] leading-7 tracking-normal">
                                    {Array.isArray(techStack) && techStack.length > 0 ? (
                                        techStack.map((tech, index) => (
                                            <span key={index} className="mt-2 text-[#0e0e0e] leading-7 tracking-normal">
                                                {tech}
                                                {index !== techStack.length - 1 && ' • '}
                                            </span>
                                        ))
                                    ) : (
                                        <span>No technologies specified</span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default PlaylistCard;
