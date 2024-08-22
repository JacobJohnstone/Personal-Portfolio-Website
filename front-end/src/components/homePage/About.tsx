const About = () => {

    return(
        <div className="flex relative">
            <h5 className='flex justify-center items-center text-center text-white relative w-2/5 left-1/4 -translate-x-1/3 top-4 px-6 py-4
                text-xl font-light font-mono
                bg-gradient-to-b from-gray-600 to-bottom-gradient rounded-2xl'>
                Entering post-secondary I knew I enjoyed a challenge and my interests/skills lead me into the engineering program, but I did not expect the mandatory "Introduction to Programming" course to make an impact on my life so quickly. Since then I’ve enjoyed finding new things to learn whenever I can as I continue to explore the tech industry. As a recent graduate I am excited to start my career and practice my hobbies in a professional setting. Aside from programming, in my free time I enjoy getting active and keeping up with sports, although it seems I should stick to watching from the couch. Please reach out if you would like to chat!
            </h5>
            <img className="flex relative -right-1/3 bg-red-500 top-4" alt="coolhobby"></img>
        </div>
    )

}

export default About;