"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Award, GraduationCap, User, Sparkles } from 'lucide-react';
import { collegeLeaderboard, studentLeaderboard } from '@/data/leaderboard';
import CountUp from 'react-countup';
import { MotionDiv, MotionH1, MotionP } from '@/components/Framer';

const maxPoints = Math.max(...collegeLeaderboard.map(c => c.points));
const maxStudentPoints = Math.max(...studentLeaderboard.map(s => s.points));

const getZoneColor = (zone: string) => {
    switch (zone) {
        case 'Aurora': return { color: 'hsl(350 75% 50%)', name: 'crimson' };
        case 'Spark': return { color: 'hsl(40 80% 60%)', name: 'champagne' };
        case 'Noel': return { color: 'hsl(160 70% 40%)', name: 'emerald' };
        default: return { color: 'hsl(350 75% 50%)', name: 'crimson' };
    }
};

const getRankGlow = (rank: number) => {
    switch (rank) {
        case 1: return {
            glow: '0 0 60px hsl(40 80% 60% / 0.6), 0 0 120px hsl(40 80% 60% / 0.3)',
            color: 'hsl(40 80% 60%)',
            bg: 'hsl(40 80% 60% / 0.15)',
            intensity: 1,
        };
        case 2: return {
            glow: '0 0 40px hsl(200 30% 80% / 0.5), 0 0 80px hsl(200 30% 80% / 0.2)',
            color: 'hsl(200 30% 80%)',
            bg: 'hsl(200 30% 80% / 0.1)',
            intensity: 0.8,
        };
        case 3: return {
            glow: '0 0 30px hsl(25 70% 50% / 0.4), 0 0 60px hsl(25 70% 50% / 0.2)',
            color: 'hsl(25 70% 50%)',
            bg: 'hsl(25 70% 50% / 0.1)',
            intensity: 0.6,
        };
        default: return {
            glow: 'none',
            color: 'hsl(var(--muted-foreground))',
            bg: 'hsl(var(--muted) / 0.3)',
            intensity: 0.3,
        };
    }
};

const Results = () => {
    const [activeTab, setActiveTab] = useState<'colleges' | 'students'>('colleges');
    const [hoveredRank, setHoveredRank] = useState<number | null>(null);

    return (
        <div className="min-h-screen">
            <main className="pt-32 pb-24 relative z-10">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        className="text-center mb-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center justify-center gap-4 mb-6"
                        >
                            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground ">
                                Rankings
                            </span>
                        </MotionDiv>

                        <MotionH1
                            className="text-6xl md:text-8xl lg:text-9xl mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <span className="text-gradient-christmas">LEADERBOARDS</span>
                        </MotionH1>

                        <MotionP
                            className="text-editorial text-lg max-w-xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Track the luminaries of Illuµnate
                        </MotionP>
                    </MotionDiv>

                    <MotionDiv
                        className="flex justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {['colleges', 'students'].map((tab) => (
                            <motion.button
                                key={tab}
                                onClick={() => setActiveTab(tab as 'colleges' | 'students')}
                                className={`relative px-8 py-4 text-lg tracking-wider uppercase transition-all duration-300 ${activeTab === tab
                                    ? 'text-foreground'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    {tab === 'colleges' ? <GraduationCap className="w-5 h-5" /> : <User className="w-5 h-5" />}
                                    {tab === 'colleges' ? 'Colleges' : 'Students'}
                                </span>
                                {activeTab === tab && (
                                    <MotionDiv
                                        layoutId="activeTab"
                                        className="absolute inset-0 glass-christmas rounded-lg"
                                        style={{
                                            boxShadow: '0 0 30px hsl(350 75% 50% / 0.2)',
                                        }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </MotionDiv>
                    <div className="max-w-5xl mx-auto">
                        <AnimatePresence mode="wait">
                            {activeTab === 'colleges' ? (
                                <MotionDiv
                                    key="colleges"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    {collegeLeaderboard.map((college, index) => {
                                        const rankStyle = getRankGlow(college.rank);
                                        const zoneColor = getZoneColor(college.zone);
                                        const barWidth = (college.points / maxPoints) * 100;
                                        const isHovered = hoveredRank === college.rank;

                                        return (
                                            <MotionDiv
                                                key={college.rank}
                                                initial={{ opacity: 0, x: -40 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                                onMouseEnter={() => setHoveredRank(college.rank)}
                                                onMouseLeave={() => setHoveredRank(null)}
                                                className="group relative"
                                            >
                                                <MotionDiv
                                                    className="relative flex items-center gap-6 p-6 rounded-2xl overflow-hidden"
                                                    style={{
                                                        background: rankStyle.bg,
                                                        boxShadow: isHovered ? rankStyle.glow : 'none',
                                                    }}
                                                    animate={{
                                                        boxShadow: isHovered ? rankStyle.glow : 'none',
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <MotionDiv
                                                        className="absolute inset-0 opacity-20"
                                                        style={{
                                                            background: `linear-gradient(90deg, ${zoneColor.color}20 0%, transparent ${barWidth}%)`,
                                                        }}
                                                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                                                        animate={{ scaleX: 1 }}
                                                        transition={{ duration: 1, delay: index * 0.1 }}
                                                    />
                                                    <MotionDiv
                                                        className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                                                        style={{
                                                            background: rankStyle.bg,
                                                            boxShadow: college.rank <= 3 ? `0 0 20px ${rankStyle.color}40` : 'none',
                                                        }}
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        {college.rank === 1 && <Trophy className="w-7 h-7" style={{ color: rankStyle.color }} />}
                                                        {college.rank === 2 && <Medal className="w-7 h-7" style={{ color: rankStyle.color }} />}
                                                        {college.rank === 3 && <Award className="w-7 h-7" style={{ color: rankStyle.color }} />}
                                                        {college.rank > 3 && (
                                                            <span className="text-2xl text-muted-foreground">{college.rank}</span>
                                                        )}
                                                    </MotionDiv>
                                                    <div className="flex-1 min-w-0 relative z-10">
                                                        <h3 className="text-xl md:text-2xl text-foreground truncate group-hover:text-gradient transition-all duration-300">
                                                            {college.name}
                                                        </h3>
                                                    </div>
                                                    <div className="relative z-10 text-right">
                                                        <MotionDiv
                                                            className="text-4xl md:text-5xl"
                                                            style={{
                                                                color: college.rank <= 3 ? rankStyle.color : 'hsl(var(--foreground))',
                                                                textShadow: college.rank <= 3 ? `0 0 30px ${rankStyle.color}60` : 'none',
                                                            }}
                                                        >
                                                            <CountUp end={college.points} duration={1500 + index * 100} />
                                                        </MotionDiv>
                                                        <div className="text-xs text-muted-foreground  tracking-wider uppercase mt-1">
                                                            points
                                                        </div>
                                                    </div>
                                                    <MotionDiv
                                                        className="absolute bottom-0 left-0 h-px"
                                                        style={{
                                                            background: `linear-gradient(90deg, ${zoneColor.color}, transparent)`,
                                                            width: `${barWidth}%`,
                                                        }}
                                                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                                                        animate={{ scaleX: 1 }}
                                                        transition={{ duration: 1.2, delay: index * 0.1 }}
                                                    />
                                                </MotionDiv>
                                            </MotionDiv>
                                        );
                                    })}
                                </MotionDiv>
                            ) : (
                                <MotionDiv
                                    key="students"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    {studentLeaderboard.map((student, index) => {
                                        const rankStyle = getRankGlow(student.rank);
                                        const zoneColor = getZoneColor(student.zone);
                                        const barWidth = (student.points / maxStudentPoints) * 100;
                                        const isHovered = hoveredRank === student.rank;

                                        return (
                                            <MotionDiv
                                                key={student.rank}
                                                initial={{ opacity: 0, x: 40 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                                onMouseEnter={() => setHoveredRank(student.rank)}
                                                onMouseLeave={() => setHoveredRank(null)}
                                                className="group relative"
                                            >
                                                <MotionDiv
                                                    className="relative flex items-center gap-6 p-6 rounded-2xl overflow-hidden"
                                                    style={{
                                                        background: rankStyle.bg,
                                                    }}
                                                    animate={{
                                                        boxShadow: isHovered ? rankStyle.glow : 'none',
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <MotionDiv
                                                        className="absolute inset-0 opacity-15"
                                                        style={{
                                                            background: `linear-gradient(90deg, hsl(350 75% 50% / 0.3) 0%, transparent ${barWidth}%)`,
                                                        }}
                                                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                                                        animate={{ scaleX: 1 }}
                                                        transition={{ duration: 1, delay: index * 0.1 }}
                                                    />
                                                    <MotionDiv
                                                        className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                                                        style={{
                                                            background: rankStyle.bg,
                                                            boxShadow: student.rank <= 3 ? `0 0 20px ${rankStyle.color}40` : 'none',
                                                        }}
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        {student.rank === 1 && <Trophy className="w-7 h-7" style={{ color: rankStyle.color }} />}
                                                        {student.rank === 2 && <Medal className="w-7 h-7" style={{ color: rankStyle.color }} />}
                                                        {student.rank === 3 && <Award className="w-7 h-7" style={{ color: rankStyle.color }} />}
                                                        {student.rank > 3 && (
                                                            <span className="text-2xl text-muted-foreground">{student.rank}</span>
                                                        )}
                                                    </MotionDiv>

                                                    <div className="flex-1 min-w-0 relative z-10">
                                                        <h3 className="text-xl md:text-2xl text-foreground truncate group-hover:text-gradient transition-all duration-300">
                                                            {student.name}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground  truncate mt-1">
                                                            {student.college}
                                                        </p>
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <span
                                                                className="text-xs tracking-wide px-3 py-1 rounded-full"
                                                                style={{
                                                                    background: `${zoneColor.color}/20`,
                                                                    color: zoneColor.color,
                                                                }}
                                                            >
                                                                {student.zone}
                                                            </span>
                                                        </div>

                                                    </div>
                                                    <div className="relative z-10 text-right">
                                                        <MotionDiv
                                                            className="text-4xl md:text-5xl"
                                                            style={{
                                                                color: student.rank <= 3 ? rankStyle.color : 'hsl(var(--foreground))',
                                                                textShadow: student.rank <= 3 ? `0 0 30px ${rankStyle.color}60` : 'none',
                                                            }}
                                                        >
                                                            <CountUp end={student.points} duration={1500 + index * 100} />
                                                        </MotionDiv>
                                                        <div className="text-xs text-muted-foreground  tracking-wider uppercase mt-1">
                                                            points
                                                        </div>
                                                    </div>
                                                    <MotionDiv
                                                        className="absolute bottom-0 left-0 h-px"
                                                        style={{
                                                            background: `linear-gradient(90deg, hsl(350 75% 50%), hsl(40 80% 60%), transparent)`,
                                                            width: `${barWidth}%`,
                                                        }}
                                                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                                                        animate={{ scaleX: 1 }}
                                                        transition={{ duration: 1.2, delay: index * 0.1 }}
                                                    />
                                                </MotionDiv>
                                            </MotionDiv>
                                        );
                                    })}
                                </MotionDiv>
                            )}
                        </AnimatePresence>

                        {((activeTab === 'colleges' && collegeLeaderboard.length === 0) ||
                            (activeTab === 'students' && studentLeaderboard.length === 0)) && (
                                <MotionDiv
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-20"
                                >
                                    <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground ">No results found</p>
                                </MotionDiv>
                            )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Results;
