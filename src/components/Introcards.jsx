import { motion } from "motion/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

  

export default function Introcards() {
    return(
        <div className="cardscontainer mt-8">
            <motion.div 
                initial={{ x: -100, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.7}}>
                <fieldset className="rounded-lg border-2 border-gray-600">
                    <legend className="text-xl pl-6 pr-6 font-bold" align="center">about me</legend>
                    <div className="p-3 pt-0 text-xl">
                        <p>i'm a cs & statistics undergrad at <span className="text-orange-500"><a href="https://www.comp.nus.edu.sg/">NUS</a></span> focusing on distributed systems, parallel computing, and computational statistics.🤓<br></br><br></br>
                        i'm currently interning at <span className="text-blue-600"><a href="https://ctc-g.com.sg/">伊藤忠テクノソリューションズ</a></span>!<br></br><br></br>
                        in my free time, i also like to cook, work out, listen to music, take pictures, and do some muay thai.💪
                        </p>
                    </div>
                </fieldset>
            </motion.div>
            <motion.div 
                initial={{ x: -100, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.2}}
                className="mt-5">
                <fieldset className="rounded-lg border-2 border-gray-600">
                    <legend className="text-xl font-bold pl-6 pr-6" align="center">tech stack</legend>
                    <div className="p-3 pt-0 text-xl">
                        <p>i'm good at <span className="text-red-500">java</span>, <span className="text-blue-500">python</span>, 
                        <span className="text-yellow-200"> javascript</span>/<span className="text-sky-500">typescript</span> and <span className="text-blue-300">postgresql</span>.<br></br><br></br>
                        i'm getting good at <span className="text-indigo-400">c/c++</span> and <span className="text-fuchsia-400">r</span>.<br></br></p>
                        <Accordion type="single" collapsible className="mt-6">
                            <AccordionItem value="item-1" className="">
                                <AccordionTrigger className="text-xl"><p><span className="text-lime-500">click</span> to see all my technical skills</p></AccordionTrigger>
                                <AccordionContent className="">
                                <p>
                                    Languages: C, C++, Python, JavaScript, TypeScript, SQL, PostgreSQL, R, Java, HTML, CSS<br></br>
                                    Frameworks: React, CUDA, NextJS, Astro, Pandas, NumPy, TailwindCSS<br></br>
                                    Other: Git, Firebase, Supabase, Docker, Mantine, ShadCN, MaterialUI, Bootstrap
                                </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </fieldset>
            </motion.div>
            <motion.div 
                initial={{ x: -100, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.4}}
                className="mt-5">
                <fieldset className="rounded-lg border-2 border-gray-600">
                    <legend className="text-xl font-bold pl-6 pr-6" align="center">contact me</legend>
                    <div className="p-3 pt-0 text-xl">
                        <p>drop me an email at <span className="text-amber-400">sunzedong@u.nus.edu </span><Button size="sm" onClick={() => {navigator.clipboard.writeText("sunzedong@u.nus.edu")}}>copy</Button><br></br><br></br>
                        i'm also on <span className="text-blue-500"><a href="https://www.linkedin.com/in/zedonggg/">linkedin</a></span>, <span className="text-emerald-500"><a href="https://github.com/zedonggg">github</a> </span>
                         and <span className="text-pink-500">x dot com</span>.</p>
                    </div>
                </fieldset>
            </motion.div>
            {/* <motion.div 
                initial={{ x: -100, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.6}}
                className="mt-5">
                <fieldset className="rounded-lg border-2 border-gray-600">
                    <legend className="text-xl font-bold pl-6 pr-6" align="center">my experiences</legend>
                    <div className="p-3 pt-0 text-xl">
                        <p>drop me an email at <span className="text-amber-400">sunzedong@u.nus.edu</span><br></br><br></br>
                        i'm also on <span className="text-blue-500">linkedin</span>, <span className="text-emerald-500">github </span>
                         and <span className="text-pink-500">x dot com</span>.</p>
                    </div>
                </fieldset>
            </motion.div> */}
        </div>
    )
}
